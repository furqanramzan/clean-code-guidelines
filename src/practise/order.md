---
title: Order Functions Logically
icon: share
category:
  - Practise
---

## Introduction

There are a few ways you can order your functions and classes but there should be some logical order to them in your source files. You may have a series of helper functions. It often makes sense to group these at the bottom of your file. You should then try and order the rest of your functions in roughly chronological order. eg. if you have a `main` function that is called first then this should be the first function at the top of the page. If it calls a function to display a `startScreen` then that function should be next, etc.

Doing this makes it easier to read through and follow your code. When trying to follow through and understand some processing you shouldn't need to constantly be scrolling up and down in the file trying to find the next function which is referred to.

You won't be able to get a perfect chronological order as no doubt there will be functions called from multiple places but you should try and achieve this as much as possible.