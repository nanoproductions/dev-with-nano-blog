---
title: Learn Rust | Hello World
date: 2020-01-16
published: true
topic: Rust
---

Rust is a programming language that I wanted to tackle learning for so long. So instead of just learning it myself, I decided to learn it with the community. I don’t know how long these tutorials might last, but they will last for sometime.

## What is Rust?

Rust is a programming language that helps you write faster, more reliable software. You can build many things with Rust. One of the things that really stood out to me was Redox. An OS built with Rust.

There are many guides out there that teach you on how to create an OS with rust, however, I will focus on the basics of the language first.

## The Documentation

This tutorial is based off the documentation and my experience while writing the code. However, the documentation for Rust is very incredible and easy to understand as it is laid out just like a normal tutorial.

## Installation

To install Rust, head over to https://www.rust-lang.org/. And click Get Started. Then follow the instructions on how to install it to your system.

If you are on Mac or Linux, the process is as simple as copying and pasting a command to the terminal. But on Windows, you will have to install it like a program.

## Creating a Project

To begin with, it is suggested to use the Cargo command to create a project, however we can start with just creating a file in a directory.

I called my file: `main.rs`

Inside the file, we want to define a main function with the fn keyword. Then like any other language, we can give the function a name and then open a set of curly braces to write our code.

So, the code so far should look like:

```rust
fn main() {

}
```

Now, the reason I called my function main is because this is basically the entry point to our application. And since the file is called main.rs. It makes most sense for it to be called `main()`

So, how to we print something to the console? To print something to the console, we can use the println!() function. Inside the main() we are going to write the following:

```rs
fn main() {
    println!("Hello World");
}
```

In Rust, semicolons `;` are a must. It is very important that you put semicolons, for that reason, we must get in the habit of putting them.

## Running Our Program

To run the code we just wrote, we can use a terminal command that came included with the Rust package you installed. The command is called: rustc. It takes arguments and one of them is the file name.

So, in your terminal you would run:

```bash
rustc main.rs
```

If nothing shows up in the terminal and it just ends, that means everything is good. Inside the directory, you will find a file called: main.

To run the file on Mac or Linux, run: ./main. On Windows, you would run: `./main.exe`.

Hopefully in the terminal, you should get the words, `Hello World` written.

## Review

Congratulations. You have written and compiled your first rust program. Now, what is the next step you might think.

In the next tutorial, we will look at using the cargo command to create projects setup for us and how we can run our code for development even faster.

Also, we will start looking at the compiler and how it helps us write Rust code after we make a mistake.
