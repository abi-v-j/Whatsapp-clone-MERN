import { Router } from 'express';
import Friends from '../Models/Friends.js';
import User from '../Models/User.js';  // Import the User model
import jwt from 'jsonwebtoken';
import '../Env.js';
import mongoose from 'mongoose';

const router = new Router();

router.get('/:Id', async (req, res) => {
    try {
        const Id = req.params.Id;

        const decodedToken = jwt.verify(Id, process.env.JWT_SECRET);
        const userId = decodedToken.user.id;

        const ObjUser = new mongoose.Types.ObjectId(userId);

        const filteredFriends = await Friends.aggregate([
            {
                $match: {
                    $or: [
                        { UserOne: ObjUser },
                        { UserTwo: ObjUser }
                    ]
                }
            },
            {
                $lookup: {
                    from: 'users', 
                    localField: 'UserOne',
                    foreignField: '_id',
                    as: 'UserOneData'
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'UserTwo',
                    foreignField: '_id',
                    as: 'UserTwoData'
                }
            },
            {
                $project: {
                    friend: {
                        $cond: {
                            if: { $eq: ['$UserOne', ObjUser] },
                            then: { $arrayElemAt: ['$UserTwoData', 0] },
                            else: { $arrayElemAt: ['$UserOneData', 0] }
                        }
                    }
                }
            }
        ]);

        res.status(200).send(filteredFriends);
        console.log(filteredFriends);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

export default router;
