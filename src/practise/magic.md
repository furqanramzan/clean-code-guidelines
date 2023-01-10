---
title: Magic Numbers
icon: link
category:
  - Practise
---

## Introduction

In programming, a magic number is a hard-coded numerical or string value that is used in the code, rather than being stored in a named constant. Magic numbers are often used to represent values that are unlikely to change, such as the maximum size of an array, or a special error code.

Using magic numbers can make code more difficult to understand and maintain since it is not immediately clear what the numbers represent. It is generally considered a best practice to use named constants for values that are used frequently or that have special meaning in the code, rather than using magic numbers. This makes it easier for other developers to understand the code and helps to prevent errors that can be introduced if the values are accidentally changed.

## Example

Here is an example of code that uses magic numbers:

### Bad Practise

::: danger

```js
function calculateArea(width, height) {
  if (width < 0 || height < 0) {
    return -1;
  }
  return width * height;
}
```

:::

In this example, the magic number -1 is used to represent an error condition. If the width or height of the rectangle is negative, the function returns -1 to indicate that the area cannot be calculated.

Instead of using a magic number, it would be better to use a named constant to represent the error value:

### Good Practise

::: tip

```js
function calculateArea(width, height) {
  if (width < 0 || height < 0) {
    const ERROR_VALUE = -1;
    return ERROR_VALUE;
  }
  return width * height;
}
```

:::
