const toBase2 = require('./convert')

describe('Test my base 10 to base 2 function', () => {
    it('Should return 0 in binary', () => {
        expect(toBase2(0)).toBe(0)
    })
})