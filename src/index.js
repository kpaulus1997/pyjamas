/**
|--------------------------------------------------
| Is a value Falsy => return true
| Is a value Truthy => return false
|--------------------------------------------------
*/

const isFalsy = val => {
  /**
      Considered as falsy in python
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

/**
  |--------------------------------------------------
  | not isFalsy
  |--------------------------------------------------
  */

const bool = val => !isFalsy(val);

/**
  |--------------------------------------------------
  | Check whether array/object/string length === 0
  |--------------------------------------------------
  */

const isEmpty = val => {
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

/**
  |--------------------------------------------------
  | Convert anything to an Integer
  |--------------------------------------------------
  */

const int = val => {
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
| Convert anything to a Float
|--------------------------------------------------
*/

const float = val => {
  if (isFalsy(val)) {
    return 0.0;
  } else {
    const parsed = parseFloat(val);
    if (isFalsy(parsed)) {
      return 0.0;
    }
    return parsed;
  }
};

/**
  |--------------------------------------------------
  | Check if the value is a float
  |--------------------------------------------------
  */

const isFloat = val => {
  return Number(val) === val && val % 1 !== 0;
};

/**
  |--------------------------------------------------
  | Check if the value is a float
  |--------------------------------------------------
  */

const isInt = val => {
  return Number(val) === val && val % 1 === 0;
};

/**
  |--------------------------------------------------
  | Check if the value is a number
  |--------------------------------------------------
  */

const isNumber = val => {
  return isFloat(val) || isInt(val);
};

/**
  |--------------------------------------------------
  | Get the length of an array, object or string
  | anything else returns -1
  |--------------------------------------------------
  */

const len = val => {
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

const range = (start, stop) => {
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

/**
  |--------------------------------------------------
  | return the sum of an array
  |--------------------------------------------------
  */

const sum = arr => {
  let ret = 0;
  if (arr instanceof Array) {
    for (let i = 0; i < len(arr); i++) {
      if (isNumber(arr[i])) ret += arr[i];
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
const ifElseUndefined = (condition, val) => {
  if (typeof val === "function") {
    return val;
  } else if (isFalsy(condition)) {
    return undefined;
  } else {
    return val;
  }
};

module.exports = {
  isFalsy: isFalsy,
  bool: bool,
  int: int,
  isEmpty: isEmpty,
  float: float,
  isFloat: isFloat,
  isInt: isInt,
  isNumber: isNumber,
  len: len,
  range: range,
  sum: sum,
  ifElseUndefined: ifElseUndefined
};
