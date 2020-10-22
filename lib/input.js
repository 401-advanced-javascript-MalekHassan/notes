'use strict';

const minimist = require('minimist');
class Input {
  constructor() {
    let note = process.argv[3]; //to make sure that we took the note that we have write it we put [3]

    const args = minimist(process.argv.slice(2)); // we use slice to make sure that we took the things that we have write it with out the repeting the known things like the node and the path
    // console.log('args',args)
    let add = Object.keys(args)[1]; //becaces the data that we used was in an object we use the [1] to determine the exact action we have entered
    // console.log(' process.argv[4]', process.argv[5]);
    this.action = this.getAdd(add);
    this.payload = this.getNote(note);
    this.category = process.argv[5];
  }

  getAdd(action) {
    if (
      action === 'add' ||
      action === 'a' ||
      action === 'list' ||
      action === 'delete'
    ) {
      //   console.log(action);
      return action;
    } else {
      // console.log('Enter a valid action');
      console.log('Enter a valid action');
    }
  }

  getNote(payload) {
    if (payload) {
      return payload;
    } else {
      // console.log('Error: invalid note')
      console.log('Error: invalid note');
      return undefined;
    }
  }
}

module.exports = Input;

// 'use strict';

// const minimist = require('minimist');

// function Input() {
//     let note = process.argv[3]; //to make sure that we took the note that we have write it we put [3]

// const args = minimist(process.argv.slice(2)); // we use slice to make sure that we took the things that we have write it with out the repeting the known things like the node and the path

// let add = Object.keys(args)[1]; //becaces the data that we used was in an object we use the [1] to determine the exact action we have entered

// this.action = this.getAdd(add);
// this.payload = this.getNote(note);
// }

// Input.prototype.getAdd = function (action) {
//     if (action === 'add' || action === 'a') {
//     //   console.log(action);
//       return action ;
//     }
//     else {
//     //   console.log('Enter a valid action');
//     }
//   };

//   Input.prototype.getNote = function (payload) {

//     if(payload){
//       return payload;
//     }
//     else{
//       return 'Error: invalid note'
//     }
//   };

//   module.exports = Input;
