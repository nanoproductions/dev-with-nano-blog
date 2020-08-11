---
title: Install Deno on your Machine
date: 2020-08-10
published: true
cover: ./img/install-deno.png
---

Let's learn how to install Deno.

Deno is a secure JavaScript server-side runtime which is written on Rust was released not too long ago.

Now, you could just head over to `deno.land` to read on how to install, or just follow the quick guide below.

## Installation

**Using Shell:**

```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

**Or using PowerShell:**

```
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

**Using Homebrew (macOS or Linux):**

```
brew install deno
```

**Using Chocolatey (Windows):**

```
choco install deno
```

**Cargo**

> Yes, you can use Cargo to install Deno as it is built on Rust.

```
cargo install deno
```

## Usage

Now to test if your installation worked, inside your terminal, just run:

```
deno
```

Then

```js
> console.log(window)
```

Now you should see the `window` object of Deno. If you are confused about the `window` object, be sure to be on the lookout for more posts as you will start to understand it even more soon!
