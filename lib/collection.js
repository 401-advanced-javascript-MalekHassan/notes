const Notes_model = require('./models/history');
class collection {
  constructor() {}
  async saving(d) {
    const record = new Notes_model(d);
    console.log(record);
    await record.save();
    //  mongoose.disconnect();
  }
}
module.exports = collection;
