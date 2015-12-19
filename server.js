import express from 'express';
import graphQLHTTP from 'express-graphql';
import schema from './graphql';

const app = express();

// Clean up some headers
app.set('x-powered-by', false);
app.set('etag', false);

// API
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// GRAPHQL
app.use('/graphql', graphQLHTTP({ schema: schema, pretty: true, graphiql: true }));

app.listen(3000);
