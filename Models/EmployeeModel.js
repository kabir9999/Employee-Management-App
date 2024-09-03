const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    salary: {
        type:String,
        required:true
    },
    createedAt: {
        type:Date,
        default:new Date()
    },
    updatedAt: {
        type:Date,
        default:new Date()
    },
    profileImage: {
        type:String
    }

 });

 const EmployeeModel = mongoose.model('employees' , EmployeeSchema);

module.exports = EmployeeModel;