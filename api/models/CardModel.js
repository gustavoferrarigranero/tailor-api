'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CardSchema = new Schema({
  list_id: {
    type: Schema.Types.ObjectId,
    required: 'Kindly enter the id of the parent List'
  },
  title: {
    type: String,
    required: 'Kindly enter the title of the card'
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

module.exports = mongoose.model('Card', CardSchema);