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
```
flask run --reload
```
**!! Make sure you are always in your virtual environment `pipenv shell`**

So, `flask run` just runs the file and does not allow us to have the ability to see changes in our code `realtime` in the browser. But adding the `--reload` tag, allows us to do so.

Hopefully, when you navigate to the URL, you will see, Hello World. So, let's now render a HTML template to the browser. 

Create a directory called, `templates` and create a file called `app.html`
