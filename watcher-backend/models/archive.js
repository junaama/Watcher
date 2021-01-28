const mongoose = require('../db/connection')

const archiveSchema = new mongoose.Schema({
    "date": Date,
    "title": String, 
    "notes": String
})

const Archive = mongoose.model("Archive", archiveSchema)
module.exports = Archive