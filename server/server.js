const express = require('express');
const models = require('./models');
const { graphqlHTTP }= require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

// Replace with your mongoLab URI
const MONGO_PORT = 27017;
const MONGO_URI = `mongodb://0.0.0.0:${MONGO_PORT}/lyrical_graphql`;

if (!MONGO_URI) {
  throw new Error('You must provide a MongoDB URI!');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoDB instance.'))
    .on('error', error => console.log('Error connecting to MongoDB instance:', error));

app.use(express.json());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
