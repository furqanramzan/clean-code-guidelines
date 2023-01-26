---
title: Extraction Method
category:
  - Method
---

## Introduction

The extraction method uses to reduce [nesting](/demo/page.md) in code. This involves taking a nested code block and extracting it into its own function. This allows you to separate the logic and functionality of the code block, making it easier to understand and maintain.

::: tip

Always start extraction from the inner block and then go up.

:::

## Example

Write a function that takes an array and return sums of all odd number. It must validate the arguments.

::: danger Original nested code:

```js
function sumOdd(numbers) {
  let total = 0;
  if (Array.isArray(numbers)) {
    for (const number of numbers) {
      if (typeof number === "number") {
        if (number % 2 !== 0) {
          total += number;
        }
      }
    }
  }
  return total;
}
```

:::

::: tip Extracted code:

```js
function filterNumber(number) {
  if (number % 2 !== 0) {
    return number;
  }
  return 0;
}

function isValidNumber(number) {
  if (typeof number === "number") {
    return number;
  }
  return 0;
}

function calculateTotal(numbers) {
  let total = 0;
  for (const number of numbers) {
    const validNumber = isValidNumber(number);
    total += filterNumber(validNumber);
  }
  return total;
}

function sumOdd(numbers) {
  let total = 0;
  if (Array.isArray(numbers)) {
    total = calculateTotal(numbers);
  }
  return total;
}
```

:::
