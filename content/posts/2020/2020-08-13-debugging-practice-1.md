---
title: 01 - Let's Debug
date: 2020-08-13
published: true
cover: ./img/debug-1.png
---

Welcome to Debugging! This series is aimed at for us to start understanding errors that we see in our normal projects, but really don't learn from.

So, look at the code below. What is wrong with it?

```js
class Users {
  constructor() {
    this.users = []
  }

  getUsers() {
    return {
      msg: 'Users retrieved successfully',
      data: users,
    }
  }

  addUser({ name, email }) {
    users.push({ name, email })
    return {
      msg: `User ${name} has been added`,
      data: {
        name,
        email,
      },
    }
  }
}

const users = new Users()

const { msg } = users.addUser({ name: 'Nano', email: 'test' })

console.log(msg)

const { data } = users.getUsers()

console.log(data)
```

Now, instead of us looking at the error, see if you can spot any issue with the code.

## Error

Well, do not read beyond if you are still looking, otherwise read ahead.

Here is the error message:

```yaml
TypeError: users.push is not a function
  at Users.addUser (/debugging-series/main.js:14:11)
  at Object.<anonymous> (/debugging-series/main.js:27:23)
```

## Solution

**WARNING** The solution is right below this!

Alright, so let's look at the solution.

Well, inside the `constructor()` of our `Users` class, we define the `users` array as: `this.users = []`. We bind the array to the `this`.

Now, when we access it anywhere, we need to get it from the `this` bindings.

The solution would be to fix the methods we wrote:

```js
getUsers() {
    return {
      msg: "Users retrieved successfully",
      data: this.users,
    };
  }

  addUser({ name, email }) {
    this.users.push({ name, email });
    return {
      msg: `User ${name} has been added`,
      data: {
        name,
        email,
      },
    };
  }
```

See! Simple solution.

## Conclusion

This post might have been a bit small, but in the future we will start to have harder debugging problems. And remember, I gotta go in and mess the code up so it stops working so we can create these amazing posts!
