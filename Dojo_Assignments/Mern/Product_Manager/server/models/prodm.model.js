const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, 'A Title is required.'],
        minlength: [2, 'The minimum length is two characters.']
    },
    Price: {
        type: Number,
        required: [true, 'A price is required.'],
        min: [0.01, 'The minimum price is one cent.']
    },
    Desc: {
        type: String,
        required: [true, 'A description is required.'],
        minlength: [3, 'The minimum length is five characters.']
    }
},{timestamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);