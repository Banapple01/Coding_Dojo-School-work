const {Pet} = require('../models/pshelter.model');

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => res.json({Pets: allPets}))
        .catch(err => res.json({message: 'something went wrong with find.', error: err }));
};

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(onePet => res.json({Pet: onePet}))
        .catch(err => res.json({message: 'something went wrong with find one.', error: err }));
};

module.exports.createNewPet = (req, res) => {
    const { Name, Type, Desc } = req.body;
    console.log('This is the body.',req.body);
    Pet.create({
        Name,
        Type,
        Desc
    })
        .then(newPet => res.json({Pet: newPet}))
        .catch(err => res.status(400).json({message: 'something went wrong with create.', error: err }));
};

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedPet => res.json({Pet: updatedPet}))
        .catch(err => res.status(400).json({message: 'something went wrong with update.', error: err }));
};

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong with delete.", error: err }));
};