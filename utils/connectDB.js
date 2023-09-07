const mongoose = require('mongoose')
const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    const db = mongoose.connection
    db.on('open',()=>{console.log('connected to db');})
    db.on('error',()=>{console.log('error connecting to db');})
    db.on('close',()=>{console.log('disconnected to db');})
}

module.exports = connectDB