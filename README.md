# Pave Basic Types
A set of basic types for Pave

## Included Types

- String
- Number
- Object
- Time
- Datetime
- Date
- Boolean

## Installation

Simply include this in your package.json and then spread this into your Pave schema index to have pre-baked types ready to go, as shown below


> // In your schema root
>
> import types from 'pave-basic-types';
>
> export default {<br>
> &nbsp;...types<br>
> }
>
> // ...or, if you prefer a selective choosing of the types provided by this package
> 
> import types from 'pave-basic-types';
>
> const { string, boolean, ...etc } = types;
>
> export default {<br>
> &nbsp;string,<br>
> &nbsp;boolean,<br>
> &nbsp;...etc<br>
> }

And now you have your basic scalar types defined

## Arguments by Type

Certain arguments accept typeArgs as outlined in pave type arguments, described [here](https://pavejs.org/docs/schemas-and-types/scalar-types/#arguments-typeargs)

### String

String accepts three arguments; trim (defaulted to true), maxLength, and minLength.

- **trim**: whether or not input value is sanitized with .trim()
- **maxLength**: max length of input value **after trimming**, if the argument trim !== false
- **minLength**: min length of input value **after trimming**, if the argument trim !== false

## Footnotes

All errors thrown by values that don't fit types fit the same form;

> Expected a value of type **Type** but was provided value **Value**

This is useful in the case that you'd like to implement your own wrapper error catching function, as you'll be able to predict the format of the caught error, and be able to do from there as you please.
