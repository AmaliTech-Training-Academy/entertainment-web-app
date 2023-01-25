const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/entertainmentDB')

.then(() => {
    console.log("Mongodb Database Created")
})
.catch(() =>{
    console.log("Failed to Create Database");
})


//Creating the Document or table or schema

const LoginSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model('Collection1', LoginSchema)

module.exports = collection