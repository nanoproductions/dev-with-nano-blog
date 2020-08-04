---
title: Color Pallette Generator | GLib
date: 2020-08-04
published: true
cover: ./img/glib-color.png
---

In this blog post, we will tackle the function `RandomColor()` provided by GLib to create a `Color Pallette Generator`.

Before you do this project, I suggest you check out my overview on `GLib` so you can get familiar with it.

So, why waste anytime, and lets begin!

## Setup

Inside a directory, we want the following files:

- `index.html`
- `app.css`
- `main.js`

For now, let's just paste in a boilerplate of HTML in `index.html`.

**`index.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./app.css" />
    <title>GLib Color Pallette</title>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/gh/GladiatorMC/glib/GLib-v1.8.js"></script>
    <script src="./main.js"></script>
  </body>
</html>
```

Now I added a `app.css` for our styles then added `GLib` via a CDN. And just as a reminder, I am using `v1.8`.

Inside of the CSS file, we want some basic resets, not much.

**`app.css`**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}
```

And in our JavaScript file, a simple `log()` should do it. That way we can test if the library `GLib` is coming in.

**`main.js`**

```js
log('IT WORKS');
```

## Adding HTML

So what I am planning is to have 6 columns with 6 different colors, and when you `hover` over the color, it has an overlay which will show you the `hex` code of the color.

**`index.html`**

```html
<div class="grid">
  <div class="box">
    <div class="overlay"></div>
  </div>
  <div class="box">
    <div class="overlay"></div>
  </div>
  <div class="box">
    <div class="overlay"></div>
  </div>
  <div class="box">
    <div class="overlay"></div>
  </div>
  <div class="box">
    <div class="overlay"></div>
  </div>
  <div class="box">
    <div class="overlay"></div>
  </div>
</div>
```

And the whole container has a class of `grid` since we will be using the `grid` system to help us layout the colors.

If you check the page, you will find nothing shown since we haven't added any styles as by default a `div` has no `width` or `height` defined or any major styles.

We also need a header. So, I came up with a very intelligent header which keeps our application dummy proof.

```html
<header>
  <h1>GLib Color Pallette</h1>
</header>
```

Now time for some styles.

```css
header {
  height: 10vh;
  width: 100%;
  text-align: center;
  padding: 1.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 100%;
}

.box {
  height: 90vh;
  width: 100%;
  border: 1px white solid;
}

.box > .overlay {
  display: none;
  height: 90vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.overlay p {
  color: white;
  padding-top: 1rem;
  text-align: center;
}

.box:hover > .overlay {
  display: block;
}

@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .box {
    height: 45vh;
  }
}
```

### Go Over Styles

So, let me go over the styles one by one block to understand how these styles come together.

```css
header {
  height: 10vh;
  width: 100%;
  text-align: center;
  padding: 1.5rem;
}
```

The `header` will have a height of `10vh`, which stands for `10 View Height`. Meaning, the total height of a page would be `100vh` but we only want `10vh` of the page to be the header, and the rest shall be the colors, as you will see.

Also, we give it a width of `100%` and the text `center`. Don't forget the padding, which gives space to the text in the header.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 100%;
}
```

I can't explain the `display: grid` much, as this post would be very long if I added the `grid` explanation.

Simply, when you set `display: grid` you introduce new CSS properties such as `grid-template-columns`, and as the name suggests, you can create a template of how you want the columns to look at.

So, a `fr` or `1fr` is a fraction of the total `width` basically of the container of the grid. And I am telling `repeat(6, 1fr)` that give each item inside the `.grid`, in this case `6`, equal width to each.

The `grid` system won't make any sense if you don't go try it out.

```css
.box {
  height: 90vh;
  width: 100%;
  border: 1px white solid;
}

.box > .overlay {
  display: none;
  height: 90vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
```

Now, each `.box` will have a `height` of `90vh`, _remember the height of the header above_. And then a width of 100%, then a border of white to separate each color from another.

Now, the `.box > .overlay` may seem a bit confusing, but simply it is saying that the `.overlay` that comes right after the `.box` is the one targeted.

Remember the HTML code we have for this:

```html
<div class="box">
  <div class="overlay"></div>
</div>
```

For example, if I had:

```html
<div class="box"></div>
<div class="overlay"></div>
```

Then the `.box > .overlay` would not work in this case, however for our needs it works.

Also, initially I don't want the `.overlay` to show until I hover, so we set it to `display: none`.

```css
.overlay p {
  color: white;
  padding-top: 1rem;
  text-align: center;
}

.box:hover > .overlay {
  display: block;
}
```

Now, when we hover, we want the overlay to show up, so that is why we set it to `display: block`.

And the `overlay` text should be white.

```css
@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .box {
    height: 45vh;
  }
}
```

Now we just define some media queries for devices smaller than `600px` and we just change some heights and the grid.

## Adding JavaScript

So, let's get the elements we would need:

```js
const boxes = document.querySelectorAll('.box');
```

I use the `querySelectorAll()` method so we can get all the `.box` on the page, which returns a HTML collection, which is like an array.

So now we can iterate over `boxes` with:

```js
boxes.forEach((elem) => {
  // write code here
});
```

Now, we have access to each element that has the class of `box`. Now we can could achieve this same thing a bit more differently using actual function expressions, and then we could use the power of the `this` keyword, but that is something for another day.

To test we got all the elements, we can set a style property on each element, such as:

