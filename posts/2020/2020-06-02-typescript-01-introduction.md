---
title: TypeScript - 01 - Introduction
date: 2020-06-02T01:51:20.818Z
published: true
---
## Welcome to Typescript
I am so glad that you decided to click on this post to learn about TypeScript. It is an honor to learn typescript. 

Anyway, in this blog series of tutorials I will teach you mostly everything you need to know to become a professional at typescript.

### What is TypeScript?
Typescript is a way of writing JavaScript with a type based system. In most programming languages, such as: C, C++, C#, Go, Rust and more, they implement a type-based system. Basically, where everything you write, you define a type for it, to ensure that you are not changing variables types along the way of the program.

Typescript makes your projects more robust since you have type definitions for almost every line that you write. 

Now, enough with explanations, let's look at a quick example of TypeScript vs JavaScript. 

#### JavaScript
```js
function add(num1, num2) {
  return num1 + num2;
}

// Simulating an error where we put our `Numbers` in a string.
let numbers = ['2', '3'];

console.log(add(numbers[0], numbers[2]));

// Result = 23
```

So, in this case, JavaScript does not give us a way to say that  the `two` numbers entered should be number types. 

We could run some type checking inside the function with `if` statements, but that would be a whole lot of code to write for such a simple function. 

Luckily, TypeScript can fix that for us. 

#### TypeScript
```js
function add(num1: number, num2: number) {
  return num1 + num2;
}

// Simulating an error where we put our `Numbers` in a string.
let numbers = ['2', '3'];

console.log(add(numbers[0], numbers[2]));

// Result = TypeScript would fail to compile this file, since the two numbers we passed are not numbers, instead they are strings. 
```

### What does TypeScript do?
Simple. TypeScript compiles our TypeScript file to plain JavaScript. 

### Conclusion
I hope you are excited for TypeScript as I am very excited to write these series of tutorials. 

In the next tutorial, we will learn how to install TypeScript on our system, which comes with a command-line tool that will allow us to compile TypeScript to JavaScript! 
