const mongoose = require('mongoose')
const { Schema } = mongoose

const employeeSchema = new Schema({
    name: String,
    position: String,
    office: String,
    salary: String
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = { Employee }