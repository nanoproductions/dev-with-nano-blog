---
title: Reverse jQuery - onLoad Function - Part 01
date: 2020-08-24
published: false
cover: ./img/reverse-jquery.png
---

Back in the day before I learned Web Development, jQuery was really popular, now with jQuery not popular amongst the new developers, but it is very interesting to learn what it did for developers back in the day.

In this series, we will reverse engineer jQuery so we can start to see how today modern JavaScript can help us solve problems that jQuery used to be used for.

## Getting Started

To get started, first we need the jQuery CDN, so I will go ahead and save you the 20 seconds to get the CDN.

```
https://code.jquery.com/jquery-3.5.1.min.js
```

Now, create a couple of files:

- `index.html`
- `app.js`
- `rQuery.js`

In `index.html` we will write our markup of HTML, then in `app.js` we will write the our JavaScript (obviously), but in `rQuery.js` we will replicate jQuery using vanilla JavaScript.

## Inspiration

This series inspiration came from `The Coding Garden with CJ`. He did a video on demystifying jQuery where he did a very similar thing, but in my series I will basically start from where he did, then continue on even further.

I will try to write the code a bit more different than `CJ` to keep both content unique as much as possible.

**Check out the video**

[![](https://img.youtube.com/vi/kaaEJreD1jA/maxresdefault.jpg)](https://www.youtube.com/watch?v=kaaEJreD1jA)

## Simple jQuery Basics

Assuming you got your `index.html` setup, and linked to `app.js`. Let's begin.

jQuery gives us a variable/function called `$`, now depending on what you pass in it, it will run on the dependant. Let me show you.

_index.html_

```html
<h1>Hello World</h1>
```

_app.js_

```js
let heading = $('h1')
console.log(heading)
```

The code above basically, selected the `h1` from the page, and will print it out onto the console.

### Ready Function

In jQuery, if we pass in a function to `$()`, then it will be known as the Document Ready function.

When the DOM Content has loaded, this is when the function will run.

We can pass in a normal function or an arrow function.

## Reverse Engineer

Lets reverse engineer the Ready Function.

Here is an example of a Ready function. Put this in your `app.js` and you can verify it works with jQuery.

```js
$(() => {
  console.log('DOM CONTENT LOADED')
})
```

Once you are ready and know the code works with jQuery, get started by commenting out the jQuery CDN, and add `rQuery.js`.

So something like this:

```html
<!-- <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> -->
<script src="./rQuery.js"></script>
<script src="./app.js"></script>
```

Before we write any code, lets see if the console has any errors for us.

![](https://i.imgur.com/XBzD3NK.png)

Well, simply the error is that is does not understand the `$` variable.

So, now let's write some code to get it to work.

_rQuery.js_

```js
function $() {}
```

Now, our code seems to be running okay with no errors, but it doesn't do what we want.

Look closely at the code we have written,

```js
$(() => {
  console.log('DOM CONTENT LOADED')
})
```

Basically, the `$()` function has one argument and that one argument has a function, but what if we get multiple arguments, so let's make sure that our rQuery is ready for that.

```js
function $(...args) {}
```

We are using the `rest` operator, which will turn our args into an array for us to use inside our function.

In our case, our first arg is a function, so we need to look at `args[0]`

To check the `typeof` the argument, as we need to know if the passed in argument is a function, so we check if it is a function.

```js
function $(...args) {
  if (typeof args[0] === 'function') {
  }
}
```

And lets see this in action. So, we can add `console.log("WE ARE IN A FUNCTION")`. Make sure to add inside the `if` statement.

When we run the code, we do get that the argument we passed was a function, since the code has ran.

## The DOM Event

When we select elements from the DOM we have access to like:

```js
button.addEventListener()
```

But the DOM has event listener also, and there are many, but for rQuery we want to use `DOMContentLoaded`.

```js
function $(...args) {
  if (typeof args[0] === 'function') {
    document.addEventListener('DOMContentLoaded', args[0])
  }
}
```

When the `DOMContentLoaded` event occurs, we want to load the function that was passed in at `args[0]`.

Now run the code and it works!!!

## Conclusion

This might have been very simple, but right now we are just experimenting, but in future posts, this code will start to get very long!

Until then, have a great day!
