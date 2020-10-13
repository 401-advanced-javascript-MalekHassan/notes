'use strict';
const Notes_model = require("./lib/models/history.js");
class Notes {
 constructor(){

 }
  execute (options){
    if (options.action === 'add' || options.action === 'a') {
      console.log(options);
      this.add(options);
      return options;
      
    }else if(options.action === 'delete'){
      deleteFunction(options);
    } else if (options.action === 'list'){
      list(options);
    }
    else {
      console.log('Enter a valid action')
    }
  };
  
  add (E){
    this.id = Math.random()*100;
    this.action = E.action;
    this.payload = E.payload;
    array.push
    save(this)
  };
  save(E){
    console.log('saving');
    E.save()
  }
  async list(E){
    let category = {category:E.payload};
    let notesList = await Notes_model.find(category);
    // console.log("list of all the notes : ", notesList);
    notesList.forEach((e) => {
      console.log(`
      ${e.payload}
      Category: ${e.category} ID: ${e._id}
      ------------------------------------------------
      `);
    });
  }
  async deleteFunction(E){
    let deleting = await Notes_model.find(E.payload)
    console.log("Deleted Note: ", userInput.payload);
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