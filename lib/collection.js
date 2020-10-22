const Notes_model = require('./models/history');
class collection {
  constructor() {}
  async saveing(d) {
    const record = new Notes_model(d);
    console.log(record);
    await record.save();
    mongoose.disconnect();
  }
}
module.exports = collection;
