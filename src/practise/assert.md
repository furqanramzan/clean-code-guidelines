---
title: One Assert Per Test
category:
  - Practise
---

## Introduction

The principle of "one assert per test" refers to the practice of including only one assertion or check in each test case. This means that each test case should test a single, specific aspect of the system or software being tested, and should include only one call to an assert function or method that checks whether the expected outcome has been achieved.

This practice has several benefits:

- It makes it easy to identify the source of a failure when a test case fails, as the failure will be caused by a single assertion that failed.
- It makes it easy to understand the purpose of a test case, as the single assertion clearly states what the test case is checking for.
- It makes it easy to write test cases that are highly focused and specific, as each test case only needs to check for one thing.
- It makes it easy to write test cases that are easy to read and understand, as each test case only needs to check for one thing.

It's important to note that there are some cases when it's appropriate to include multiple assertions in a test case, such as when the multiple assertions are closely related and testing the same feature, or when testing the same feature with different inputs. However, in general, it's considered best practice to have one assert per test.