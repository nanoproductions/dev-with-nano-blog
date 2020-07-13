---
title: Introduction to OS Dev
date: 2020-07-13
published: true
cover: ./img/os-dev-intro.png
---

Welcome to the OS Development Series. The title might be a bit of a letdown, but don't worry, this series will be going far unlike my in progress TypeScript series of posts.

So, if you worked with more than a couple of Operating Systems, you might have been inspired to create your own operating system, and well, let me explain something you probably did.

## What you did to create an OS?

First thing you probably went to YouTube and started looking for tutorials, and to your surprise you found a complete 3 year old tutorial, and some basic simple videos. Then the full tutorial you found even was over 20 hours and you started looking for something else.

Let me tell you the truth, creating an operating system is not an easy task, and is a pretty lengthy one. Creating your own Operating System requires many hours/days of research, and requires much knowledge of low level concepts before starting.

Unlike web development, where you might learn HTML, then learn CSS eventually, or like JavaScript where you will learn the intermediate concepts eventually, Operating System development requires use of advanced knowledge at the first line.

## Why should I not follow a tutorial?

Well, there might be many tutorials, but unlike web development where you might follow a tutorial then create 2 other sites to sandbox with, an Operating System requires a strong base which can take many hours or even days to fully understand.

Look at the following code:

```s
mov ah, 0x0e

mov al, "1"
int 0x10
mov al, the_secret
int 0x10

mov al, "2"
int 0x10
mov al, [the_secret]
int 0x10

```

_Credit: https://github.com/cfenollosa/os-tutorial/blob/master/03-bootsector-memory/boot_sect_memory.asm_

Well, if you looked at and your mind got twisted, then you probably need to do much more research.

## What am I gonna do?

Well, reading documentation and breaking things down is definitely a skill that you can improve on, but sometimes being a pro at reading documentation doesn't mean that you fully understand what's going on.

So, I am going to go through over hundreds of resources, understand the concept, then write a post about it. It might take a while for even 10 posts to be completed, but soon this series of posts will be like a complete guide to writing an operating system.

## How is this going to be structured?

For almost the majority of posts, we will not be working towards an operating system, instead work towards understand an operating system and its fundamentals. We might create some mini sandbox type projects to understand concepts, but eventually we will have created enough code where you could write your own kernel and move forward.

If you know the fundamentals and how everything works, then creating your own Operating System will seem a bit easier.

## Serenity OS

On YouTube, search for Andreas Kling. He is a person who is working on an operating system called Serenity OS. I suggest you look at one of his coding sessions, and blow yourself away by how challenging it could be.

But don't give up by seeing how long it takes, but instead see how much knowledge you would be able to gain.

## How to benefit from these posts?

I suggest you take notes in a notebook. But do not copy what I write. Instead write it how you would understand. If you don't understand a concept, Google the key terms, then write it down when you understand.

I will be trying my best to keep the content as easy to understand as possible in much detail.

## What potential topics?

I don't currently have a full plan but here are some of the topics I be looking into:

- Memory
- CPU
- CPU Instructions
- OS Structure
- SDL2
- Assembly
- C++
- Rust

## Resources

So, to make your life also easy, I will try my best to put all the links to the resources I used to write a specific post.
