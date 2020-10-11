---
title: Vue 3 Released!
date: 2020-09-30
published: true
cover: ./img/vue-3-release.png
tags: ['vue', 'javascript']
---

> Vue 3 has been released! Check it out: v3.vuejs.org!

In this post, I just want to give an overview of Vue 3 in general of some of the `basic` changes in Vue 3. Alright let's begin.

## Setup

To begin our journey of changes, we need to setup our enviornment. We will be using the CLI to generate our project, so.

**Install CLI**

```bash
npm install -g @vue/cli
# or
yarn global add @vue/cli
```

**Create new Project**
To create a new project:

```
vue create project-name
```

Or to create in same directory:

```
vue create .
```

It will ask you if you want to create in same directory, choose accordingly.

Then will ask you about what preset to choose. We want to choose the `Vue 3 Preview` preset so we can use Vue 3's latest features in our project.

![](https://i.imgur.com/aHzzy0J.png)

Then it will begin initializing our project by installing the plugins and packages needed for us to need to start developing a cool app!

## Basic Counter

Let's begin our journey with a basic counter application with Vue 3.

So go into `src/App.vue` and replace all the code with this basic code:

```html
<template>
  <h1>Hello World</h1>
</template>

<script>
  export default {}
</script>
```

### Run our App

```bash
npm run serve
# or
yarn serve
```

This should display a wonderful `Hello World` on our browser screen.

### Basic Counter

To build our basic counter, we need to store the current value of our count.

With Vue 3's Composition API, we can create a reactive value using a `ref` hook.

With Vue 3 we get a `setup()` function exposed to us which enables us to use these hooks inside of it.

The `setup()` function is basically a function that runs before our component is created, and is the entry point when using the `Composition API`.

Anything we return in `setup()` will be available to the template.

Let's see `ref()` and `setup()` in action.

```html
<template>
  <h1>Hello, {{ name }}</h1>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const name = ref('Nano')

      return { name }
    },
  }
</script>
```

In this code sample I am:

- Define a template with a variable of `name` that is to be dynamically rendered
- In the script we import `ref` from Vue, then we just give our `ref` a name and set an initial value of `nano` to it.
- Anything we return inside of `setup()` is available to the template. So we return the `name`
- When we return it, we just access it in the template `{{ name }}`

For the counter, we need one reactive value `counter` which has an initial value of 0.

```js
const counter = ref(0)
```

Copy the basic template and styles over for the app, so you can also follow along.

```html
<template>
  <main>
    <h2>Vue Counter</h2>
    <p>Value: 0</p>
    <button class="dec">-</button>
    <button class="inc">+</button>
  </main>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    font-size: 2rem;
  }

  main {
    background: rgb(0, 94, 128);
    color: white;
    padding: 1rem;
    margin: 1rem auto;
    width: 500px;
    text-align: center;
  }

  main p {
    font-size: 1rem;
  }

  button {
    display: inline-block;
    padding: 0.3rem 1rem;
    border: none;
    margin: 0.5rem;
    background: white;
  }
</style>
```

The counter should now look a lot better.
![](https://i.imgur.com/A1KPyJr.png)

We can use the dynamic value of our `counter` in the template. Just make sure to return it.

```html
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const counter = ref(0)

      return { counter }
    },
  }
</script>
```

Then in the template we can:

```html
<p>Value: {{ counter }}</p>
```

#### Increase and Decrease

What we want is when we press a button, we want to increase or decrease the value depending on the button we press.

For this we can create two functions

```html
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const counter = ref(0)

      const increase = () => counter.value++
      const decrease = () => counter.value--

      return { counter, increase, decrease }
    },
  }
</script>
```

We are using ES6 arrow functions which allow us to do like one line functions which look efficient.

### Let's Run It

Now if you were to run your counter, it will add and subtract the value accordingly.

## Conclusion

I hope you enjoyed this miny blog post about the Vue 3 Composition API. Now, this was a very un-useful example, but it shows kinda the power of the Composition API.

I will be having more recipies of Vue 3 coming out very soon. And some cool projects.

## Practice

You can expand on this project the following:

- Add `localstorage` so the counter value remains even when page is reloaded.
- Add firebase integration

Anyway, have a great day!
