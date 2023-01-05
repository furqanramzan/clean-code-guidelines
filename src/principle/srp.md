---
title: Single Responsibility
icon: result
category:
  - Principle
---

## Introduction

The Single Responsibility Principle is a software design principle that states that every module or class in a computer program should have a single, well-defined responsibility. In other words, a class or module should have only one reason to change.

The single responsibility principle is based on the idea that a class or module that has more than one responsibility is more complex and harder to maintain than a class or module with a single responsibility. This is because changes to one responsibility may have unintended consequences on the other responsibilities, leading to a ripple effect that can make the system more difficult to understand and modify.

By following the single responsibility principle, you can create more modular and maintainable code that is easier to understand, test, and modify. This can help to reduce the complexity of a system and make it more scalable and flexible.

## Example

Here's an example of how the single responsibility principle might be applied in a software development project:

Imagine you are building a web application that allows users to create and manage a to-do list. One way to apply the single responsibility principle is to create a separate class or module for each responsibility of the system. For example, you might create the following classes:

- Task class: This class is responsible for storing and managing information about individual tasks, such as the task name, description, and completion status.

- ToDoList class: This class is responsible for storing and managing a list of tasks, as well as providing methods for adding and removing tasks, marking tasks as complete, and so on.

- User class: This class is responsible for storing and managing information about users, such as their name, email address, and password.

By dividing the system into these classes, each with a single, well-defined responsibility, you can create more modular and maintainable code that is easier to understand, test, and modify. For example, if you need to change the way tasks are stored and managed, you can do so without having to worry about how it will affect the user class, and vice versa. This can help to reduce the complexity of the system and make it more scalable and flexible.
