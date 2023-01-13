---
title: Code Nesting
icon: align
category:
  - Practise
---

## Introduction

Nesting in code refers to the practice of placing one block of code inside another block of code. This can be used to structure and organize code in a logical and readable manner. For example, a function might contain a nested if statement.

::: info Example of two-level nested function

```js
function example(x) {
  if (x > 0) {
    console.log("x is positive");
  } else {
    console.log("x is not positive");
  }
}
```

:::

::: tip

Always make the function maximum three-level nested.

:::

## Why avoid nesting?

Nesting makes code more difficult to read and understand. When nesting multiple layers of code within each other, it becomes harder for other programmers (or even yourself) to follow the logic and flow of the program. This can lead to confusion and mistakes, and also increase the complexity of the program.

Each level of nesting adds an abstraction layer, making it more challenging to identify and resolve errors. This can lead to more time spent debugging and testing and can even cause your program to crash. Additionally, nesting your code can make it more challenging to maintain and update in the future.

## How avoid nesting code?

Here are a few methods for de-nesting your code:

- [Extraction Method](/method/extraction.md)

- [Inversion Method](/method/inversion.md)
