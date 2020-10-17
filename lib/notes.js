'use strict';

const Collection = require('./collection.js');
const newColliction = new Collection();

class Notes {
  constructor() {}
  execute(options) {
    if (options.action === 'add' || options.action === 'a') {
      console.log(options);
      newColliction.saving(options);
      return options;
    } else if (options.action === 'delete') {
      newColliction.deleteFunction(options);
      return options;
    } else if (options.action === 'list') {
      let category;
      if (options.payload) {
        category = {
          category: options.payload,
        };
      } else {
        category = {};
      }
      newColliction.list(category);
    } else {
      console.log('Enter a valid action');
      return 'Enter a valid action';
    }
    return options;
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
