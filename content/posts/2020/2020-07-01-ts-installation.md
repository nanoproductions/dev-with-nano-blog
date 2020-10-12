---
title: TypeScript - 02 - Installation
date: 2020-07-01
published: true
cover: ./img/ts-part-2.png
course: 'Typescript for Beginners'
---

In the previous tutorial we went over a quick introduction to TypeScript and a quick benefit of TypeScript.

In this tutorial, I will show you how we can install TypeScript to our system and use the `tsc` tool to compile TypeScript to JavaScript.

### Check if you have Node

To install, make sure you have Node on your system. You can check with:

```
node --version
```

If you get a `version number` printed, you are good to go. Otherwise, head over to: https://nodejs.org/en/ and install `Node.js` on your system.

### Use `NPM` or `YARN` to install

Now in your terminal, let's install TypeScript.

#### `NPM`

If you use `NPM`, run:

```sh
npm install -g typescript
```

If you are on Mac or Linux and receive a permission error, then run:

```
sudo npm install -g typescript
```

#### `YARN`

If you use `YARN`, run:

```sh
yarn global add typescript
```

And if you get the permission error on Mac or Linux, then run:

```
sudo yarn global add typescript
```

### Test our Install

In a test directory or somewhere, create a file called `main.ts` or you can call it anything you like, just keep the `ts` extension.

Inside of that file, put the following code:

```ts
let person: string = 'John Doe'
console.log(person)
```

Basically, we declare a variable called `person` with a type of `string` and initialize with `John Doe`.

In your terminal, let's run:

```
tsc main.ts
```

And in the same directory you should get a new file called `main.js`.

### Conclusion

I hope that you were able to get `typescript` running and I can't wait to educate you more about `typescript`.

In the next tutorial, we will focus on learning how we can assign types to variables and more.
