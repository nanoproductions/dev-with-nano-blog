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
        <div className="book">
          <p className="book-title">Title: {book.title}</p>
          <p className="book-author">Author: {book.author}</p>
          <p className="book-pages">Pages: {book.pages}</p>
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

Now, that we can see the books, let's attempt to add a book. 

## Add Books
We are going to notice an issue arrise very quickly. Our `AddBooks` component does not have access to the `books`. One solution is to pass our `books` array down to props from the `App` component. Let's do that.

### Refactor Books
First, we take the books array and move it to our `App` component then pass it down via props to our `Books` component. 

**App.js**
```javascript
import React from "react";
import "./App.css";

import Books from "./Books";
import AddBook from "./AddBook";

const App = () => {
  let [books, setBooks] = useState([
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
  ]);
  return (
    <div>
      <Books books={books} />
      <AddBook />
    </div>
  );
};

export default App;
```

**Books.js**
```javascript
import React from "react";

const Books = (props) => {
  let { books } = props;

  return (
    <div>
      {books.map((book) => (
        <div className="book">
          <p className="book-title">Title: {book.title}</p>
          <p className="book-author">Author: {book.author}</p>
          <p className="book-pages">Pages: {book.pages}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;
```

All we are doing is `destructuring` the `books` from the props in our component. Our app should still run normally. 

![](https://i.imgur.com/JQ2P5X0.png)

### Do `AddBook` component
Let's add some markup and functionality to the `AddBook` component. 

**AddBook.js**
```javascript
const AddBook = () => {
  return (
    <div>
      <h3 className="addBook-heading">Add Book...</h3>

      <div className="form-control">
        <label>Book Title</label>
        <input placeholder="Book Title" />
      </div>
      <div className="form-control">
        <label>Book Author</label>
        <input placeholder="Book Author" />
      </div>
      <div className="form-control">
        <label># of Pages</label>
        <input placeholder="# of Pages" />
      </div>
      <button>Add Book</button>
    </div>
  );
};
```

There is no functionality in the component yet, which we will add after the css. 

```css
.addBook-heading {
  text-align: center;
  margin: 1rem 0;
}

.form-control {
  margin: 1.3rem 0;
}

.form-control label {
  display: block;
  margin-bottom: 0.2rem;
}

.form-control input {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  border: 1px solid #ccc;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background: blueviolet;
  color: white;
  border-radius: 5px;
}
```

Now, in our `App` component, put the `AddBook` component before the `Books` component. So our app should look like:

![](https://i.imgur.com/gLwge8H.png)

### Add Functionality to Component
We will be using the `useState()` React hook to manage our component level state. 

So go ahead and import `useState` from React, with the same import statement you used for React.
```js
import React, {useState} from 'react';
```

```js
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  return (
    <div>
      <h3 className="addBook-heading">Add Book...</h3>

      <div className="form-control">
        <label>Book Title</label>
        <input
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="form-control">
        <label>Book Author</label>
        <input
          placeholder="Book Author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
      </div>
      <div className="form-control">
        <label># of Pages</label>
        <input
          placeholder="# of Pages"
          onChange={(e) => setPages(e.target.value)}
          value={pages}
        />
      </div>
      <button>Add Book</button>
    </div>
  );
};
``` 

Let's create a function in our `App` component that takes these three fields and pushes them onto the array. 

**App.js**
```js
const App = () => {
  ...
  const addBook = (title, author, pages) => {
    setBooks([...books, {title, author, pages}])
  };
  return (
    <div>
      <AddBook addBook={addBook} />
      <Books books={books} />
    </div>
  );
};
```

We can access this function in `AddBook` via props. 

So when we use `setBooks()` via the React hook, it basically reassigns the value, so we use the spread operator to spread the previous data across, and just add another object inside of that array.

**AddBook.js**
```js
<button onClick={() => props.addBook(title, author, pages)}>
    Add Book
</button>
```

Now if we click on the button, a book should be added to our list! 

So we have successfully implemented the app to the functionality we needed it. 

Next we will move on to the React Context API. 

## Begin React Context API

