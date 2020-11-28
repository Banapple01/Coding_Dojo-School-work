const express = require('express');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));

const AllJokeRoutes = require('./routes/jokes.routes');
AllJokeRoutes(app);

app.listen(8000, () => console.log('Server booted on port 8000'));