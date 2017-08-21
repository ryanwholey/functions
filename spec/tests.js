import _ from 'underscore';
import {
    any,
    curry,
    each,
    every,
    extend,
    filter,
    first,
    map,
    reduce,
    reduceRight,
    last,
    sort,
    uniq,
} from '../src/functions';

describe('Utilities', () => {

    describe('first', () => {

        it('should take the first item from an array, not wrapped in an array', () => {
            const collection = [1, 2, 3, 4, 5];
            const expected = 1;
            const results = first(collection);

            expect(results).toEqual(expected);
        });

        it('should take a number of items from the begininng of an array', () => {
            const collection = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3];
            const results = first(collection, 3);

            expect(results).toEqual(expected);
        });

        it('it should not mutate the original array', () => {
            const collection = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5];

            first(collection, 3);

            expect(collection).toEqual(expected);
        });
    });

    describe('last', () => {
        it('should take the last item from an array, not wrapped in an array', () => {
            const collection = [1, 2, 3, 4, 5];
            const expected = 5;
            const results = last(collection);

            expect(results).toEqual(expected);
        });

        it('should take a number of items from the end of an array', () => {
            const collection = [1, 2, 3, 4, 5];
            const expected = [3, 4, 5];
            const results = last(collection, 3);

            expect(results).toEqual(expected);
        });

        it('it should not mutate the original array', () => {
            const collection = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5];

            last(collection, 3);

            expect(collection).toEqual(expected);
        });
    });

    describe('each', () => {

        it('should work on arrays of numbers', () => {
            const collection = [1, 2, 3, 4, 5];
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

        it('should pass the index of the array item into the iteration function', () => {
            const collection = ['one', 'two', 'three', 'four', 'five'];
            const expected = [0, 1, 2, 3, 4];
            const results = [];

            each(collection, (item, index) => results.push(index));

            expect(results).toEqual(expected);
        });

        it('should pass the key of the object item into the iteration function', function() {
            const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = ['one', 'two', 'three'];
            const results = [];

            each(collection, (item, key) => results.push(key));

            expect(results).toEqual(expected);
        });

        it('should pass the array collection into the iteration function', () => {
            const collection = ['one', 'two', 'three', 'four', 'five'];
            const expected = collection.map((_, __, coll) => coll);
            const results = [];

            each(collection, (item, index, collection) => results.push(collection));

            expect(results).toEqual(expected);
        });

        it('should pass the object collection into the iteration function', function() {
            const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = _(collection).map((_, __, coll) => coll);
            const results = [];

            each(collection, (item, key, collection) => results.push(collection));

            expect(results).toEqual(expected);
        });
    });
 
    describe('map', () => {
        it('should work on arrays of numbers', () => {
            const collection = [1,2,3,4,5];
            const expected = [2,4,6,8,10];
            const results = map(collection, (item) => item * 2);

            expect(results).toEqual(expected);
        });

        it('should work on arrays of strings', () => {
            const collection = ['one', 'two', 'three', 'four', 'five'];
            const expected =  ['oneay', 'twoay', 'threeay', 'fouray', 'fiveay'];
            const results = map(collection, (item) => `${item}ay`);

            expect(results).toEqual(expected);
        });

        it('should work on objects', () => {
            const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = [6, 7, 8];
            const results = map(collection, (item) => item + 5);

            expect(results).toEqual(expected);
        });

        it('shoud not mutate the original array', () => {
            const collection = ['one', 'two', 'three', 'four', 'five'];
            const expected =  ['one', 'two', 'three', 'four', 'five'];

            map(collection, (item) => `${item}ay`);

            expect(collection).toEqual(expected);
        });

        it('shoud not mutate the original object', () => {
            const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = {
                'one': 1,
                'two': 2,
                'three': 3
            };

            map(collection, (item) => item + 5);

            expect(collection).toEqual(expected);
        });

        it('should pass the index of the array item into the iteration function', () => {
            const collection = ['one', 'two', 'three', 'four', 'five'];
            const expected =  [0, 1, 2, 3, 4];
            const results = map(collection, (item, index) => index);

            expect(results).toEqual(expected);
        });

        it('should pass the key of the object item into the iteration function', () => {
             const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = ['one', 'two', 'three'];
            const results = map(collection, (item, key) => key);

            expect(results).toEqual(expected);
        });

        it('should pass the collection array into the iteration function', () => {
            const collection = ['one', 'two', 'three', 'four', 'five'];
            const expected =  collection.map((_, __, coll) => coll);
            const results = map(collection, (item, index, collection) => collection);

            expect(results).toEqual(expected);
        });

        it('should pass the collection object into the iteration function', () => {
             const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = _(collection).map((_,__,coll) => coll);
            const results = map(collection, (item, key, collection) => collection);

            expect(results).toEqual(expected);
        });
    });

    describe('filter', () => {

        it('should filter out the items that do not make the prediate true', () => {
            const collection = [1, 2, 3, 4, 5];
            const expected = [1, 3, 5];
            const results = filter(collection, (item) => item % 2 !== 0);

            expect(results).toEqual(expected);
        });

        it('should return the entire colletion if no predicate is passed', () => {
            const collection = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5];
            const results = filter(collection);

            expect(results).toEqual(expected);
        });

        it('should work on objects', () => {
             const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = [1, 3];
            const results = filter(collection, (item) => item % 2 !== 0);

            expect(results).toEqual(expected);
        });

        it('should not mutate the original array', () => {
            const collection = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5];

            filter(collection, (item) => item % 2 !== 0);

            expect(collection).toEqual(expected);
        });

        it('should not mutate the original object', () => {
             const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = {
                'one': 1,
                'two': 2,
                'three': 3
            };

            filter(collection, (item) => item % 2 !== 0);

            expect(collection).toEqual(expected);
        });

        it('should pass the index of the array item to the predicate', () => {
            const collection = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3];
            const results = filter(collection, (item, index) => index < 3);

            expect(results).toEqual(expected);
        });

        it('should pass the key of the object item to the predicate', () => {
             const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = [3];
            const results = filter(collection, (item, key) => key === 'three');

            expect(results).toEqual(expected);
        });
    });

    describe('any', () => {
        it('should return true if any items in the array make the predicate true', () => {
            const array = [1, 2, 3, 4, 5];
            const expected = true;
            const results = any(array, (item) => item > 4);

            expect(results).toEqual(expected);
        });

        it('should return false if no item in the array satisfies the predicate', () => {
            const array = [1, 2, 3, 4, 5];
            const expected = false;
            const results = any(array, (item) => item > 5);

            expect(results).toEqual(expected);
        });

        it('should return false if the array is empty', () => {
            const array = [];
            const expected = false;
            const results = any(array, (item) => item);

            expect(results).toEqual(expected);
        });

        it('should be able to take only an array (no predicate passed) and return true if there are items in the array', () => {
            const array = [1, 2, 3];
            const expected = true;
            const results = any(array);

            expect(results).toEqual(expected);
        });

        it('should stop the iteration as soon as an item satisfies the predicate', () => {
            const array = [1, 2, 3, 4, 5];
            const expected = 3;
            let result = 0;
            any(array, (item) => {
                result += 1;
                return item === 3;
            });

            expect(result).toEqual(expected);
        });
    });

    describe('every', () => {
        it('should return true if every item in the array make the predicate true', () => {
            const array = [1, 2, 3, 4, 5];
            const expected = true;
            const results = every(array, (item) => item > 0);

            expect(results).toEqual(expected);
        });

        it('should not mutate the original array', () => {
            const array = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5];
            every(array, (item) => item > 0);

            expect(array).toEqual(expected);
        });

        it('should return false if even one item in the array does not make the predicate true', () => {
            const array = [1, 2, 3, 4, 5];
            const expected = false;
            const results = every(array, (item) => item !== 4);

            expect(results).toEqual(expected);
        });

        it('should short circuit when it encounters an unsatisfied predicate', () => {
            const array = [2, 4, 6, 7, 8, 10];
            let results = 0;

            every(array, (item) => {
                results += 1;
                return item % 2 === 0;
            });

            expect(results).toEqual(4);
        });
    });

    describe('reduce', () => {
        it('should work on arrays of numbers', () => {
            const collection = [1, 2, 3, 4, 5];
            const expected = 15;
            const results = reduce(collection, (memo, item) => memo + item);

            expect(results).toEqual(expected);
        });

        it('should take an intial value', () => {
            const collection = [1, 2, 3, 4, 5];
            const initialValue = 10;
            const expected = 25;
            const results = reduce(collection, (memo, item) => memo + item, initialValue);

            expect(results).toEqual(expected);
        });

        it('should work on arrays of strings', () => {
            const collection = ['one', 'two', 'three', 'four', 'five'];
            const expected = 'one two three four five';
            const results =  reduce(collection, (memo, item) => memo + ' ' + item);

            expect(results).toEqual(expected);
        });

        it('should be able to reduce objects', () => {
            const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = 6
            const results = reduce(collection, (memo, item) => memo + item);

            expect(results).toEqual(expected);
        });

        it('should not mutate the original array', () => {
            const collection = ['one', 'two', 'three', 'four', 'five'];
            const expected =  ['one', 'two', 'three', 'four', 'five'];
            reduce(collection, (memo, item) => memo + ' ' + item);

            expect(collection).toEqual(expected);
        });

        it('should not mutate the original object', () => {
            const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = {
                'one': 1,
                'two': 2,
                'three': 3
            };

            reduce(collection, (memo, item) => memo + ' ' + item);

            expect(collection).toEqual(expected);
        });

        it('should pass the index of the array item into the aggregator', () => {
            const collection = ['one', 'two', 'three', 'four', 'five'];
            const expected = 10;
            const results =  reduce(collection, (memo, item, index) => memo + index, 0);

            expect(results).toEqual(expected);
        });

        it('should pass the key of the object item into the aggregator', () => {
            const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = '1twothree';
            const results = reduce(collection, (memo, item, key) => memo + key);

            expect(results).toEqual(expected);
        });
    });

    describe('reduceRight', () => {
        it('should work on arrays of numbers', () => {
            const collection = [1, 2, 3, 4, 5];
            const expected = 15;
            const results = reduceRight(collection, (memo, item) => memo + item);

            expect(results).toEqual(expected);
        });

        it('should take an intial value', () => {
            const collection = [1, 2, 3, 4, 5];
            const initialValue = 10;
            const expected = 25;
            const results = reduceRight(collection, (memo, item) => memo + item, initialValue);

            expect(results).toEqual(expected);
        });

        it('should work on arrays of strings', () => {
            const collection = ['one', 'two', 'three', 'four', 'five'];
            const expected = 'five four three two one';
            const results =  reduceRight(collection, (memo, item) => memo + ' ' + item);

            expect(results).toEqual(expected);
        });

        it('should be able to reduceRight objects', () => {
            const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = 6
            const results = reduceRight(collection, (memo, item) => memo + item);

            expect(results).toEqual(expected);
        });

        it('should not mutate the original array', () => {
            const collection = ['one', 'two', 'three', 'four', 'five'];
            const expected =  ['one', 'two', 'three', 'four', 'five'];
            reduceRight(collection, (memo, item) => memo + ' ' + item);

            expect(collection).toEqual(expected);
        });

        it('should not mutate the original object', () => {
            const collection = {
                'one': 1,
                'two': 2,
                'three': 3
            };
            const expected = {
                'one': 1,
                'two': 2,
                'three': 3
            };

            reduceRight(collection, (memo, item) => memo + ' ' + item);

            expect(collection).toEqual(expected);
        });
    });

    describe('sort', () => {

        it('should be able to sort simple arrays', () => {
            const array = [1, 3, 2, 4, 5];
            const expected = [1, 2, 3, 4, 5];
            const results = sort(array);

            expect(results).toEqual(expected);
        });

        it('should not mutate the original array', () => {
            const array = [1, 3, 2, 4, 5];
            const expected = [1, 3, 2, 4, 5];
            sort(array);

            expect(array).toEqual(expected);
        });

        it('should be able to sort a list of objects by a passed string', () => {
            const array = [
                {name: 'ryan', from: 'oakland'} ,
                {name: 'mackenzie', from: 'oakland'},
                {name: 'tommy', from: 'new york'},
                {name: 'ali', from: 'new york'}
            ];
            const expected = [
                {name: 'ali', from: 'new york'},
                {name: 'mackenzie', from: 'oakland'},
                {name: 'ryan', from: 'oakland'},
                {name: 'tommy', from: 'new york'},
            ];
            const results = sort(array, 'name');

            expect(results).toEqual(expected);
        });

        it('should be able to sort a list by a passed sort function', () => {
            const array = [4, 2, 5, 1, 3];
            const expected  = [3, 1, 2, 4, 5];
            const results = sort(array, (num) => {
                if (num === 3) return -1;
                return num;
            });

            expect(results).toEqual(expected);
        });

        it('should not rearrange objects that are already sorted in order', () => {
            const array = [
                {name: 'mackenzie', number: 19},
                {name: 'moose', number: 18},
                {name: 'ryan', number: 30},
                {name: 'george', number: 30}
            ];
            const expected = [
                {name: 'moose', number: 18},
                {name: 'mackenzie', number: 19},
                {name: 'ryan', number: 30},
                {name: 'george', number: 30}
            ];
            const results = sort(array, 'number');

            expect(results).toEqual(expected);
        });
    });
    
    describe('uniq', () => {
        it('should return one value of each item present in the collection', () => {
            const array = [2, 1, 1, 3, 4];
            const expected = [2, 1, 3, 4];
            const results = uniq(array);

            expect(results).toEqual(expected);
        });

        it('should not mutate the original array', () => {
            const array = [1, 1, 2, 3, 4];
            const expected = [1, 1, 2, 3, 4];
            const results = uniq(array);

            expect(array).toEqual(expected);
        });

        it('should work on strings', () => {
            const collection = ['one', 'one', 'three', 'three', 'four', 'five'];
            const expected = ['one', 'three', 'four', 'five'];
            const results = uniq(collection);

            expect(results).toEqual(expected);
        });
    });

    describe('extend', () => {

        it('should return the original object if nothing but the original object is passed', () => {
            const object = {moose: 'lemur'};
            const expected = {moose: 'lemur'};
            const results = extend(object);

            expect(results).toEqual(expected);
        });

        it('should overwrite properties on the original object that are present on the second obejct', () => {
            const object = {moose: 'lemur'};
            const expected = {moose: 'goose'};
            const results = extend(object, {moose: 'goose'});

            expect(results).toEqual(expected);
        });

        it('should mutate the original object', () => {
            const object = {moose: 'lemur'};
            const expected = {moose: 'goose'};
            extend(object, {moose: 'goose'});

            expect(object).toEqual(expected);
        });

        it('should be able to take any number of objects', () => {
            const object = {moose: 'lemur'};
            const expected = {lion: 'cat', dog:'pig', fish: 'pelican', moose: 'lemur'};
            const results = extend(object, {lion: 'cat'}, {dog: 'pig'}, {fish: 'pelican'});

            expect(results).toEqual(expected);
        });

        it('should overwrite a property for any succeeding object with that property', () => {
            const object = {moose: 'lemur'};
            const expected = {moose: 'goat'};
            const results = extend(object, {moose: 'cat'}, {moose: 'goose'}, {moose: 'goat'});

            expect(results).toEqual(expected);
        });
    });

    describe('curry', () => {
        const context = {};

        beforeEach(() => {
            context.func = (a, b) => a + b;
        });

        it('should return a function', () => {
            const curriedFunc = curry(context.func);

            expect(typeof curriedFunc === 'function').toEqual(true);
        });

        it('should bind the passed argument to the passed function', () => {
            const addTwo = curry(context.func, 2);
            const results = addTwo(3);
            const expected = 5;

            expect(results).toEqual(expected);
        });

        it('should bind any number of passed arguments to the passed function', () => {
            const getFive = curry(context.func, 2, 3);
            const results = getFive();
            const expected = 5;

            expect(results).toEqual(expected);
        });
    });
});
