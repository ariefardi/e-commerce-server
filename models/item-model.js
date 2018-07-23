const mongoose = require('mongoose')
const Schema = mongoose.Schema

let itemSchema = Schema({
    itemName: String,
    price: Number,
    imgSrc: String,
    brand: String,
    gender: String,
    released: String,
    typeJersey: String
},{timestamp: true})

let Items = mongoose.model('Item',itemSchema)

module.exports = Items