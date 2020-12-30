---
title: Creating a Number Guesser in JavaScript
date: 2020-11-11
published: false
---

In this post we will be creating a Number Guesser in JavaScript. This project is being like a lee-way into JavaScript, and just a simple project to play around with.

## Setup

Create two files in your directory:

    - `index.html`
    - `app.js`

Copy this starter code into `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />
  </head>

  <body>
    <h1>Hello World</h1>
    <script src="app.js"></script>
  </body>
</html>
```

And this code for `app.js`:

```js
console.log('Hello World')
```

## Creating the UI

We need a User Interface of where we are going to type in the numbers and all.

Here is the code for the simple basic `Step 1` UI:

```html
<body>
  <!-- Navbar -->
  <nav>
    <div class="nav-wrapper blue darken-4">
      <a href="#" class="brand-logo center">Number Guesser</a>
    </div>
  </nav>

  <section class="container">
    <p>Guess the number...</p>
    <input type="text" placeholder="Your Guess..." id="user-guess" />
    <button class="btn blue darken-4" id="guess-submit">Submit Guess</button>
    <div id="result"></div>
  </section>
  <script src="app.js"></script>
</body>
```

The UI should look like.
![](https://i.imgur.com/bfzW0qI.png)

## Basic Number Guesser

### Target DOM Elements

To target our DOM elements, we use `document.querySelector()`.

```js
const guessInput = document.querySelector('#user-guess')
const submitBtn = document.querySelector('#guess-submit')
const result = document.querySelector('#result')
```

### Event Listener on Button

We are going to add an event listener to the button, then get the value of the input.

To check for events on a DOM element, we do: `element.addEventListener(eventName, () => {})`.

`addEventListener`

- First Argument: The event name (e.g. `click`, `onKeyUp`)
- Second Argument: The `callback` function. Basically, what happens when this event occurs.

```js
submitBtn.addEventListener('click', () => {
  console.log('CLICKED!!')
})
```

### Get Input Value

We want to get our input value when we click on the button.

To get the values of any DOM element, mainly for inputs we would do: `element.value`.

So our `event` handler looks like:

```js
submitBtn.addEventListener('click', () => {
  let guessValue = Number(guessInput.value)

  console.log(guessValue)
})
```

We will wrap in `Number()` since the input we get is a string.

### Match Random Number

Getting the input value is not enough, we have to do something with it. So we match it up to a `RANDOM` number.

Let's start off by setting a variable

```js
let random_secret_number = 5
```

For now, our random number is going to be `5`.

When we click the button, we want to see if the value of the input is equal to our random number.

```js
if (guessValue === random_secret_number) {
  console.log('GOOD GUESS')
} else {
  console.log('TRY AGAIN')
}
```

### Actual Random Number

JavaScript has the `Math` class built in, so we can generate a random number like this:

```js
let random_secret_number = Math.floor(Math.random() * 100 + 1)
```

In this case, `Math.floor` returns the nearest integer `Math.random()` returns. And we multiply it by `100` since we want to guess between `1 and 100`.

Or multiply by `10` for `1 and 10`.

To test it out, we can `console.log()` the random number every time we click the button.

```js
submitBtn.addEventListener('click', () => {
  let guessValue = Number(guessInput.value)

  console.log(random_secret_number)

  if (guessValue === random_secret_number) {
    console.log('GOOD GUESS')
  } else {
    console.log('TRY AGAIN')
  }
})
```

When you press the button,
