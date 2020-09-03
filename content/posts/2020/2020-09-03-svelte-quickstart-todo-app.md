---
title: Svelte Quickstart - Todo App
date: 2020-09-03T18:34:14.002Z
published: true
cover: /img/svelte-quickstart.png
---
Welcome to project based introduction to Svelte. I am much as a newbie to Svelte as you probably are, but trying it out really makes you see the benefits of Svelte. 

Svelte is a JavaScript framework/library that is similar to Vue in some sense, but seems very easy. 

## What we are building?
We will be building a todolist type app with jsonplaceholder API. The main purpose of the app is to experiment with some basic svelte features like:
- components
- input binding
- props
- styling
- reactivity 

Here is a quick preview:
![](https://i.imgur.com/eS1rPh4.png)

Alright, lets get started.

## Setup
Inside any place on your dev machine, create a directory called, `svelte-todo-sandbox` or any other name. Then `cd` into it.

Inisde the directory, run:
```sh
npx degit sveltejs/template .
```

Then inside the directory, we want to run:
```
npm install
```

And you should be good to go! 

## Overview of Starter Template
Look inside of `main.js`. 

```js
import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {},
});

export default app;
```

The only different should be that I removed a `prop`. Basically, we import the App component from the directory which provides a constructor and we pass in the target element we want to build our app on.

Quickly look at the public folder with `global.css` we want to replace the css with some very basic reset:
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

Now in `App.svelte`, replace your code with:

```html
<main>
  <h1>Hello World</h1>
</main>
```

Unlike other frameworks, we do not need anything else in our file for it to be considered a component. 

If we wanted to add some style, we would use the `<style>` tags or for JavaScript we will use `<script>` tags. 