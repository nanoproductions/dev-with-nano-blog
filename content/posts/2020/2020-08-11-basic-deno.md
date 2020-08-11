---
title: Basic Deno Features
date: 2020-08-11
published: true
cover: ./img/basic-deno.png
---

Deno is a secure JavaScript server-side runtime which is written on Rust was released not too long ago. Before and after it was released, we had all this "content" on YouTube saying that `Node.js is taken over`.

Now, I was really tired of this as many of those people who talked about this, probably don't know the full standard library of Deno. So instead of speaking of this controversy between the people, let's jump in to what we are building today.

## Setup

Make sure that you have Deno installed on your machine, if not you can follow the guide that I have on this site. Just look for the `Deno Install`.

Then inside a directory, we need one file only, and that is: `main.ts`.

And to check if it is working, just add to the file, `console.log(window)` then in the terminal:

```
deno run main.ts
```

And you should get the `window` object.

## The `window` object

Inside of `node` we have the `global` object, which contains stuff like:

```js
global.console.log('Hello World')
```

Then inside the browser we have the `window` object:

```js
window.console.log('Hello World')
```

Now Deno tries to carry over some of the APIs available to us in the browser, and use them inside of Deno.

For example, we can use the browser `fetch` inside of our Deno file.

```js
const postsFetch = await fetch('https://jsonplaceholder.typicode.com/posts/')

let posts = await postsFetch.json()

console.log(posts)
```

Now, go ahead and `copy-paste` this code inside a JavaScript Browser console and see the code run there as well.

The code runs because the `fetch` method is provided on the `window` object of both Deno and the browser.

```js
window.fetch()
```

## Top Level await

Now, normally in JavaScript, to use `async await`, we would have to create an `async` function to use `await`, but in Deno it is different. Instead, we can use `await` at the top level of our program.

```js
const postsFetch = await fetch('https://jsonplaceholder.typicode.com/posts/')

let posts = await postsFetch.json()

console.log(posts)
```

Remember that code, look at how we have no `async` but we are using `await` and the data flow is very smooth.

_In Chrome, we have the ability to use top-level await as well_

## URL Imports

If you remember the new JavaScript Web Modules, and how we can use modules straight in the browser. For example:

```html
<script src="./app.js" type="module"></script>
```

But we can also use URL imports in JavaScript Web Modules.

```js
import Vue from 'https://unpkg.com/vue@2.6.11/dist/vue.esm.browser.js'
```

Now this same thing works in Deno.

```js
import { v4 } from 'https://deno.land/std/uuid/mod.ts'
```

Basically, what we are importing is the `uuid` module from a URL! And when we run the program, it will indeed download the package as well.

## Deno Run Permissions

Let's say you wanted to run a program that requires access to the internet. Well, above we had those `fetch` requests we were making, and probably failed for you.

Now to make those work, we have to tell Deno that it can use the network. For example:

```
deno run --allow-net main.ts
```

And then should successfully run. There are also many other flags that we explore soon.

## Fun Facts

- Node.js and Deno creators are the exact same. Ryan Dahl.
- Deno runs on the Chrome v8 engine of JavaScript, the same engine Node.js runs on.
- If you scramble either Node or Deno, you get either word.
- If a package works in the browser with Web JavaScript Modules, then it should work in Deno.

## Conclusion

So Deno is an incredible runtime that has some features that node.js really lacks, but at the same time, they both are excellent technologies that we have to this day.
