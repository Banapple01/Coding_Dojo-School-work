const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected!'))
.catch(err => console.log("couldn't connect!", err));