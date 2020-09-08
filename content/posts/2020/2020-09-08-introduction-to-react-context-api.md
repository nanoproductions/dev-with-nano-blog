---
title: Introduction to React Context API
date: 2020-09-08T16:40:45.445Z
published: true
cover: /img/react-context-api-intro.png
---
In this blog post, we will look at the React Context API and see how it can improve how we manage state in our react applications. 

The React Context API comes with React, so there is literally nothing we have to install. First we will look at how we do things with props passing and all, but then how we can take it out and use it with the Context API.

## Setup

In a directory, we will use the `create-react-app` react app generator to create our React app. Then go ahead and delete the `src` directory so we can start from a fresh state.

```
npx create-react-app books-app
```

Then `cd` into that directory and open your code editor. Go ahead and delete the `src` directory. 

## Re-write `src` directory

We need the following files in the `src` directory:

* index.js
* App.js
* App.css
* Books.js
* AddBook.js

**index.js**

```javascript
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

**App.js**

```javascript
import React from "react";
import "./App.css";

import Books from "./Books";
import AddBook from "./AddBook";

const App = () => {
  return (
    <div>
      <Books />
      <AddBook />
    </div>
  );
};

export default App;
```

**App.css**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  margin: 2rem;
  padding: 1rem;
  border: 2px solid black;
}

```

**Books.js**

```javascript
import React from "react";

const Books = () => {
  return <h1>Books!</h1>;
};

export default Books;
```

**AddBook.js**

```javascript
import React from "react";

const AddBook = () => {
  return <h1>Let's add books</h1>;
};

export default AddBook;
```

If you were to run your app right now, with `npm start` go ahead and do so. 

You will see:

![](https://i.imgur.com/7HdTBYX.png)Now that we can see the components, let's display some books. Each book will have the following fields: title, author and number of pages. 

Basically, both Books and Add Books need access to the `books` state. 

## Books Component
Alright, let's add some code to our books component. First, we need to define our array of books that we will be using, so:

**Books.js**
```javascript
let books = [
  {
    title: "The Apples",
    author: "John Doe",
    pages: "300"
  },
  {
    title: "The Oranges",
    author: "Smith Joe",
    pages: "250"
  }
];
```
Then we need to "loop" over it in our component. I went ahead and added some css classes to make it look better. 

**Books.js**
```javascript
const Books = () => {
  return (
    <div>
      {books.map((book) => (
        <div class="book">
          <p class="book-title">Title: {book.title}</p>
          <p class="book-author">Author: {book.author}</p>
          <p class="book-pages">Pages: {book.pages}</p>
        </div>
      ))}
    </div>
  );
};
```

Here is the CSS:
```css
.book {
  background: blueviolet;
  color: white;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 5px;
}

.book .book-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.book .book-author {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.book .book-pages {
  font-size: 0.8rem;
}

```