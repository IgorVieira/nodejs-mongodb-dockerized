'use strict';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const config = require('./db');
const Resource = require('./Resource');

let col = null;
let client = null;

(async function() {
  try {
    client = await MongoClient.connect(config.url);
    console.log("Connected correctly to server");

    const db = client.db(config.db);

    // Get the collection
    col = db.collection('resources');

    // Insert a single document

    // Get all documents
    const docs = await col.find({}).toArray();
    console.log('found all resource docs', docs);
    findPromise();
  } catch (err) {
    console.log(err.stack);
  }
})();

function findPromise() {
  col.find({}).toArray().then(results => console.log('promise results', results));

  // Close connection
  client.close();
}


