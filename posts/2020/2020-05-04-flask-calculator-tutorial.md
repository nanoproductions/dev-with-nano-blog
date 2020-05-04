---
title: Flask Calculator Tutorial
date: 2020-05-04T20:43:09.926Z
published: true
---
If you know of my YouTube Channel, **Nano Education**, then you probably know about the video I created that is one of my most popular ones on creating a simple basic Calculator with Flask. 

Now the simple hard truth is, at the time, I wasn't as good with Flask, but now that I am better with Flask, I am gonna retry creating it, and this time, we ain't using a CSS Framework to make my life easier. 

## Environment Setup
To setup our environment, you would need a computer (obviously) with at least Python 3 installed. 

To check if you Python installed, you can run the following command in your terminal:

```
python3 --version
```

Or on Windows:

```
python --version
```

If you get a version number printed, you are fine, otherwise you would need to install Python to begin with.

### What is Up with the `3`? 
So, if you are on Windows, most likely you would have no python installed, so when you install python, it will be your only version of Python.

On Mac, Mac comes with python2 installed, so when we install python3, it would be referred to as python3. 

### Install PipEnv
For those who have used Node.js before, you would know how we run `npm init` to create a package.json and install our project packages in that directory so we can manage them individually per project. Well, Python follows the same route. Instead, we use a package called `Pipenv`. 

So, inside your terminal, we would want to install Pipenv "globally" so the next time we create a Python project, we have the command available to us. 

Inside your terminal, let's run:

```
pip3 install pipenv
```

or on Windows:

```
pip install pipenv
```
Just like Node.js has `npm` or `yarn`, python has a package manager called pip. 

### Directory
Inside your terminal, or file browser, create a directory for where you want to store this project, and open your favorite code editor to the directory you just created. 

For me, I will run the following commands:

```sh
mkdir flask_calculator # making a directory
cd flask_calculator # get into that directory
code . # open Visual Studio code in the current directory
```

### Pipenv Setup
So, inside the directory, run:
```
pipenv shell
```

This would get us into the environment shell. Now everytime you want to work for this project, run `pipenv shell`. 

In the terminal, you would see something like: 

```
(flask_calculator) user@computer$ __
```

Pay attention to the `(flask_calculator)`, if that is present, then that means we are in the `virtual environment`. 

### Install Flask
In your terminal, we simply run: `pipenv install flask`. And that is it! We are now ready to move on to actual coding.

### VsCode Warnings
If VsCode is warning you about formatter and linting, run the following commands: 
```
pipenv install pylint

```
```
pipenv install autopep8

```

## Creating Simple Flask App
Create a file called: `app.py`. 

And let's import Flask and the other packages we need:
```python
# app.py
from flask import Flask, render_template, request
```

Now, we need to declare that the app we are going to write is an app for Flask basically. (in the simplest terms)

```python
app = Flask(__name__)
```

Now, let's create a route for flask as `/` or root, so we can start seeing something working. 
```python
@app.route('/')
def main():
    return '<h1>Hello World</h1>'
```

In the code above, I have used the app variable I created, and using the `route` method, I created the route for the root "/". 

Then, right underneath it, we will define a function with the `def` keyword, and call the function `main()`. Then, the main function simply returns some basic `Hello World` HTML for us to see in the browser. 

To see our code in the browser, let's run:
```sh
flask run --reload
```
**!! Make sure you are always in your virtual environment `pipenv shell`**

So, `flask run` just runs the file and does not allow us to have the ability to see changes in our code `realtime` in the browser. But adding the `--reload` tag, allows us to do so.

Hopefully, when you navigate to the URL, you will see, Hello World. So, let's now render a HTML template to the browser. 

### Render Template

Create a directory called, `templates` and create a file inside `templates` called `app.html`. Once the file is created, we can modify our main function to render the template. 

```python
@app.route('/')
def main():
    return render_template("app.html")
``` 
Remember that we imported render_template from Flask. 

Now, save and go to your browser, and you should see a blank page. Since a blank page is boring, let's add some basic HTML markup. 

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Flask Calculator</title>
  </head>
  <body>
    <h1>Flask Calculator</h1>
    <small>By Nano Adam</small>
  </body>
