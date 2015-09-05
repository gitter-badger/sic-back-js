import express from 'express';
import { User } from './models'

let app = express();

// Clean up some headers
app.set('x-powered-by', false);
app.set('etag', false);

// API
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    User.run().then((users) => {
      res.status(200).send(users)
    })
})

app.listen(3000);
