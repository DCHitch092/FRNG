"use strict";

const express = require('express');
const app = express();
const cors = require("cors");
const parser = require("body-parser")
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
    const variableCollection = db.collection('variables');
    const experimentCollection = db.collection('experiments');
    const badgeCollection = db.collection('badges');
    const venueCollection = db.collection('venues');
    const userClassesCollection = db.collection('user_classes');

    const userRouter = createRouter(userCollection);
    const showRouter = createRouter(showCollection);
    const coinRouter = createRouter(coinCollection);
    const variableRouter = createRouter(variableCollection);
    const experimentRouter = createRouter(experimentCollection);
    const badgeRouter = createRouter(badgeCollection);
    const venueRouter = createRouter(venueCollection);
    const userClassesRouter = createRouter(userClassesCollection);

    app.use('/api/users', userRouter);
    app.use('/api/shows', showRouter);
    app.use('/api/coins', coinRouter);
    app.use('/api/variables', variableRouter);
    app.use('/api/experiments', experimentRouter);
    app.use('/api/badges', badgeRouter);
    app.use('/api/venues', venueRouter);
    app.use('/api/user_classes', userClassesRouter)
  })
  .catch(console.error);

app.get('/', function (req, res) {
  res.json({
    message: "Hello World!"});
});

app.listen(3000, function () {
  console.log('App running on port 3000');
});
