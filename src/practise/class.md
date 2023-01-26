---
title: Classes
category:
  - Practise
---

## Introduction

Classes bind related data and expose functions that operate on that data. This helps make the code more organized.

There are many design principles and patterns that can help make our code better organized. Let's look at some rules which can help us design better classes:

## Organized and Encapsulated

A class should keep all data attributes and utility functions private. Only the functions that are supposed to be exposed should be kept public.

A class should be ordered like this:

- Start with the variables

  - public static constants

  - followed by private static attributes

  - followed by private instance attributes

- followed by public functions

- private utility function just after the public function that calls it

## Should be small and should do Just One Thing

A class should be very small. Different experts have different views on "how small?". Based on most of the views, a class should be small enough that it does just one thing. In general, it should have less than 20 functions.

If a class does more than one thing then it should be broken down into different classes each of which does a single thing.

## Small Number of Instance Variables

A class should have strong [cohesion](/glossary/cohesion.md), i.e., the functions of a class should be strongly related to supporting a single central purpose.

A maximal cohesive class is one in which all functions work with all the instance variables. Achieving that is pretty difficult. We should try to make our classes as cohesive as possible. This can be done by having a smaller number of instance variables such that each function in the class work with as many of the instance variables as possible. This can be done by splitting the class into multiple classes based on the responsibility of each class.

## Hide Implementation Details

Hiding implementation details helps to make changes in a class without making changes in the other one using that class. This can be achieved by creating interfaces and using them instead of the concrete classes.

Encapsulation with proper access management should also be done to expose only the required public functions.

## Minimize Coupling

For info [click here](/glossary/coupling.md).

## Base Class must know Nothing about Derivatives

The base class must know nothing about its derivatives because it promotes loose coupling between classes. This means that changes to a derived class will not affect the base class and vice versa. This makes the code more flexible and easier to maintain, as changes in one part of the code do not propagate and cause unexpected behavior in other parts. Additionally, it allows for more flexibility in how the derived classes can be used, as they are not tightly bound to the base class and can be used in a variety of contexts.

## Use Access Modifier

Variables should be private and manipulated by getters and setters, but remember, there is no necessity to add getters/setters to each variable to expose them as public.