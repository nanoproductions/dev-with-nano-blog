---
title: A Look at Rescript
date: 2020-01-03
published: true
cover: ./img/look-rescript.png
---

In this post, we are going to take a look at `Rescript`. `Rescript` is a language that compiles down to JavaScript, basically. You can call it a TypeScript alternative.

Rescript is also:

- Faster than JavaScript
- Gives Tiny JS Output
- Fast Iteration Loop
- Preservation of Code Structure
- and much more...

## Installation

Let's install its compiler on our system so we can also try it out!

```
npm install -g bs-platform
```

Then clone their starter project for us.

```
git clone https://github.com/rescript-lang/rescript-project-template
```

Inside their starter project, run `npm install`, to install your dependencies. Now we can do some fun stuff!

## Run Starter Project

To run the starter project, `npm run build` should do it for us! (For `hot-reloading`, run `npm run start`). Then we can run the project with `node src/Demo.bs.js`.

Inside the `src` directory, a file `Demo.bs.js` contains our compiled code.

As you can see, for us to output something, the `Demo.res` contained:

```js
Js.log('Hello World')
```

## Task: Output our Name

The goal of this quick exercise is to output our name. We will setup a variable with our name and have it outputted.

First, there are some new things compared to JavaScript.

- `const` becomes `let`
- no alternative for `var`

```js
let name = "Nano Adam"

Js.log("My name is " ++ name)
```

Notice how when we are `concatenating` strings, we use a double `++`.

Also, strings always have `double-quotes`.

## Task: Simple `Add` Function

Well, when we are adding numbers, we use a single `+` sign, instead of `++` when adding strings.

To define a function, we use the `let` keyword, and continue with a normal JavaScript arrow function.

```js
let add = (num1, num2) => num1 + num2
```

And we can print the result like this:

```js
Js.log(add(3, 3))
```

## Simple Arrays

Rescript arrays values must all have the same type. For example:

```js
let fruits = ['Oranges', 'Apples', 'Strawberry']
```

However, this won't work.

```js
let fruits = ['Oranges', 1, 'Strawberry']
```

## Type Conversion

Lets say you had to convert from a `int` to a `string`. Well:

```js
Belt.Int.toString(2)
```

## Conclusion

I hope this was a high-level overview of Rescript, and it will bring your interest even further into it.

Overall, my opinion on this is that it is a bit too over-expressive. I feel that even if I get the hang of it, I will be writing too much code, but it does come with some great benefits like the compiler gives great errors and all!

In the meantime, maybe read up on the docs: [Docs Link](https://rescript-lang.org/docs/latest).

Have a great day!!
