const square = require('./square');


describe('square', ()=> {
    let mockValue;

    // Before each test
    beforeEach(()=> {
    //    add data to DB
    })

    // Before all test one time
    beforeEach(()=> {
        mockValue = Math.random();
    })

    test('Correct value', () => {
        // expect(square(2)).toBe(4)
        // expect(square(2)).toBeLessThan(5)
        // expect(square(2)).toBeGreaterThan(3)
        // expect(square(2)).not.toBeUndefined()
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(2)
        expect(spyMathPow).toBeCalledTimes(1)
    } )

    test('Correct value', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)
    } )

    // After each test
    afterEach(()=> {
        // remove data from DB
        jest.clearAllMocks()
    })

    // After all test one time
    afterEach(()=> {
    })
})