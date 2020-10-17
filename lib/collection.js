'use strict';
const mongoose = require('mongoose');
const Notes_model = require('./models/history');
class Collection {
  constructor() {}

  async saving(d) {
    const record = new Notes_model(d);
    console.log('Adding a the note', record);
    await record.save();
    // mongoose.disconnect();
    return record;
  }

  async list(h) {
    // console.log('iam in list metod');
    console.log(h);
    let notesList = await Notes_model.find(h);
    // mongoose.disconnect();
    // console.log("list of all the notes : ", notesList);
    notesList.forEach((e) => {
      // console.log('hiiii');
      console.log(`
      
      ${e.payload}
      Category: ${e.category} ID: ${e._id}
      ------------------------------------------------
      `);
    });
    // console.log(notesList,'dfddwwwwawaaa')
    return notesList;
  }

  async deleteFunction(d) {
    console.log('dddddddddd', d);
    let deleting = await Notes_model.deleteOne({ _id: d.payload });
    console.log('Deleted Note: ', d);
    console.log(deleting, 'dfddwwwwawaaa');
    mongoose.disconnect();
    return deleting;
  }
}

module.exports = Collection;
