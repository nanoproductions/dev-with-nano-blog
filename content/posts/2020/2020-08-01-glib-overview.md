---
title: GLib JavaScript Library Overview
date: 2020-08-01
published: true
cover: ./img/glib-overview.png
---

In this blog post, we take a look at the JavaScript library known as `GLib`. So let's not waste any words and get started.

## Getting Started

Now, to get started, initially you would have to download the source code to your dev machine, but I will use a service that lets you turn any `github` file or folder into a `cdn` `link`.

So the `cdn` link for `Glib` would be:

```
https://cdn.jsdelivr.net/gh/GladiatorMC/glib/GLib-v1.8.js
```

Inside your sandbox directory we can create the following files:

```
- index.html
- app.js
```

Inside of `index.html` we want:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GLib Sandbox</title>
    <link rel="stylesheet" href="https://unpkg.com/wingcss" />
  </head>
  <body>
    <h1>GLib Sandbox</h1>
    <script src="https://cdn.jsdelivr.net/gh/GladiatorMC/glib/GLib-v1.8.js"></script>
    <script src="./app.js"></script>
  </body>
</html>
```

Basically I am using the emmett shortcut of `!` and then adding `Wing CSS` that I just found and using as an excuse just to try it out.

And then adding our custom JavaScript file.

**Reminder: I am using v1.8**

## Printing

The library provides us `3` ways to print to the console. In which two ways provide the normal `console.log()` and the other provides us a bit of a helper as you will see.

```js
print('Hello World'); // Output: Hello World
log('Hello World'); // Output: Hello World
dbg('Hello World'); // Output: Debug: Hello World
```

The `dbg()` function under the hood returns a `console.warn()`.

```js
function dbg(...text) {
  return console.warn('Debug:', ...text);
}
```

## Parse HTML

Now being able to have your own mini DOM in your JavaScript and HTML file is very helpful, but we can also do that too with GLib. The API is provided in JavaScript, but GLib makes it easy.

```js
let nanoDom = parseHTML(`
    <!DOCTYPE html>
    <html>
       <head>
        <title>Document</title>
       </head>
        <body>
            <h1>Testing</h1>
            <h2>News</h2>
        </body>
    </html>
`);
```

Now if we want we can `log(nanoDom)`.

_Remember: `log()` is a function provided by GLib._

We can also perform normal DOM methods on it too. Normally, we would do something like:

```js
let heading = document.querySelector('h2');
```

But we can do the same with the custom mini DOM we created.

```js
let heading = nanoDom.querySelector('h2');
print(heading); // <h2>News</h2>
```

_`print()` is provided by GLib._

Now remember that we did not have a `h2` in our `index.html`.

## Custom RGB

Don't feel like creating colors, GLib provides us with a `RandomColor()` function. The result is a random RGB color will be generated and we are provided a `hex` value.

**Be on the lookout for a color pallette generator project where we will use GLib**

```js
RandomColor();

// Result
{
    rgb: {
        r: 83,
        g: 156,
        b: 178
    },
hex: "#539cb2"
}
```

## Random ID

With GLib we can generate a random ID.

We can pass in a `options` object with a `length` property.

```js
RandomID((options = { length: 10 }));
```

And if you were to `log` that you would see it.

**Be in the lookout for a password generator where we modify the library code to create a password generator function. Also we will create a frontend for it**

## Conclusion

Now while I can't review all the features of this library, but at least provide a overview of the features that made me interested in taking a look at it.

The Repo for the library is: https://github.com/GladiatorMC/glib.
