---
title: Open/Closed Principle
icon: stack
category:
  - Principle
---

## Introduction

The open/closed principle is a software design principle that states that a module or class should be open for extension, but closed for modification. This means that the module or class should be designed in such a way that it can be extended to add new functionality without changing its existing code.

The open/closed principle is based on the idea that it is often easier and less risky to add new functionality to a system by extending existing code rather than modifying it. This is because modifying existing code can introduce bugs or other unintended consequences that may not be immediately obvious.

By following the open/closed principle, you can create more modular and maintainable code that is easier to understand, test, and modify. This can help to reduce the complexity of a system and make it more scalable and flexible.

## Example

Here's an example of how the open/closed principle might be applied in a software development project:

Imagine you are building a web application that allows users to create and manage a to-do list. One way to apply the open/closed principle is to design the system in such a way that it can be extended to add new functionality without modifying its existing code.

For example, you might create a base "Task" class that defines the core functionality of a task, such as a task name and completion status. You could then create derived classes that extend the base class to add additional functionality, such as the ability to set a due date for a task or to attach a file or note to a task.

By using inheritance and polymorphism, you can create a system that is open for extension but closed for modification. This means that you can add new functionality to the system by creating new derived classes, without having to modify the existing code in the base class. This can help to make the system more modular and maintainable, and reduce the risk of introducing bugs or other unintended consequences when adding new functionality.
