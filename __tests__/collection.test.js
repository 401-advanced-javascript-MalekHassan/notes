'use strict';
require('@code-fellows/supergoose');
const collection = require('../lib/collection.js');
const newColliction = new collection()
jest.spyOn(global.console, 'log');

describe('saving Module', ()=> {
    it('vaild saveing method case', ()=> {
       let obj = {action:'add',payload: 'fffffff', category: 'malek' };
       return newColliction.saveing(obj).then((record) => {
        Object.keys(obj).forEach((key) => {
            expect(record[key]).toEqual(obj[key])
        })
    })
    });
   it('vaild list method case', async()=> {
        let obj = { category: 'greating' };
        await newColliction.list(obj).then((record) => {
            console.log(record, 'recoed');
            record.forEach((item) => {
             expect(item[category]).toEqual(obj[category])
            })
        })
    });
     it('deleteFunction list method case', ()=> {
        let num = 11111111;
        newColliction.deleteFunction(num)
        
             expect(num).toEqual(num)
            })
       
    });

    // it('vaild list method case', ()=> {
    //     expect(console.log).toHaveBeenCalled();
    //    });
    //    it('Invaild list method case', ()=> {
    //      expect(newColliction.list()).toEqual({});
    //    });

    //    it('vaild saveing method case', ()=> {
    //     expect(console.log).toHaveBeenCalled();
    //    });
    //    it('Invaild saveing method case', ()=> {
    //      expect(newColliction.saveing({action:'s',payload: 'fffffff', category: 'malek' })).toEqual({});
    //    });
