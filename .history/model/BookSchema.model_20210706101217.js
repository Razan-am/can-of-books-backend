'use strict'
const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({

    name: {type: String},
    description: String,
    status: String

});

module.exports=BookSchema;