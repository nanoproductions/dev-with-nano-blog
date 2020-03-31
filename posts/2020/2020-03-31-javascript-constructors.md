---
title: JavaScript Constructors
date: 2020-03-31T02:46:39.511Z
published: true
---
## A Simple Constructor
Let's look at a very simple JavaScript constructor.
```js
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}
```
So, many questions can come to your mind by looking at the code above. Let's  break it down to simpler portions.

First, I simply declare a simple Function with the name of Student and tell it that it takes in a `name` and a `grade`. 

Inside the function, you notice the `this` keyword. Now, this keyword plays a great role in JavaScript. 
