import express from 'express';
import cors from 'cors';
import jwt from 'express-jwt';

let app = express();

// Clean up some headers
app.set('x-powered-by', false);
app.set('etag', false)

// Allow CORS
app.use(cors())

// Secure all call with JWT (from auth0)
app.use(jwt({
  secret: new Buffer('wVGrLU_V7wzPCxaeRGmhpExhEVx7c85Va8BhpR_mwbBBj9gl4fef3laQx2AigQm4', 'base64'),
  audience: '1cyiAgXV070TpZQLjoZA9D7xTU6zzbZ0'
}));

// Thansform UnauthorizedError from express-jwt in 401
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.sendStatus(401);
  }
});

// API
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000);
