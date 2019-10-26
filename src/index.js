/**
|--------------------------------------------------
| Is a value Falsy => return true
| Is a value Truthy => return false
|--------------------------------------------------
*/

export const isFalsy = val => {
  /**
      Considered as falsy
      # null
      # false
      # undefined
      # Zero of any numeric type. For example, 0, 0.0, NaN
      # Empty sequence. For example, (), [], ''.
      # Empty mapping. For example, {}
      # objects of Classes which has length which returns 0 or false
    */
  try {
    if (typeof val === "function") {
      const ret = val(); // try calling the function
      return isFalsy(ret); // check the returned value
    } else if (typeof val === "object" && val != null) {
      return Object.keys(val).length === 0;
    } else if (typeof val === "number") {
      const nan = isNaN(val);
      const isZero = val === 0;
      return nan || isZero;
    } else if (!val) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return true;
  }
};
// isFalsy(undefined)                            true
// isFalsy('')                                   true
// isFalsy({})                                   true
// isFalsy([])                                   true
// isFalsy([][0])                                true
// isFalsy(() => [][0].name)                     true
// isFalsy(NaN)                                  true

// isFalsy('hi')                                 false
// isFalsy(9)                                    false
// isFalsy(0)                                    false
// isFalsy({ none: 'none' })                     false
// isFalsy(() => [{ name: 'hi' }][0].name)       false
// isFalsy([].length)                            false

/**
  |--------------------------------------------------
  | not isFalsy
  |--------------------------------------------------
  */

export const bool = val => !isFalsy(val);

/**
  |--------------------------------------------------
  | Check whether array/object/string length === 0
  |--------------------------------------------------
  */

export const isEmpty = val => {
  if (typeof val === "string") {
    return val.length === 0;
  } else if (typeof val === "object" && val != null) {
    return Object.keys(val).length === 0;
  } else if (val instanceof Array) {
    return val.length === 0;
  } else {
    return true;
  }
};
// isEmpty('Hi')                         false
// isEmpty({ hi: 'hi })                  false
// isEmpty([0,1,2])                      false

// anything else                       true

/**
  |--------------------------------------------------
  | Convert anything to an Integer
  |--------------------------------------------------
  */

export const int = val => {
  if (isFalsy(val)) {
    return 0;
  } else {
    const parsed = parseInt(val, 10);
    if (isFalsy(parsed)) {
      return 0;
    }
    return parsed;
  }
};

/**
  |--------------------------------------------------
  | Check if the value is a float
  |--------------------------------------------------
  */

export const isFloat = val => {
  return Number(val) === val && val % 1 !== 0;
};

/**
  |--------------------------------------------------
  | Check if the value is a float
  |--------------------------------------------------
  */

export const isInt = val => {
  return Number(val) === val && val % 1 === 0;
};

/**
  |--------------------------------------------------
  | Check if the value is a number
  |--------------------------------------------------
  */

export const isNumber = val => {
  return isFloat(val) || isInt(val);
};

/**
  |--------------------------------------------------
  | Get the length of an array, object or string
  | anything else returns -1
  |--------------------------------------------------
  */

export const len = val => {
  if (typeof val === "string") {
    return val.length;
  } else if (typeof val === "object" && val != null) {
    // null is also an object
    return Object.keys(val).length;
  } else if (val instanceof Array) {
    return val.length;
  } else {
    return -1;
  }
};

/**
  |--------------------------------------------------
  | Create an array with start stop items
  |--------------------------------------------------
  */

export const range = (start, stop) => {
  let _start;
  let _stop;
  if (isFalsy(stop)) {
    _start = 0;
    _stop = start;
  } else {
    _start = start;
    _stop = stop;
  }
  const array = [];
  for (let i = _start; i < _stop; i++) {
    array.push(i);
  }
  return array;
};

// range(2)             [0, 1]
// range(10).length     10
// range(5, 10)         [5, 6, 7, 8, 9]

/**
  |--------------------------------------------------
  | return the sum of an array
  |--------------------------------------------------
  */

export const sum = val => {
  let ret = 0;
  if (val instanceof Array) {
    for (let i = 0; i < len(val); i++) {
      if (isNumber(val)) ret += val;
    }
  }
  return ret;
};

/**
  |--------------------------------------------------
  | Helpfull for conditional Props and conditional Styles
  | workes like: if condition retrun value else return undefined
  |--------------------------------------------------
  */
export const ifElseUndefined = (condition, val) => {
  if (typeof val === "function") {
    return val;
  } else if (isFalsy(condition)) {
    return undefined;
  } else {
    return val;
  }
};

// ifElseUndefined({ hi: 'hi }, val))                 val
// ifElseUndefined([0,1], val))                       val
// ifElseUndefined('hi', val))                        val
// ifElseUndefined(true, val))                        val
// ifElseUndefined(6, val))                           val

// ifElseUndefined([], val))                          undefined
// ifElseUndefined({}, val))                          undefined
// ifElseUndefined('', val))                          undefined
// ifElseUndefined(undefined, val))                   undefined
// ifElseUndefined(false, val))                       undefined
// ifElseUndefined(NaN, val))                         undefined
// ifElseUndefined(null, val))                        undefined