</html>
```
Since, a Simple Title page is nothing, let's add the form and buttons for the Calculator we are going to be creating. 

Now, while editing HTML, you might have to restart the Flask server in order for the changes to show (For some reason). 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Calculator</title>
    <link
      rel="stylesheet"
      href="{{ url_for('static',filename='css/app.css') }}"
    />
  </head>
  <body>
    <div class="header">
      <h2>Flask Calculator App</h2>
      <small>Nano Adam</small>
    </div>

    <!-- Form -->
    <div class="container">
      <form action="" method="POST">
        <div class="form-group">
          <label for="Number One">First Number</label>
          <input type="text" placeholder="First Number" name="num1" />
        </div>

        <div class="form-group">
          <label for="Number Two">Second Number</label>
          <input type="text" placeholder="Second Number" name="num2" />
        </div>

        <div class="form-group">
          <label for="Operation">Operation</label>
          <select name="operation">
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </div>

        <input type="submit" value="Calculate" id="calc_btn" class="btn" />
        <br />
        <div class="alert">
          This is an alert
        </div>
      </form>
    </div>
  </body>
</html>

```
Now, for the CSS link, we are using the `jinja` template syntax. But before you add css, in your root directory add a directory called: `static` and `css` inside of it. Inside the CSS directory, create a file called: `app.css`. 

So, the `{{ url_for('static',filename='css/app.css') }}` `jinja` syntax makes sense a bit more. We are using the static directory, which has a file called app.css in `css`. 

Inside the `app.css`, insert the following CSS:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: #111;
  color: white;
}

.header {
  text-align: center;
  padding: 1.5rem 0;
  background: rgba(152, 0, 223, 0.527);
}

form {
  margin: 3rem;
  padding: 1rem;
  background: rgba(174, 0, 255, 0.527);
}

.form-group {
  padding: 0.5rem 0;
}

.form-group label {
  display: block;
}

.form-group input {
  width: 100%;
  padding: 0.3rem 0.3rem;
  margin: 0.5rem 0;
}

.form-group select {
  width: 100%;
  border: none;
  margin: 0.2rem 0;
}

.btn {
  display: block;
  padding: 0.5rem;
  margin: 1rem 0;
  background: rgba(57, 2, 83, 0.527);
  color: white;
  border: none;
  width: 100%;
  cursor: pointer;
}

.alert {
  display: block;
  padding: 0.5rem;
  background: rgba(184, 30, 255, 0.527);
  color: white;
  border: none;
  width: 100%;
  text-align: center;
}

```

## Flask Routes for Calculator
I want you to notice inside the HTML file, that each input has a name attribute, and that name attribute is what we are going to use in the flask server, for it to understand what we are talking about. 

So, in the `app.py`, add the following code:
```python
@app.route("/calculate", methods=['POST'])
def calculate():
    return 'Calculate Route'
```
Here, we have declared a `POST` route with the route of `/calculate`. Let us add this to our HTML file so the form understands that we are submitting the form to the calculate route.

So modify the `<form>` tag. 
```html
 <form action="/calculate" method="POST">
```

Now, we can focus on `app.py`. 

Now, when we submit to this route, let us get the form data in our flask app. In the `calculate` function, add the following:

```python
def calculate():
    num1 = request.form['num1']
    num2 = request.form['num2']
    operation = request.form['operation']
```
For this, we just use the request.form method and get the value by the name tags that we had in the HTML. 

So, now it is simple. We just need to check for what operation and do the appropriate for each operation with the two numbers we receive. 

The `render_template` function allows us to send along a `prop` or `value` to the template. For example:

```python
render_template("app.html", name="Nano")
```

Now, we can access the `name` in the template like:
```html
<h1>{{ name }}</h1>
```

Now, let's add the following code of the `calculate()` function. The `app.py` `calculate()` function should look like:

```python
def calculate():
    num1 = request.form['num1']
    num2 = request.form['num2']
    operation = request.form['operation']

    if operation == 'add':
        result = float(num1) + float(num2)
        return render_template('app.html', result=result)

    elif operation == 'subtract':
        result = float(num1) - float(num2)
        return render_template('app.html', result=result)

    elif operation == 'multiply':
        result = float(num1) * float(num2)
        return render_template('app.html', result=result)

    elif operation == 'divide':
        result = float(num1) / float(num2)
        return render_template('app.html', result=result)
    else:
        return render_template('app.html')

```

Now, make sure you are indented correctly. As python relies on indentation compared to curly braces. 

To complete, we just add `{{ result }}` in our template. And let's test the application. Just like:

```
<div class="alert">
    {{ result }}
</div>
```
Now, just test the calculator and indeed it should be working correctly! 

## Conclusion
If you would like to see the complete source code, you can check it out on the github repo: https://github.com/nanoproductions/flask-calculator



