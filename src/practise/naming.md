---
title: Naming Convention
category:
  - Practise
---

## Introduction

::: tip

There are only two hard things in Computer Science: cache invalidation and naming things. **Phil Karlton**

:::

One of the most difficult things while coding is naming things (variables, functions, and classes). Most people go ahead with single or double-letter variable names like A, v, d, mp, etc when they start coding. Most people use generic variable names like value, flag, map, arr, etc. These variable names might be easy to write but it makes the code difficult to read and makes debugging more time-consuming.

::: tip

Be consistent in naming and use the same convention.

:::

## How to Create Meaningful Names?

::: tip

You should name a variable using the same care with which you name a first-born child. **James O. Coplien**

:::

Follow these rules to create meaningful variables, functions, and classes:

### Use Intention-Revealing Names

The name of the variable, function, class, etc should be sufficient enough to understand its purpose. One should not have to read the whole code to figure out what a function does or what a class represents or to understand why a variable exists. The name should ideally not require a comment.

#### Bad Practise

::: danger

```ts
let d: number;
arr: Array<string>;
flag: boolean;
getAnswer(a: number, b: number): number {}
```

:::

#### Good Practise

::: tip

```ts
let courseDurationInDays: number;
chapterNames: Array<string>;
isCellVisited: boolean;
getSum(firstNum: number, secondNum: number): number {}
```

:::

### Use Descriptive Names

Names should also be descriptive. A long, descriptive name is better than using a comment to describe it. A name should be descriptive enough to understand the intent of that variable/function/class. One should not have to read the whole code to figure out what a function does or what a class represents or to understand why a variable exists.

#### Bad Practise

::: danger

```ts
let course: number;
let duration: number;
let days: number;
let courseDuration: number;
```

:::

#### Good Practise

::: tip

```ts
let courseDurationInDays: number;
```

:::

### Use Pronounceable Names

Using pronounceable names makes the code easy to read and discuss. Doing so allows for discussing/explaining code in plain English.

#### Bad Practise

::: danger

```ts
let modDateYYMMDD: Date;
```

:::

#### Good Practise

::: tip

```ts
let modificationTimestamp: Date;
```

:::

### Use Verbs per Concept

Always use consistent verbs per concept. For example, If we need a CRUD function, we use `create`, `get`, or `update` with the name. If we need to get user info from the database, then the name of the function can be `userInfo`, `user`, or `fetchUser`, but this is not the convention. We should use `getUser`.

Additionally, using consistent verbs per concept can help to prevent naming conflicts and naming collisions. If different functions and classes use different verbs to describe the same concept, it can be difficult to determine which function or class should be used in a given situation.

#### Bad Practise

::: danger

```js
function editCustomer() {}
```

:::

#### Good Practise

::: tip

```js
function updateCustomer() {}
```

:::

### Avoid Encodings

Avoid using any unnecessary prefixes or suffixes. A variable/function/class name should not be unnecessarily prefixed/suffixed with type information or any other redundant information.

#### Bad Practise

::: danger

```ts
let locationString: string;
```

:::

#### Good Practise

::: tip

```ts
let location: string;
```

:::

### Avoid Noise Words

Noise words like `Data`, `Value`, `Info`, `Variable`, `Table`, `String`, `Object`, etc which are used as a suffix do not offer any meaningful distinction. Noise words are redundant and should be avoided.

#### Bad Practise

::: danger

```ts
let statusValue: string;
class ProductInfo {}
```

:::

#### Good Practise

::: tip

```ts
let status: string;
class Product {}
```

:::

### Use Searchable Names

In big codebases, you would have to search for variable/function/class names to find them. Small names or constant values might make it difficult to search. Proper names that make it easy to search make the code cleaner and easier to maintain.

### Avoid Ambiguous and Short Names

Smaller names should only be used in variables inside short functions (for temporary use) where it has no meaning/use outside the said function. However, it should be noted that the variable names can be small if the scope of the variable is very small given that it is sufficient to understand the intention. For example, `i` variable in `for` loop.

## How to Choose Names for Things?

### Class

A class name must be [pascal case](/glossary/case.md#pascal-case). Classes should have nouns or noun phrases as names. A class name should not be a verb.

**Wrong names**: student, Inkjet_printer, Bookinghistory

**Correct names**: Student, InkjetPrinter, BookingHistory

### Method

A method or function name must be [camel case](/glossary/case.md#camel-case). Function names should be verbs or verb phrases that explain what the function does. Getters (Accessors) and Setters (Mutators) should start with get/set.

**Wrong names**: myAge, expensesHistory

**Correct names**: setMyAge, getExpensesHistory

### Variable

A variable name must be [camel case](/glossary/case.md#camel-case).

**Wrong names**: Student, Inkjet_printer, Bookinghistory

**Correct names**: student, inkjetPrinter, bookingHistory

### Constant

A constant name must be [screaming snake case](/glossary/case.md#screaming-snake-case).

**Wrong names**: myAge, expensesHistory

**Correct names**: setMyAge, getExpensesHistory
