---
title: Composition
category:
  - Design Pattern
---

## Introduction

In object-oriented programming, the composition is a design pattern in which a class is composed of other classes, rather than inheriting from them. This allows for more flexibility and reusability of code, as well as a clearer and more modular design.

Composition is a way of building complex objects by combining simpler ones. A class can have an instance of another class as an attribute, this other class becomes a component of the first class. This component class can be a simple object or another class that uses composition itself.

The main advantage of composition over inheritance is that it allows for greater flexibility and code reuse, as a class can be composed of multiple other classes, rather than being limited to inheriting from a single parent class. Additionally, composition allows for a more "has-a" relationship between classes, whereas inheritance is often thought of as an "is-a" relationship.

It's a powerful pattern that allows for a more modular, flexible, and extensible design of a program.

::: tip

Always prefer composition over inheritance.

:::

## Example

For example, consider a class "Car" that has the attribute "engine". The engine is an instance of another class "Engine". Instead of inheriting from Engine, Car is composed of an Engine. This means that the Car class can use all the methods and properties of the Engine class, but it doesn't inherit the properties or methods of the Engine class.

The composition also provides a way to achieve polymorphism, for example, a class "vehicle" that takes a component "engine" and runs it, the engine can be a "petrolEngine" or an "electricEngine" class, and both classes can implement a common interface "Engine" and the "vehicle" class doesn't need to know the details of the implementation only the interface.
