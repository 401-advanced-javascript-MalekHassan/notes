'use strict';
const mongoose = require('mongoose');
const Notes_model = require("./models/history");
const collection = require('./collection.js');
const newColliction = new collection()

class Notes {
 constructor(){

 }
  execute (options){
    if (options.action === 'add' || options.action === 'a') {
      console.log(options,'ssssssssssssssss');
      this.add(options);
      newColliction.saveing(options);
      return options;
      
    }else if(options.action === 'delete'){
      // console.log('aaaaaaaaaaaaaaaaa',options)
     newColliction.deleteFunction(options.payload);
    } else if (options.action === 'list'){
      // console.log(options);
      let category;
      if (options.payload) {
        category = {
          category: options.payload,
        }
      } else {
        category = {};
      }
     newColliction.list(category);
    }
    else {
      console.log('Enter a valid action')
    }
  };
  
  add (d){
    // this.id = Math.random()*100;
    this.action = d.action;
    this.payload = d.payload;
    this.category = d.category;
    console.log('Adding a the note',this)
  };
  
}
module.exports = Notes;



// 'use strict';

// function Notes () {
 
// };
// Notes.prototype.execute = function (options){
//     if (options.action === 'add' || options.action === 'a') {
//         console.log(options);
//     this.add(options)
//   } else {
//     console.log('Enter a valid action')
//   }
// };

// Notes.prototype.add = function (E){
//   this.id = Math.random()*100;
//   this.action = E.action;
//   this.payload = E.payload;
//   console.log(`Adding Note: ${this.payload}`)
// };


// module.exports = Notes;