---
title: Inversion Method
icon: enum
category:
  - Method
---

## Introduction

The inversion method uses to reduce [nesting](/demo/page.md) in code. This involves taking a nested code block and inverting the conditional statement that controls it.

::: tip

Always start inversion from the upper block and then go down.

:::

## Example

Write a function that takes a date as a string and returns the year if it's greater than 2015, and throw an exception on each failed case.

::: danger Original nested code:

```js
function sumOdd(dateStr) {
  if (typeof dateStr === "string") {
    if (Date.parse(dateStr)) {
      const year = new Date(dateStr).getFullYear();
      if (year > 2016) {
        return year;
      } else {
        throw new Error("The provided date is not greater than 2016.");
      }
    } else {
      throw new Error("The provided argument is not a valid date.");
    }
  } else {
    throw new Error("The provided argument is not a string.");
  }
}
```

:::

::: tip Inverted code:

```js
function sumOdd(dateStr) {
  if (!typeof dateStr === "string") {
    throw new Error("The provided argument is not a string.");
  }

  if (!Date.parse(dateStr)) {
    throw new Error("The provided argument is not a valid date.");
  }

  const year = new Date(dateStr).getFullYear();
  if (year < 2016) {
    throw new Error("The provided date is not greater than 2016.");
  }

  return year;
}
```

:::
