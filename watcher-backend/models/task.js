const mongoose = require('../db/connection');

const taskSchema = new mongoose.Schema(
    {
        "date": Date,
        "content": String,
        "link": String
        
    }
);

const Task = mongoose.model("Task", taskSchema)
module.exports = Task