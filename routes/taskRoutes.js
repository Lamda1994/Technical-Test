const express = require('express')
const router = express.Router()
const Task = require('../models/task')

router.get('/', async (req, res)=>{
    try{
        const task = await Task.find()
        res.json(task)    
    } catch (err) {
        console.log(err)
    }    
})

router.get('/:id', async (req, res)=>{
    try{
        const task = await Task.findById(req.params.id)
        res.json(task)    
    } catch (err) {
        console.log(err)
    }    
})

router.post('/', async (req,res)=>{
    try {
        const {title, description} = req.body
        const task = new Task({title, description})
        await task.save()
        res.json({status:'Data received'})
    } catch (err) {
        console.log(err)
    }
        
})

router.put('/:id', async (req,res)=>{
    try {
        const {title, description, status} = req.body
        const update = {title : title, description : description, status : status}
        await Task.findByIdAndUpdate(req.params.id, update)
        res.json({status:'Task updated'})
    } catch (err) {
        console.log(err)
    }
})

router.delete('/:id', async (req,res) => {
    try{
        await Task.findByIdAndRemove(req.params.id)
        res.json({status: 'Data removed'})
    } catch (err) {
        console.log(err)
    }
})

module.exports = router