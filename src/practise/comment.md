---
title: Comments
category:
  - Practise
---

## Introduction

::: tip

Anyone can write code that computers can understand. Only a good programmer can write code that humans can understand.

:::

Comments can be very helpful in making code easier to understand. However, it is important to use comments wisely and judiciously, as overuse of comments can make code difficult to read and can even hinder understanding.

Here are a few reasons why it is important to use comments wisely:

- Too many comments can make code hard to read. If there are too many comments in a block of code, it can be difficult to focus on the code itself.

- Outdated or incorrect comments can be misleading. If comments are not kept up to date with the code, they can provide incorrect information and lead to confusion.

::: tip

Don't comment bad code, rewrite it. **Brian W. Kernighan and P. J. Plaugher**

:::

## Self-Explanatory Code

::: tip

Code never lies, comments sometimes do.

:::

Comments should be good, but your code needs to be self-explanatory. Using self-explanatory code means writing code that is clear and easy to understand without the need for additional comments. This can make the code easier to read and maintain, and can help to prevent errors caused by outdated or incorrect comments.

There are a few strategies for writing self-explanatory code:

- Choose descriptive and meaningful names for variables and functions. This can help to make it clear what the code is doing and what each piece of data represents.

- Use clear and consistent formatting. This can make it easier to scan the code and understand its structure.

- Break up code into smaller functions with descriptive names. This can make it easier to understand the purpose of each function and how they fit together.

- Avoid using [magic numbers](/practise/magic.md). Instead, use named constants to make it clear what each number represents.

## Example

Here is an example of code that could be improved by using self-explanatory techniques:

### Bad Practise

::: danger

```js
function calculateArea(w, h) {
  // calculate the area of a rectangle
  return w * h;
}
```

:::

In this example, the function calculate_area calculates the area of a rectangle, but this is not immediately clear from the code. The comment provides some context, but it would be better to use more descriptive names and self-explanatory code to make the purpose of the function clear.

Here is the same code with self-explanatory techniques applied:

### Good Practise

::: tip

```js
function calculateRectangleArea(width, height) {
  return width * height;
}
```

:::

In this revised version, the function name calculate_rectangle_area indicates the purpose of the function, and the variables width and height are more descriptive than the single letters w and h. As a result, the code is easier to understand without the need for additional comments.
