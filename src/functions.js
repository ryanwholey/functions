import _ from 'underscore';
window._ = _;

/**
 * Returns the first element of an array.
 * Passing num will return the first num elements of the array.
 *
 * first([5, 4, 3, 2, 1])
 * > 5
 */
export function first(collection, num) {
    return _.first.apply(_(collection), arguments);
}

/**
 * Returns the last element of an array.
 * Passing num will return the last num elements of the array.
 *
 * last([5, 4, 3, 2, 1])
 * > 1
 */
export function last(collection, num) {
    return _.last.apply(_(collection), arguments);
}

/**
 * Takes an array or an object.
 * Iterates over a collection of elements, sending each item through the iteratee function.
 * Each invocation of iteratee is called with three arguments, element, index and collection.
 *
 * each([1,2,3], function(item, index, collection) {
 *  console.log(item, index, collection);
 * });
 * > 1 0 [1,2,3]
 * > 2 1 [1,2,3]
 * > 3 2 [1,2,3]
 * each([{name: 'moose'}, {name: 'lemur'}], (item, key) => {
 *     console.log(item, key);
 * });
 * > moose name
 * > lemur name
 */
export function each(collection, iteratee) {
    _.each.apply(_(collection), arguments);
}

/**
 * Takes an array or an object.
 * Produces a new array of values by mapping each value in colletion through a
 * transformation function (iteratee). iteratee takes the item, index (or
 * key) and the entire collection
 *
 * map([1, 2, 3], function(item) {item + 3;});
 * > [4, 5, 6]
 */
export function map(collection, iteratee) {
    return _.map.apply(_(collection), arguments);
}

/**
 * Looks through each value in the list, returning an array of all the
 * values that pass a truth test (predicate).
 *
 * filter([1,2,3,4,5], (item) => item % 2 === 0)
 * > [2,4]
 */
export function filter(array, predicate) {
    return _.filter.apply(_(array), arguments);
}

/**
 * Returns true if any of the values in the list pass the predicate truth test.
 * Short-circuits and stops traversing the list if a true element is found.
 *
 * any([1,2,3], (item) => item === 3)
 * > true
 * any([1,3,5], (item) => item % 2 === 0)
 * > false
 */
export function any(array, predicate) {
    return _.any.apply(_(array), arguments);
}

/**
 * Returns true if all of the values in the list pass the
 * predicate truth test. Short-circuits and stops traversing
 * the list if a false element is found.
 * every([2, 4, 5], function(num) {return num % 2 == 0});
 * > false
 */
export function every(array, predicate) {
    return _.every.apply(_(array), arguments);
}

/**
 * Takes an array or an object.
 * Boils down collection into a single value.
 * Iterates over the list, feeding each item to the aggregator function.
 * Aggregator should receive two arguments, memo and item.
 * Memo is the current total value, and item is the current item
 * in the list. If an initialValue is passed, the first iteration
 * passed to aggregator will receive initialValue as its memo.
 * If no intialValue is passed, memo's first value in aggregator
 * should be the first value.
 *
 * reduce([1,2,3], function(memo, item) {return memo + item});
 * > 6
 * reduce([1,2,3], function(memo, item) {return memo + item}, 10);
 * > 16
 */
export function reduce(collection, aggregator, initialValue) {
    return _.reduce.apply(_(collection), arguments);
}

/**
 * Similar to reduce but instead of aggregating each item from the
 * left to the right, it aggregates from the right to the left.
 *
 * reduceRight(['a','b','c'], function(memo, item) {return memo + item})
 * > cba
 */
export function reduceRight(collection, aggregator, initialValue) {
    return _.reduceRight.apply(_(collection), arguments);
}

/**
 * Returns a sorted copy of the list by ascending order.
 * If keyOrIteratee is a string, sort will use that string as the key to sort by of
 * each of the objects in the passed array.
 * If keyOrIteratee is a function, it will take each item and return something to sort by.
 * If keyOrIteratee is not passed, it will sort the passed array in ascending order.
 *
 * sort([2,1,3])
 * > [1,2,3]
 * sort(['four', 'two', 'three'], function(word){return word.length;});
 * > ['two', 'four', 'three']
 * sort([{number: 4}, {number: 2}, {number: 7}, 'number']
 * > [{number: 2}, {number: 4}, {number: 7}]
 */
export function sort(array, keyOrIteratee) {
    return _.sortBy.apply(_(array), arguments);
}

/**
 * Produces a duplicate-free version of the array using a === comparison.
 *
 * uniq([1,2,1,4,1,3]
 * [1, 2, 4, 3]
 */
export function uniq(array) {
    return _.uniq.apply(_(array), arguments);
}

/**
 * Adds the properties found on any subsequent objects passed to the
 * function onto the initial object passed to the function.
 * Overwrites any properties found on the initial object that are found in
 * any subsequent objects passed.
 * Note that the function signiture accepts object but can take
 * any number of extension objects.
 *
 * extend({name: 'ryan'}, {age: 28})
 * > {name: 'ryan', age: 28}
 * extend({name: 'moose'}, {name: 'lemur'});
 * > {name: 'lemur'}
 */
export function extend(object) {
    return _.extend.apply(_(object), arguments);
}

/**
 * Partially apply a function by filling in any number of its arguments.
 * Pass it a function and some arguments to bind to that function and curry
 * will return a new function that has those arguments filled.
 *
 * var add = function(a, b) { return a + b;}
 * var addTwo = curry(add, 2);
 * addTwo(3);
 * > 5
 */
export function curry(func, args) {
    return _.partial.apply(_(func), arguments);
}

const funcs = {
    any,
    curry,
    each,
    every,
    extend,
    filter,
    first,
    last,
    map,
    reduce,
    reduceRight,
    sort,
    uniq,
};

_.extend(window, funcs);

export default funcs
