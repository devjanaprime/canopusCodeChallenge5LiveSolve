// DO NOT MODIFY
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let heroSchema = new Schema({
  alias: String,
  city: String,
  power: String
});

let Hero = mongoose.model('heros', heroSchema); // heros is the collection name

module.exports = Hero;
