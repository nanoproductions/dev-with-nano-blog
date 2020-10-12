---
title: TypeScript - 07 - Objects
date: 2020-07-09
published: false
cover: ./img/ts-part-7.png
course: 'Typescript for Beginners'
---

The last post was pretty long and probably took you and me a long time to work with. It took me a long time to write and took you a long time to read.

In this post we will look at `objects`.

## JavaScript Objects

First, let's look at how a normal Object in JavaScript object normally looks like.

```js
const person = {
  id: 15,
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '1-1-2020',
  isCool: true,
};
```

Now, how can we convert that into TypeScript you may ask.

Well actually, it is pretty simple. Remember how we used tuples, well, it is quite similar to that.

## Objects

So, in a Tuple, it was essentially an array, but here it is an object, so we define it like an object.

```ts
const person: {
  // define types here
} = {
  id: 15,
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '1-1-2020',
  isCool: true,
};
```

Now, how do we define types? Well, just like we define values a bit.

```ts
const person: {
  id: Number;
  firstName: String;
  lastName: String;
  dateOfBirth: String;
  isCool: Boolean;
} = {
  id: 15,
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '1-1-2020',
  isCool: true,
};
```

Notice that we put semicolons `;` instead of commas `,` when we are defining types.

## Practice

Take the following objects and convert them into TypeScript Objects.

**Object #1**

```js
const user = {
  name: 'John Doe',
  phone: '111-111-2222',
  uid: 0001,
  hobbies: ['sports', 'writings'],
};
```

**Object #2**

```js
const actor = {
  name: 'John Doe',
  rating: 5,
  isTop10: true,
  shows: ['Show #1', 'Show #2', 5],
};
```

## Solutions

```ts
const user: { name: String; phone: String; uid: Number; hobbies: [String] } = {
  name: 'John Doe',
  phone: '111-111-2222',
  uid: 0001,
  hobbies: ['sports', 'writings'],
};
```

**Object #2**

```js
const actor: {
  name: String,
  rating: Number,
  isTop10: Boolean,
  shows: [String, String, Number],
} = {
  name: 'John Doe',
  rating: 5,
  isTop10: true,
  shows: ['Show #1', 'Show #2', 5],
};
```

## Conclusion

So this post wasn't really long, but I hope you were able to get the message across of objects in TypeScript!
