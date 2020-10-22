'use strict';
require('dotenv').config('.env');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/notes';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .catch((err) => {
    console.log('NOOOOOOOOOOOOOOOOOOOOOOOOOOO', err.message);
  });
const myInputs = new Input();
const newNotes = new Notes();
// console.log(options)
newNotes.execute(myInputs);
