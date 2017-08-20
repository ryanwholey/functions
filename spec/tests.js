import {
    each,
    map,
} from '../src/sourceCode';

describe('Functional Programming', () => {

    describe('each', () => {

        it('should work on arrays of numbers', () => {
            const collection = [1,2,3,4,5];
            const results = [];

            each(collection, (item) => results.push(item));

            expect(results).toEqual(collection);
        });

        it('should work on arrays of strings', () => {
            const collection = ['one', 'two', 'three', 'four', 'five'];
            const results = [];

            each(collection, (item) => results.push(item));

            expect(results).toEqual(collection);
        });

        it('should work on objects', function() {
            const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const results = [];

            each(collection, (item) => results.push(item));

            expect(results).toEqual(Object.values(collection));
        });
    });
});
