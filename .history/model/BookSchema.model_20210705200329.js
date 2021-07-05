'use strict'
const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({

    name: 'name',
    description: 'description',
    status: 'status'

});

module.exports=BookSchema;