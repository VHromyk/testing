const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToString', ()=> {
    test('Correct value', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
    } )
    test('Different value', () => {
        expect(mapArrToStrings([1, 2, 3, null, 'qwerty'])).toEqual(['1', '2', '3'])
    } )

    test('Empty array', () => {
        expect(mapArrToStrings([])).toEqual([])
    } )

    test('Negation', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual(['1', '2', '3', '4'])
    } )
})