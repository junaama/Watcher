const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.get("/", async (req, res)=> {
    try {
        const tasks = await Task.find();
        return res.json({tasks});

    }catch(err){
        console.error(err);
        return res.status(500).send(err.message);
    }
});

router.get("/:id", async (req, res)=> {
    try{
        const task = await Task.findById(req.params.id);
        return res.json({
            date: task.date,
            content: task.content,
            link: task.link,
            id: task._id
        })
    }catch(err){
        console.error(err);
        return res.status(500).send(err.message)
    }
})

//post
//https://morioh.com/p/751e0a95d1d5
router.post("/", async (req, res)=> {
    try {
        const {date, content, link} = req.body;
        const task = new Task({date, content, link});
        const ret = await task.save();
    } catch (error) {
        return res.status(500).send(error.message)
    }
})
//put
router.put("/:id", (req, res)=> {
    Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (error, updated)=> {
            if (error) console.log(error)
            else res.send(updated)
        }
    )
})
//delete
router.delete("/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const deleted = await Task.findByIdAndDelete(id);
        if(deleted){
            return res.status(500).send("Task removed")
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
})
module.exports = router;