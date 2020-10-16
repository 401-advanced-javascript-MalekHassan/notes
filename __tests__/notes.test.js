'use strict';


const Notes = require('../lib/notes.js');
const notes = new Notes();

jest.spyOn(global.console, 'log');

describe('Notes Module', ()=> {
  it('execute() invalid entered data with console.log checking', ()=> {
    notes.execute({action:'s', payload:'ffff'});
    expect(console.log).toHaveBeenCalled();
  });
    
  it('exexute() valid entered data', ()=> {
    let obj = {action:'add',payload:'Hello'}
    let obj2 = {action:'list',payload:''}
    let obj3 = {action:'delete',payload:'11111111'}
    expect(notes.execute(obj)).toEqual(obj);
    expect(notes.execute(obj2)).toEqual(obj2);
    expect(notes.execute(obj3)).toEqual(obj3);
  });
  it('exexute() invalid entered data with return value checking', ()=> {
    let obj = {action:'s', payload:'ffff'};
    expect(notes.execute(obj)).toEqual('Enter a valid action');
  });
});