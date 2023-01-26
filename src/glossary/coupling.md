---
title: Coupling
category:
  - Glossary
---

## Introduction

Coupling is the degree to which each module depends on other modules; a measure of how closely connected two modules are. We should strive to minimize coupling.

Coupling is usually contrasted with [cohesion](cohesion.md). Low coupling often correlates with high cohesion and vice versa.


Tightly coupled modules have the following disadvantages:

- Change in one module might break another module.

- Change in one module usually forces a ripple effect of changes in other modules.

- Reusability decreases as dependency over other modules increases.

- Assembly of modules might require more effort and/or time.

Coupling can be reduced by:

- By hiding inner details and interacting through interfaces.

- Avoid interacting with classes that it can avoid directly dealing with.

Components in a loosely coupled system can be replaced with alternative implementations that provide the same services.
