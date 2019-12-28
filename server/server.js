const express = require('express');
const app = express();
const cors = require("cors");
const parser = require("body-parser")
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('fringe_coin');

    const userCollection = db.collection('users');
    const showCollection = db.collection('shows');
    const coinCollection = db.collection('coins');

    const userRouter = createRouter(userCollection);
    const showRouter = createRouter(showCollection);
    const coinRouter = createRouter(coinCollection);

    app.use('/api/users', userRouter);
    app.use('/api/shows', showRouter);
    app.use('/api/coins', coinRouter);
  })
  .catch(console.error);

app.get('/', function (req, res) {
  res.json({
    message: "Hello World!"});
});

app.listen(3000, function () {
  console.log('App running on port 3000');
});
