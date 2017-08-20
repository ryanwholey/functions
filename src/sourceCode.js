export function each(collection, iterator) {
    let array = collection;

    if (!Array.isArray(collection)) {
        array = Object.values(collection);
    }

    for (let i = 0; i < array.length; i++) {
        iterator(array[i]);
    }
}

export function map(collection, iterator) {
    let array = [];

    for (let i = 0; i < collection.length; i++) {
        array.push(iterator(collection[i]));
    }

    return array;
}

const funcs = {
    each,
    map,
//    reduce,
};

export default funcs
