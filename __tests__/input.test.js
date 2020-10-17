'use strict';

jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(() => {
  return {
    a: 'note',
  };
});

const Input = require('../lib/input.js');
let myInputs = new Input();
jest.spyOn(global.console, 'log');

describe('Input Module', () => {
  it('getAdd() vaild case for action', () => {
    expect(myInputs.getAdd('add')).toEqual('add');
  });

  it('getAdd() defaults to ERROR when there is no values', () => {
    expect(myInputs.getAdd('d')).toEqual('Enter a valid action');
  });

  it('getNote() vaild case for payload', () => {
    expect(myInputs.getNote('hi')).toEqual('hi');
  });

  it('getNote() defaults to ERROR when there is no values', () => {
    expect(myInputs.getNote()).toEqual(undefined);
  });
});
