const {Product} = require('../models/prodm.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({products: allProducts}))
        .catch(err => res.json({message: 'something went wrong with find.', error: err }));
};

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.json({product: oneProduct}))
        .catch(err => res.json({message: 'something went wrong with find one.', error: err }));
};

module.exports.createNewProduct = (req, res) => {
    const { Title, Price, Desc } = req.body;
    console.log('This is the body.',req.body);
    Product.create({
        Title,
        Price,
        Desc
    })
        .then(newProduct => res.json({product: newProduct}))
        .catch(err => res.json({message: 'something went wrong with create.', error: err }));
};

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedProduct => res.json({product: updatedProduct}))
        .catch(err => res.json({message: 'something went wrong with update.', error: err }));
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong with delete.", error: err }));
};