---
title: FIRST Principles Of Testing
icon: edit
category:
  - Principle
---

## Introduction

FIRST is an acronym that stands for four principles of automated testing:

- **Fast**: Automated tests should be fast to execute so that developers can run them frequently without disrupting their workflow.

- **Independent**: Automated tests should be independent of one another so that a failure in one test does not cause a cascading failure in other tests.

- **Repeatable**: Automated tests should be repeatable and produce the same results every time they are run, regardless of the environment or external factors.

- **Self-validating**: Automated tests should be self-validating, meaning that they should have a clear pass/fail outcome that can be easily determined.

- **Timely**: Tests are written at the right time, immediately before the code that makes the tests pass. While it seems reasonable to take a more existential stance, that it does not matter when they're written as long as they are written, but this is wrong. Writing the test first makes a difference.