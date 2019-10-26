<!--ts-->
   * [ Introduction. ](#intro)
   * [ Installation. ](#instal)
   * [Installation](#installation)
   * [ Example. ](#examp)
   * [ Functions. ](#func)
      * [ isFalsy. ](#isFalsy)
      * [ isEmpty. ](#isEmpty)
      * [ isInt. ](#isInt)
      * [ isFloat. ](#isFloat)
      * [ isNumber. ](#isNumber)
      * [ bool. ](#bool)
      * [ sum. ](#sum)
      * [ int. ](#int)
      * [ len. ](#len)
      * [ range. ](#range)
<!--te-->

<a name="intro"></a>
# Pyjamas

This package brings some Python beauty to JavaScript which especially includes typing utils that help you to get less exceptions and have more control of your codes functionallity. As you probably know, JS is dynamically typed which sometimes leads to unwanted behaviours, this package is trying to solve these problems with a new implementation of falsy values and typing utils. Here is a comparision:

#### These values will JavaScript make bypass the if blocks
```javascript
if (false)
if (undefined)
if (0)
if (0n)
if (null)
if (NaN)
if ('')
```
#### Now Pyjamas extends these values and also consideres the following values as falsy

Empty Arrays: []

Empty Objects: {}

Functions that return falsy values: () => null

<a name="instal"></a>
### Installation

use

```
yarn add pyjamas
```
or
```
npm install pyjamas
```
<a name="examp"></a>
### Example

Pyjamas ships with the isFalsy and bool function which is just an inverter of isFalsy

```javascript
# ES6

import { isFalsy, bool } from 'pyjamas'

if(isFalsy(undefined)) {
  // this will execute because undefined is Falsy
}

if(bool(undefined)) {
  // this won't execute because bool will convert undefined to false
}
```
<a name="func"></a>
<a name="isFalsy"></a>
### isFalsy(value) 
| Function                                  | Returns |
| ----------------------------------------- |:-------:|
| isFalsy(undefined)                        | true    |
| isFalsy(false)                            | true    |
| isFalsy(NaN)                              | true    |
| isFalsy('')                               | true    |
| isFalsy({})                               | true    |
| isFalsy([])                               | true    |
| isFalsy(0)                                | true    |
| isFalsy(0.0)                              | true    |
| isFalsy([][0])                            | true    |
| isFalsy([].length)                        | true    |
| isFalsy(() => [][0].name)                 | true    |
| isFalsy(NaN)                              | true    |
| isFalsy('hi')                             | false   |
| isFalsy(9)                                | false   |
| isFalsy(0.0000000001)                     | false   |
| isFalsy({ none: 'none' })                 | false   |
| isFalsy(() => [{ name: 'pete' }][0].name) | false   |

Especially usefull is that you can check for a value in an array of objects for instance ```[][0].name``` howerver just putting it in isFalsy like: ```isFalsy([][0].name)``` would throw an exception, you need to write ```() =>``` in front of the value.

<a name="isEmpty"></a>
### isEmpty(value)

this function checks if a String | Array | Object is empty

| Function               | Returns |
| ---------------------- |:-------:|
| isEmpty('Hi')          | false   |
| isEmpty({ hi: 'hi })   | false   |
| isEmpty([0,1,2])       | false   |

ANYTHING else returns true

<a name="isInt"></a>
### isInt(value)

Check if the value is an Integer

| Function              | Returns |
| --------------------- |:-------:|
| isInt(1)              | true    |
| isInt(0)              | true    |
| isInt(2 / 2)          | true    |
| isInt(1.0)            | true    |
| isInt(2 / 1.5)        | false   |
| isInt(1.000000000001) | false   |
| isInt('1')            | false   |
| isInt(NaN)            | false   |
| isInt(0.999999999999) | false   |


<a name="isFloat"></a>
### isFloat(value)

Check if the value is a Float

| Function              | Returns |
| --------------------- |:-------:|
| isFloat(1.1)          | true    |
| isFloat(0.000000001)  | true    |
| isFloat(2 / 2.1)      | true    |
| isFloat(1)            | false   |
| isFloat(0)            | false   |
| isFloat('1')          | false   |
| isFloat(NaN)          | false   |
| isFloat(undefined)    | false   |

<a name="isNumber"></a>
### isNumber(value)

check if value is either an Interger or a Float


## Converters

Methods that parse the arguments into defined data structures

<a name="bool"></a>
### bool(value)

bool uses isFalsy to parse the incoming value into a boolean

<a name="len"></a>
### len(value)

get the length (Integer) of an Array | String | Object

| Function                | Returns |
| ----------------------- |:-------:|
| len('Hi')               | 2       |
| len([0, 1])             | 2       |
| len({ a: 'a', b: 'b' }) | 2       |
| len('')                 | 0       |
| len([])                 | 0       |
| len({})                 | 0       |
| len(NaN)                | -1      |
| len(undefined)          | -1      |
| len(false)              | -1      |
| len(null)               | -1      |


<a name="sum"></a>
### sum(value)

add all values inside an Array


| Function           | Returns |
| ------------------ |:-------:|
| sum([1, 1])        | 2       |
| sum([0.5, 0.5])    | 1       |
| sum([1, null])     | 1       |
| sum(undefined)     | 0       |
| sum([null, NaN])   | 0       |
| sum('Hi')          | 0       |

<a name="int"></a>
### int(value)

Trys to parse anything to an Integer, else returns 0

| Function           | Returns |
| ------------------ |:-------:|
| int(1)             | 1       |
| int(1.0)           | 1       |
| int('1')           | 1       |
| int(1.999999999)   | 1       |
| int(0.999999999)   | 0       |
| int('NotaNumber')  | 0       |
| int(undefined)     | 0       |
| int(NaN)           | 0       |

<a name="float"></a>
### float(value)

Trys to parse anything to a Float, else returns 0.0

| Function              | Returns |
| --------------------- |:-------:|
| float(1)              | 1.0     |
| float('1.1')          | 1.1     |
| float('1')            | 1.0     |
| float('   1.2   ')    | 1.2     |
| float('1.2 m')        | 1.2     |
| float('NotaNumber')   | 0.0     |
| int(undefined)        | 0.0     |
| int(NaN)              | 0.0     |

<a name="range"></a>
### range(start: int, stop: int)

generate an Array with start as the Integer to begin with and Stop as the Index to end with

| Function          | Returns         |
| ----------------- |:---------------:|
| range(2)          | [0, 1]          |
| range(10).length  | 10              |
| range(5, 10)      | [5, 6, 7, 8, 9] |
