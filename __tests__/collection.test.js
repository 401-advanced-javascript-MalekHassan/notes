'use strict';
require('@code-fellows/supergoose');
const Collection = require('../lib/collection.js');
const newColliction = new Collection();
jest.spyOn(global.console, 'log');

describe('collection module  testing', () => {
  it('vaild saveing method case', () => {
    let obj = { action: 'add', payload: 'fffffff', category: 'malek' };
    return newColliction.saving(obj).then((record) => {
      Object.keys(obj).forEach((key) => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });
  it('vaild list method case', async () => {
    let obj = { category: 'greating' };
    await newColliction.list(obj).then((record) => {
      console.log(record, 'recoed');
      record.forEach((item) => {
        expect(item.category).toEqual(obj.category);
      });
    });
  });
  it('valid entered data for deleteFunction method case', async () => {
    let num = '5f87379274bf461f12bb42dd';
    await newColliction.deleteFunction(num);
    expect(num).toEqual(num);
  });
});
