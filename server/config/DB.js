const mongoose = require('mongoose')
require('../env.js')

const db =  process.env.MOGOOSE_URL

const connectDB = async () =>{
    try{
       await mongoose.connect(db);
        console.log("db connection established");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;