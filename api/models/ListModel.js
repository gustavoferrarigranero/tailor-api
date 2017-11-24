'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ListSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the title of the list'
  },
  order: {
    type: Number,
    default: 0
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('List', ListSchema);