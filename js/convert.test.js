const toBase2 = require('./convert')

describe('Test my base 10 to base 2 function', () => {
    it('Should return 0 in binary', () => {
        expect(toBase2(0)).toBe('0')
    })

    it('Should return 8 in binary', () => {
        expect(toBase2(8)).toBe('1000')
    })

    it('Should return 71 in binary', () => {
        expect(toBase2(71)).toBe('1000111')
    })

    it('Should return 6274 in binary', () => {
        expect(toBase2(6274)).toBe('1100010000010')
    })
})