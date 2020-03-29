const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Inique ID', ()=>{
    it('should genarete an unique ID', ()=>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    })
})
