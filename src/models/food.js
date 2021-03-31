'use strict';
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  type: { type: String, required: true },
  calories: { type: String },
});

const foodModel = mongoose.model('food', foodSchema); // create (sql table) with name 'food'

module.exports = foodModel;