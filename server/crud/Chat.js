const express = require('express')
const router = express.Router()
const Chat = require('../models/Chat')

router.get('/', async (req, res) => {
    let chat = await Chat.find()
    res.send(chat).status(200)
})

router.post('/', async (req, res) => {

    const { chatMessage, fromUserId, toUserId  } = req.body
    try {


       const chat = new Chat({
            chatMessage,
            fromUserId,
            toUserId
        })

        await chat.save()

        res.json({ message: 'chat inserted successfully' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})

module.exports = router