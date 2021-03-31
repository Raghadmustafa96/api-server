'use strict';
const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  type: { type: String, required: true },
  gender: { type: String },
});

const clothesModel = mongoose.model('clothes', clothesSchema); // create (sql table) with name 'clothes'

module.exports = clothesModel;