const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'A Name is required.'],
        minlength: [3, 'The minimum length is three characters.']
    },
    Type: {
        type: String,
        required: [true, 'A Type is required.'],
        minlength: [3, 'The minimum length is three characters.']
    },
    Desc: {
        type: String,
        required: [true, 'A description is required.'],
        minlength: [3, 'The minimum length is three characters.']
    },
    Skill1: {
        type: String,
        required: false,
        default: ''
    },
    Skill2: {
        type: String,
        required: false,
        default: ''
    },
    Skill3: {
        type: String,
        required: false,
        default: ''
    }
},{timestamps: true}, {runValidators: true});

module.exports.Pet = mongoose.model('Pet', PetSchema);