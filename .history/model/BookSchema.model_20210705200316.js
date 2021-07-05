'use strict'
const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({

    name: String,
    description: 'description',
    status: 'status'

});

module.exports=BookSchema;