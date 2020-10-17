'use strict';

jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(() => {
  return {
    a: 'note',
  };
});

const Notes = require('../lib/notes.js');
const notes = new Notes();

jest.spyOn(global.console, 'log');

describe('Notes Module', ()=> {
  it('execute() does nothing with invalid notes', ()=> {
    notes.execute({action:'s', payload:'ffff'});
    expect(console.log).toHaveBeenCalled();
  });
    
  it('exexute() with valid inputs', ()=> {
    expect(notes.execute({action:'add',payload:'Hello'})).toEqual( notes.execute({action:'add',payload:'Hello'}));
  });
  it('exexute() with invalid inputs', ()=> {
    let obj = {action:'s', payload:'ffff'};
    expect(notes.execute(obj)).toEqual('Enter a valid action');
  });
});