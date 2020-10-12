'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const myInputs = new Input();
const newNotes = new Notes();
// console.log(options)
newNotes.execute(myInputs);