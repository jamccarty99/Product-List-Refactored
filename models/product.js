const mongoose = require('mongoose')
const {ReviewSchema} = require('./review')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  category: String,
  name: String,
  price: Number,
  image: String,
  reviews: [ReviewSchema]
})

module.exports = mongoose.model('Product', ProductSchema)