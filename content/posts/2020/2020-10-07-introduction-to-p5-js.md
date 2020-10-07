---
title: Introduction to p5.js
date: 2020-10-07
published: true
cover: ./img/p5-js-series.png
---

Welcome to the offical Nano series on p5.js! In the next few posts, we will be looking at creative coding with a library.

Now, what do I mean by creative coding? Well, maybe you have passion for art, or maybe music composition or building games, then creative coding is for you. While you can creative code on any other programming language, even without p5 on JavaScript but it can get complex and not easy to understand even for intermediate developers.

Also, I am writing these posts as an excuse to learn p5 as well, so that everyone can benefit, even I!

## Pre-Reqs

I highly suggest you know JavaScript, or in general any other programming language as you can catch up on the way.

## Setup

There is not much setup required. There are two ways for us to write p5.

1. The Online editor (https://editor.p5js.org/)
2. Local Enviornment Setup

Either of those methods will allow you to follow along. If you are lazy, then the Online Editor is your best choice.

### Local Enviornment Setup

1. Create a directory and create two files:

   - `index.html`
   - `app.js`

2. Inside `index.html` we need the basic boilerplate for HTML and the CDN for p5. Also need to link our JavaScript file.

**index.html**

```js
<html>
  <head>
    <title>Simple p5 App</title>
  </head>
  <body>
    <main></main>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.1.9/lib/p5.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

3. Test if your JavaScript file works, by adding:

**app.js**

```js
function setup() {
  print('Hello') // print is a function provided by p5 for printing to console
}
```

To run, just open the HTML file in a browser or via `live-server` and you should be good to go.

_If you were confused on the above, I highly suggest you go learn some HTML and JavaScript to really understand what's going on._

## Structure/Plan

Now, while I don't have a clear mindset of what I want to cover, but here are some topics you should expect to see:

- Basics of p5
- Color
- Shapes
- Curves
- Interactivity/Events
- Socket.io w/ Node.js
- p5 and Firebase

I will attempt to come up with some exciting projects and exercises for us to get motivated to learn more!

## Conclusion

Now that our dev enviornment should be setup, it is finally time that we can begin. We are ready for the next lesson!
