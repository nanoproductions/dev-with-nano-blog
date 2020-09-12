---
title: Creating a Local Storage JS Library
date: 2020-09-11T20:41:26.275Z
published: true
cover: ./img/build-localstorage-library.png
---

In this post we will create a Local Storage library with JavaScript to allow us to utilize the Local Storage API much easier.

We will be using EcmaScript Modules in the browser, meaning import/export syntax will be used. This library will be targeted towards modern browsers, but we will learn a lot during this mini JavaScript project.

## Example

```js
import storage from './library'

// Set an Item
storage('id', 123)

// Get an Item
storage('id')

// Set Objects/Arrays
storage('user', { name: 'Nano' })
```

\## Setup

Very very simple. A `index.html` and `app.js` plus `library.js`. That should be it.

Inside of `index.html`, put in it:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>LocalStorage Library</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <script src="./app.js" type="module"></script>
  </body>
</html>
```

Notice that we put `type="module"` that tells our browser that we are importing this js file as a module, which allows us to use `import/export` statements.

## Let's begin!

First, we need to setup a function that will be exported as default that will take in many parameters as we either need 1 parameter or 2 parameters, so we just use the `rest` operator.

**library.js**

```js
function storage(...rest) {
  console.log(rest)
}

export default storage
```

Then we can import it into our main file, and run it to see if it works.

**app.js**

```js
import storage from './storage.js'

storage('whoo', 'hooo it is starting')
```

You should see the params we passed inside the console.

### Evaluate Data

Depending on what two params are passed in, we need to run some if/else statements on the params to see what data types we get.

Because...
If we get a object data type, we want to stringify that before it goes into localstorage, or if we get an array, we also want to stringify that before it goes into localstorage.

**library.js**

```js
function storage(...rest) {
  if (
    (typeof rest[0] === 'string' && typeof rest[1] === 'string') ||
    (typeof rest[0] === 'number' && typeof rest[1] === 'number') ||
    (typeof rest[0] === 'string' && typeof rest[1] === 'number')
  ) {
    // we get a string
  } else if (
    (typeof rest[0] === 'string' && typeof [1] === 'object') ||
    (typeof rest[0] === 'string' && rest[1].isArray())
  ) {
    // We get object data type or an array
  }
}
```

Right now we are only worried about setting the data, so we checking depending on both the first param and the second one.

Let's look at some code snippets from the code block.

```js
typeof rest[0] === 'string' && typeof rest[1] === 'string'
```

The line of code looks at the typeof of the `rest[0]` and see if it is a string and then also the same with `rest[1]`

```js
if ( (// condition 1) || (condition 2) )
```

Basically, we can compare a condition to a condition. Like if condition 1 doesn't match then we used the `||` `or` operator to see if condition 2 might match.

We could replace the `||` with `&&` or anything else, but that is something I wanted to point out.

### Let's Set The Items

Now we can finally set the items in Local Storage.

Remember that for arrays/objects we want to run `JSON.stringify()` on them.

**library.js**

```js
function storage(...rest) {
  if (
    (typeof rest[0] === 'string' && typeof rest[1] === 'string') ||
    (typeof rest[0] === 'number' && typeof rest[1] === 'number') ||
    (typeof rest[0] === 'string' && typeof rest[1] === 'number')
  ) {
    return localStorage.setItem(rest[0], rest[1])
  } else if (
    (typeof rest[0] === 'string' && typeof [1] === 'object') ||
    (typeof rest[0] === 'string' && rest[1].isArray())
  ) {
    const data = JSON.stringify(rest[1])
    return localStorage.setItem(rest[0], data)
  }
}
```

Basically for basic strings or numbers, we can just set it directly as no transformation needed, but for objects/arrays we need it, so we will just run `JSON.stringify()` on them. And we `return` the method we run.

## Getting Items

For getting an item, we need 1 param, and get it. Then check if it can be parsed, if it can be, then we parse it, otherwise we return the data.

**library.js**

```js
function storage(...rest) {
  if (
    (typeof rest[0] === 'string' || typeof rest[0] === 'number') &&
    typeof rest[1] === 'undefined'
  ) {
    let data = localStorage.getItem(rest[0])

    return checkJSON(data)
  } else if (
    (typeof rest[0] === 'string' && typeof rest[1] === 'string') ||
    (typeof rest[0] === 'number' && typeof rest[1] === 'number') ||
    (typeof rest[0] === 'string' && typeof rest[1] === 'number')
  ) {
    return localStorage.setItem(rest[0], rest[1])
  } else if (
    (typeof rest[0] === 'string' && typeof [1] === 'object') ||
    (typeof rest[0] === 'string' && rest[1].isArray())
  ) {
    const data = JSON.stringify(rest[1])
    return localStorage.setItem(rest[0], data)
  }
}
```

We modify the function a bit, since I want the items to be `get` first, then we should set.

Now we have a helper function, `checkJSON` which will check if we can parse the string from JSON to array/object, if not it returns the normal string.

**library.js**

```js
function checkJSON(json) {
  try {
    return JSON.parse(json)
  } catch (err) {
    return json
  }
}
```

Now if you were to test it out, our library should work.

## Conclusion

I hope this blog post was fun/interesting at the same time very informational. Here is the GitHub Repo link: https://github.com/nanoproductions/localstorage-library-js

If you are interested in building this library for React w/ Hooks or learning how to publish to NPM, open an issue on my blog repo and let me know!
