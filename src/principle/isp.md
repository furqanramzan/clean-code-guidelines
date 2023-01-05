---
title: Interface Segregation
icon: storage
category:
  - Principle
---

## Introduction

The Interface Segregation Principle is similar to the single responsibility principle. It states that "do not force any client to implement an interface which is irrelevant to them". Here your main goal is to focus on avoiding fat interfaces and give preference to many small client-specific interfaces. You should prefer many client interfaces rather than one general interface and each interface should have a specific responsibility.

Suppose you enter a restaurant and you are a pure vegetarian. The waiter in that restaurant gave you the menu card which includes vegetarian items, non-vegetarian items, drinks, and sweets. In this case, as a customer, you should have a menu card that includes only vegetarian items, not everything which you don’t eat in your food. Here the menu should be different for different types of customers. The common or general menu card for everyone can be divided into multiple cards instead of just one. Using this principle helps in reducing the side effects and frequency of required changes.

## Example

Here is an example of the Interface Segregation Principle:

Consider the requirements of an application that builds different types of vehicles. Each vehicle will have a price and color. Vehicles such as cars can start and stop moving while some vehicles such as airplanes can both move and fly.

A class that represents an airplane can implement the Vehicle interface and provide implementations of all the interface methods. But, imagine a class that represents a car. Car needs to provide an implementation fly method, even though it does not require them. This is a violation of the Interface Segregation Principle. These might affect code readability.

Segregate the Vehicle interface into multiple roles interfaces each for specific behavior. In this case, the vehicle interface can be broken down into three interfaces: Vehicle, Movable, and Flyable.

Now Vehicle interfaces with the price and color methods, all Vehicle implementation classes can implement this interface. Then, Movable and Flyable interfaces represent moving and flying behaviors in vehicles and this help to remove unnecessary code and is more readable.
