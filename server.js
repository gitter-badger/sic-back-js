import express from 'express';
import graphQLHTTP from 'express-graphql';
import { graphql } from 'graphql';
import schema from './schema';

let app = express();

// Clean up some headers
app.set('x-powered-by', false);
app.set('etag', false);

// API
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// GRAPHQL
app.use('/graphql', graphQLHTTP({schema: schema, pretty: true}));

app.listen(3000);
