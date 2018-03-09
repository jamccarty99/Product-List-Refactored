const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    userName: String,
    text: String,
    productId: String
})

module.exports = {ReviewSchema: ReviewSchema, Review: mongoose.model('Review', ReviewSchema)}