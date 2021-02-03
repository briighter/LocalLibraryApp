const express = require('express')
var router = express.Router()
var ObjectId = require('mongodb').ObjectID;

var { Employee } = require('../models/employee')

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs) }
        else { console.log("Error in retrieving Employees:" + JSON.stringify(err, undefined, 2)) }
    })
})

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id: ${req.params.id}`)

    Employee.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc) }
        else { console.log("Error in retrieving Employees:" + JSON.stringify(err, undefined, 2)) }
    })
})

router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    })
    emp.save((err, docs) => {
        if (!err) { res.send(docs) }
        else { console.log("Error in retrieving Employees:" + JSON.stringify(err, undefined, 2)) }
    })
})

router.post('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id: ${req.params.id}`)

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    }
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc) }
        else { console.log("Error in Employee Update:" + JSON.stringify(err, undefined, 2)) }
    })
})

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id: ${req.params.id}`)

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc) }
        else { console.log("Error in Employee Delete:" + JSON.stringify(err, undefined, 2)) }
    })

})

module.exports = router
