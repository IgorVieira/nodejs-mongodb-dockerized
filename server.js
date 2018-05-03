'use strict';

const express = require('express');
const mongodb = require('mongodb');
const config = require('./db');
const Resource = require('./Resource');

const app = express();
const PORT = 3000;
const client = mongodb.MongoClient;
let db = null;

setTimeout(() => {
  client.connect(config.url, config.options, (err, client) => {
    if (err) {
      console.log('db is not connected, err: ', err);
    } else {
      console.log('db is connected');
      const res = new Resource('res1', '10.0.0.1');
      db = client.db('test');
      const resCollection = db.collection('resources');
      resCollection.insert(res), (err, result) => {
        if (err) {
          console.log('err on insert', err);
        } else {
          console.log('insert result', result);
        }
      };
    }
  });
}, 5000);

app.get('/', (req, res) => {
  res.json({ timestamp: new Date().getTime() });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
