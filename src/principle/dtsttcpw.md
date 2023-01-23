---
title: Simplest Thing Possibly Work
icon: edit
category:
  - Principle
---

## Introduction

"Do The Simplest Thing That Could Possibly Work" (DTSTTCPW) is a principle that suggests that when designing a solution to a problem, one should start with the simplest possible solution that meets the requirements, and then only add complexity if necessary. The idea is that simple solutions are typically easier to understand, implement, and maintain than complex ones and that additional complexity should only be added as needed to solve the problem at hand.

First, implement a new capability in the simplest way you can think of that "could possibly work". Don't build a lot of amazing superstructures, don't do anything fancy, just put it in. Use an if statement, even. Make the code pass the UnitTests for the new feature (and all features, as always).

Second, and this is critical to the rule, refactor the system to be the simplest possible code including all the features it now has. Follow the other code quality rules to make the system as clean as it can be.

We're not looking for the quickest way, we're looking for the simplest result. So, we first break the existing method into pieces. That leaves the existing test cases running. Then we modify (simply, now) one of the little methods to handle the next test case.

Simplest does, however, mean a minimal solution. Don't build a giant super-efficient object, sorted and hashed and linked together, if an Array will do the job.

## Example

An example of the "Do The Simplest Thing That Could Possibly Work" (DTSTTCPW) principle in action might be a task to create a system to track inventory levels for a retail store.

The simplest solution would be to create a spreadsheet with columns for the product name, current stock level, and a running total of stock in and stock out. This solution meets the requirement of being able to track inventory levels, it is easy to understand and maintain, and it can be done with minimal effort.

If the store grows and the inventory becomes too large to manage through a spreadsheet, you can then add more complexity by creating a database to store the information and a web interface for employees to update and access the inventory levels.

Another example could be a task to create a function that takes an input and return it in reverse order. A simple solution for this could be to iterate over the input string and add each character to a new string in reverse order. This solution meets the requirement and is easy to understand and implement, and it can be done with minimal effort. If performance is an issue, then we can explore more complex solutions like using pointers, but only when it's necessary.

In both of these examples, the principle of DTSTTCPW is followed by starting with the simplest solution possible that meets the requirements, and only adding complexity as needed.
