'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const options = new Input();
const newNotes = new Notes(options);
// console.log(options)
newNotes.execute(options);