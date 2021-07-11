# Pave Basic Types
A set of basic types for Pave

## Included Types

- String
- Int
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
> import { string, boolean, ...etc } from 'pave-basic-types';
>
> export default {<br>
> &nbsp;string,<br>
> &nbsp;boolean,<br>
> &nbsp;...etc<br>
> }

And now you have your basic scalar types defined

## Footnotes

All errors thrown by values that don't fit types fit the same form;

> Expected a value of type (type being referenced) but was provided value (insert value here)

This is useful in the case that you'd like to implement your own wrapper error catching function, as you'll be able to predict the format of the caught error, and be able to do from there as you please.
