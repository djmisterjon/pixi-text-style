'use strict';

function deepEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (typeof a !== typeof b || a == null || b === null || typeof a !== "object" || typeof b !== "object") {
        return false;
    }

    let propsInA = 0;
    let propsInB = 0;

    for (const prop in a) {
        ++propsInA;
    }

    for (const prop in b) {
        ++propsInB;
        if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
            return false;
        }
    }

    return propsInA === propsInB;
}