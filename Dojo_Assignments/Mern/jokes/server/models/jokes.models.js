const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, 'Setup for joke required.'],
        minlength: [10, 'Minimum length is ten characters.']
    },
    punchline: {
        type: String,
        required: [true, 'Punchline is required for a good joke.'],
        minlength: [3, 'minimum length is three characters.']
    }
}, {timestamps: true});

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;