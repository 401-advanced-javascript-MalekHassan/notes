'use strict';
const mongoose = require('mongoose');
const Notes_model = require("./models/history");
class collection {
     constructor(){
     }
     async saveing(d){
       
         const record = new Notes_model(d);
         console.log('hiii',record);
          await record.save();
          // mongoose.disconnect();
          return record;
       
    }
  async list(h){
  // console.log(h,'ssssa');
    let notesList = await Notes_model.find(h);
    // console.log("list of all the notes : ", notesList);
     notesList.forEach((e) => {
      // console.log('hiiii');
      console.log(`
      
      ${e.payload}
      Category: ${e.category} ID: ${e._id}
      ------------------------------------------------
      `);
      
    }); 
    console.log(notesList,'dfddwwwwawaaa')
    // await mongoose.disconnect();
    return notesList;
  }

  
  
  async deleteFunction(d){
    console.log('dddddddddd',d);
    let deleting = await Notes_model.deleteOne({ _id: d })
    console.log("Deleted Note: ",d );
    // mongoose.disconnect();
    // console.log(deleting,'dfddwwwwawaaa')
    return deleting;
  }
 }

module.exports = collection;