```js
boxes.forEach((elem) => {
  elem.style.backgroundColor = 'red';
});
```

Now if you check, we should see all the elements with a `background` `color` of `red`.

First of all, we don't want each `box` to have the same color, we want different colors, so we use the `RandomColor` function provided by `GLib`.

```js
boxes.forEach((elem) => {
  let color = RandomColor();

  elem.style.backgroundColor = color.hex;
});
```

Simply, I create a variable called `color` and assign it to the `RandomColor` return value.

Now, you may think that each element would have the same color, but remember that the `elem` we get back from the `callback` returns the unique element.

If you go ahead and check, you would find the colors showing up!!!

## Take a Break

Let's take a break. And let me tell you a story.

Once upon a time, there was a developer that wrote code everywhere we could. His walls were covered with code, and so were his clothes. Whenever someone asked for a signature, he wrote his name in complete binary, and when he finished writing his name, the store would have been closed.

Then one day, he decided to write `Google`. He started with `Hello World` then soon after that, he got the following result:

```
Reference Error: `Developer` is not defined
```

He was outrages, and decided to just jump into the jumpy castle and forgot all of it.

_The End_

## Working with the Overlay

Let's now work with the overlay. So right now we just have unique colors, but we need to know the values of each color, so what we can do is create a `paragraph` element, and add the value of the color to it.

```js
let p;

p = document.createElement('p');

p.innerText = color.hex;

elem.children[0].append(p);
```

Now, the `elem` `.box` has children, and one of the children name is `.overlay`. So that is the first children so that is why we get the `first` one, then we append our `p` element to it.

Wooo hooo! Nothing has broken so far, but now it will. Let's add the ability to generate new colors on button click.

## Generate Colors

So, let's add a button to the header.

```html
<header>
  <h1>GLib Color Pallette</h1>
  <button id="generate">Generate!</button>
</header>
```

And get that in our JavaScript.

```js
const button = document.querySelector('#generate');
```

This time we use `querySelector` since I want the first element that it finds, and I know there is only `one` button.

To make our code efficient we will create a function called, `generateColor`, and put our code inside of it.

```js
const generateColor = () => {
  boxes.forEach((elem) => {
    let color = RandomColor();

    elem.style.backgroundColor = color.hex;

    let p;

    p.innerText = color.hex;

    elem.children[0].append(p);
  });
};
```

Now, there is nothing showing on the page, so let's call the function.

```js
generateColor();
```

So, what we want is on every click of the button, I want this function called.

```js
button.addEventListener('click', generateColor);
```

We add an eventListener on the button and listen for a `click` event, then call `generateColor`.

Now, if you test the application, you will find something surprising. The overlay that tells you the color, is appending colors as it goes.

To fix this issue, we check if an `p` element already exists on the children, `if` it does, then we will overwrite the `innerHTML` of that button, `else` we will create a new `p` element.

```js
if (elem.children[0].children.length > 0) {
  p = elem.children[0].children[0];
} else {
  p = document.createElement('p');
}
```

What I am checking that for the children of the `overlay`, I want to check if the length of the children is greater than `0` as `0` means there is one element, which is what we want.

To make this easier to read, we can do this:

```js
let overlay = elem.children[0];

if (overlay.children.length > 0) {
  p = overlay.children[0];
} else {
  p = document.createElement('p');
}
```

Now if we check, we should see the normal behavior we are expecting.

## Conclusion

So this was a very interesting project and a very useful one, but at the end, it is another `sandbox` project.

Here is the final code:

**`index.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./app.css" />
    <title>GLib Color Pallette</title>
  </head>
  <body>
    <header>
      <h1>GLib Color Pallette</h1>
      <button id="generate">Generate!</button>
    </header>
    <div class="grid">
      <div class="box">
        <div class="overlay"></div>
      </div>
      <div class="box">
        <div class="overlay"></div>
      </div>
      <div class="box">
        <div class="overlay"></div>
      </div>
      <div class="box">
        <div class="overlay"></div>
      </div>
      <div class="box">
        <div class="overlay"></div>
      </div>
      <div class="box">
        <div class="overlay"></div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/gh/GladiatorMC/glib/GLib-v1.8.js"></script>
    <script src="./main.js"></script>
  </body>
</html>
```

**`app.css`**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

header {
  height: 10vh;
  width: 100%;
  text-align: center;
  padding: 1.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 100%;
}

.box {
  height: 90vh;
  width: 100%;
  /* background-color: black; */
  border: 1px white solid;
}

.box > .overlay {
  display: none;
  height: 90vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.overlay p {
  color: white;
  padding-top: 1rem;
  text-align: center;
}

.box:hover > .overlay {
  display: block;
}

@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .box {
    height: 45vh;
  }
}
```

**`main.js`**

```js
const boxes = document.querySelectorAll('.box');
const button = document.querySelector('#generate');

const generateColor = () => {
  boxes.forEach((elem) => {
    let color = RandomColor();

    elem.style.backgroundColor = color.hex;

    let p;

    if (elem.children[0].children.length > 0) {
      p = elem.children[0].children[0];
    } else {
      p = document.createElement('p');
    }

    p.innerText = color.hex;

    elem.children[0].append(p);
  });
};

button.addEventListener('click', generateColor);

generateColor();
```

I highly encourage you add onto this and make this into a full fledge application with localStorage. I might add this sometime soon!
