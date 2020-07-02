---
title: TypeScript - 03 - Installation
date: 2020-07-02
published: true
cover: ./img/ts-part-3.png
---

In the precious article we went over installing the `tsc` tool on our system. For that tool to be worth anything let's learn some TypeScript.

Remember, if you need to run any of the TypeScript code, you can with:

```
tsc file_name.ts
```

## Basic Types

JavaScript has many different data types but we never have to declare them so we don't know when we are using what type or what.

In a plain JavaScript file, let's look at how we can identify types in JavaScript.

```js
let personName = 'Nano'

console.log(typeof personName)
```

The `typeof` will give us the `type` of the variable `personName`.

Now, `typeof` could help us in a normal JavaScript program if we did not have TypeScript, but it would make our program very messy.

In the first post, we had this example:

```js
function add(num1, num2) {
  return num1 + num2
}
// Simulating an error where we put our `Numbers` in a string.
let numbers = ['2', '3']
console.log(add(numbers[0], numbers[1]))
// Result = 23
```

The issue in this code was that the numbers we were passing into the function were `strings` and not actually `numbers`. Which resulted in concatenation of strings.

This could be prevented with TypeScript, but let's look at how we can do this with simple `if` statements. As you study the code, try to see why `if` statements are not the best route.

```js
function add(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    console.log('Please supply numbers to this function')
  }
  return num1 + num2
}
// Simulating an error where we put our `Numbers` in a string.
let numbers = ['2', '3']
console.log(add(numbers[0], numbers[1]))
```

**Result**

```
Please supply numbers to this function
```

The issue with this method is clear, it is alot of repatative code. Now let's say this function took 10 arguements, that means we have to run about 10 `if` statements to get the function ready for production.

Also, each line of code is adding bytes to our program which would make it heavier.

### Strings

```js
let personName = 'Nano'
console.log(typeof personName)

// Result = string
```

### Numbers

```js
let age = 50
console.log(typeof age)

// Result = Number
```

The code examples above are just for you to gain some practice working with `typeof`. Now, how would we write these types in TypeScript. Well, very simple.

```ts
let personName: string = 'Nano'
```

```ts
let age: number = 50
```

Simple. Isn't it.

## Practice

Create three variables with the following attributes:

- A variable with a name of `isCool` and setting it to a type with a value.
- A variable that is declared with the type of `string`
- A variable with any name but with a type of `number` and any value.

## Solution

Hopefully, you completed the practice, let's see if you were right. I have posted examples as answers, but if your answer was within in range, you are right!

**Task: A variable with a name of `isCool` and setting it to a type with a value.**

```ts
let isCool: boolean = true
```

**Task: A variable that is declared with the type of `string`**

```ts
let personName: string
```

**Task: A variable with any name but with a type of `number` and any value.**

```ts
let NumberOfPets: number = 12
```

## Conclusion

In this article, you have learned how we type assignment is helpful in TypeScript and how we can use type assignment in TypeScript.
