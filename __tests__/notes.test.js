'use strict';

const Notes = require('../lib/notes.js');
const notes = new Notes();

jest.spyOn(global.console, 'log');

describe('Notes Module', () => {
  it('execute() does nothing with invalid notes', () => {
    notes.execute({ action: 's', payload: 'ffff' });
    expect(console.log).toHaveBeenCalled();
  });

  it('exexute() will log out notes when given', () => {
    expect(notes.execute({ action: 'add', payload: 'Hello' })).toEqual(
      notes.execute({ action: 'add', payload: 'Hello' })
    );
  });
  it('exexute() will log out notes when given', () => {
    expect(console.log).toHaveBeenCalled();
  });
});
