import { sum, filterOutNull, catchAPoke } from './add';

describe('Testing the summation functionality', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
    it('adds 2 + 0 to equal 2', () => {
        expect(sum(2, 0)).toBe(2);
    })
    it('adds -15 to 10 to equal -5', () => {
        expect(sum(-15, 10)).toBe(-5);
    })    
})

describe('Filter out null values', () => {
    it('successfully filters out null values in our array', () => {
        const mockData = [null, 0, "potato"];
        const expectedFilteredData = [0, "potato"];

        // notice the use of toStrictEqual as an array is not a primitive type.
        expect(filterOutNull(mockData)).toStrictEqual(expectedFilteredData)
    })
})

describe('Catch a Poke', () => {
    it('catches Ditto', () => {
        return catchAPoke().then(json => {
            expect(json).toHaveProperty('abilities');
        })
    })
})