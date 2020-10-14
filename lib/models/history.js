'use strict';

const mongoose = require('mongoose');

const historySchema = mongoose.Schema({
  action : {type:'string', required : true},
  payload : {type:'string',required : true},
  category : {type:'string',required : true}
});
console.log('I am from history.js')
module.exports = mongoose.model('history', historySchema);