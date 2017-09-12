const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// const userRoutes = require('./private/router/userRoutes');

const isDeveloping = process.env.NODE_ENV !== 'prod';
const port = isDeveloping ? 8080 : process.env.PORT;

const mongodbUrl = isDeveloping ? 'mongodb://localhost/react-app' : process.env.MONGODB_URL;
mongoose.Promise = global.Promise;
mongoose.connect(mongodbUrl);


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/api', userRoutes);
app.use(express.static(`${__dirname}/public`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port);
