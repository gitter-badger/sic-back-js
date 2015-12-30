import express from 'express';
import cors from 'cors';
import graphQLHTTP from 'express-graphql';
import schema from './data/schema';

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
  graphql(schema, introspectionQuery)
  .then((r) => res.send(r), () => res.err(500));
})

// GRAPHQL
app.use('/graphql', graphQLHTTP({ schema: schema, pretty: true, graphiql: true }));

app.listen(3000, (err) => {
  if (err)
    throw err;
});
