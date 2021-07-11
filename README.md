# A set of basic types for Pave

Contents include:

- String
- Int
- Number
- Object
- Time
- Datetime
- Date
- Boolean

Simply include this in your package.json and then spread this into your Pave schema index to have pre-baked types ready to go, as shown below


> // In your schema root
>
> import types from 'pave-basic-types';
>
> {
>   ...types
> }
>
> // ...or, if you prefer a selective choosing of the types provided by this package
> 
> import { string, boolean, ...etc } from 'pave-basic-types';
>
> {
>   string,
>   boolean,
>   ...etc
> }

And now you have your basic scalar types defined