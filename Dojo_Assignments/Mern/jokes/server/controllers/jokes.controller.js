const Joke = require('../models/jokes.models');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: 'something went wrong with find.', error: err }));
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({message: 'something went wrong with find one.', error: err }));
};

module.exports.createNewJoke = (req, res) => {
    console.log('This is the body.',req.body);
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: 'something went wrong with create.', error: err }));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message: 'something went wrong with update.', error: err }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong with delete.", error: err }));
};