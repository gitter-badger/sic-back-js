import mongoose from 'mongoose';

import express from 'express';
import cors from 'cors';
import graphQLHTTP from 'express-graphql';

import schema from './data/schema';
import introspectedSchema from './data/schema.json'


const APP_PORT = 3000;
const MONGODB_URI = 'mongodb://localhost/sic';

mongoose.connect('mongodb://localhost/sic')
console.log(`Connecting to mongodb: ${MONGODB_URI}`);

const app = express();

// Clean up some headers
app.set('x-powered-by', false);
app.set('etag', false);

// CORS
app.use(cors());

// API
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// Schema
app.get('/schema', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(introspectedSchema);
})

// GRAPHQL
app.use('/graphql', graphQLHTTP({ schema: schema, pretty: true, graphiql: true }));

app.listen(3000, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`App is now running on http://localhost:${APP_PORT}`);
  }
});
