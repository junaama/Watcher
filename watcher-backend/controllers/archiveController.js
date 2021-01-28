const express = require("express");
const router = express.Router();
const Archive = require("../models/archive")

//display all notes in archive
router.get("/", async (req, res)=> {
    try {
        const posts = await Archive.find();
        return res.json({posts});

    }catch(err){
        console.error(err);
        return res.status(500).send(err.message);
    }
});

router.get("/:id", async (req, res)=> {
    try{
        const archive = await Archive.findById(req.params.id);
        return res.json({
            date: archive.date,
            title: archive.title,
            notes: archive.notes,
            id: archive._id
        })
    }catch(err){
        console.error(err);
        return res.status(500).send(err.message)
    }
})
//delete in archive
router.delete("/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const deleted = await Archive.findByIdAndDelete(id);
        if(deleted){
            return res.status(500).send("Archived post removed")
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

module.exports = router;