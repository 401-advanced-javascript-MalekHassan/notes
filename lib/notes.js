'use strict';
const mongoose = require('mongoose');
const Notes_model = require("./models/history");
class Notes {
 constructor(){

 }
  execute (options){
    if (options.action === 'add' || options.action === 'a') {
      // console.log(options);
      this.add(options);
      this.saveing(options);
      return options;
      
    }else if(options.action === 'delete'){
      // console.log('aaaaaaaaaaaaaaaaa',options)
     this.deleteFunction(options.payload);
    } else if (options.action === 'list'){
      // console.log(options);
      let category;
      if (options.payload) {
        category = {
          category: options.payload,
        };
      } else {
        category = {};
      }
      this.list(category);
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
  async saveing(d){
    const record = new Notes_model(d);
    console.log(record);
     await record.save();
     mongoose.disconnect();
    }
  async list(h){
  
    let notesList = await Notes_model.find(h);
    // console.log("list of all the notes : ", notesList);
    notesList.forEach((e) => {
      console.log('hiiii');
      console.log(`
      ${e.payload}
      Category: ${e.category} ID: ${e._id}
      ------------------------------------------------
      `);
    });
    mongoose.disconnect();
  }
  async deleteFunction(d){
    console.log('dddddddddd',d);
    let deleting = await Notes_model.deleteOne({ _id: d })
    console.log("Deleted Note: ",d );
    mongoose.disconnect();
  }
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