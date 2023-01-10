---
title: Naming
icon: link
category:
  - Practise
---

## Introduction

If you speak well, people will love to listen to you. Communication is an art that either can make someone fall in love with you or can give you critics. Similarly in the world of programming. If you write horrible code, you will not be able to tell another programmer why you had written it. It’s a harsh reality that you work under the pressure of deadlines which makes for hastily written code. But keep this fact in mind, a badly written codebase is going to make your life more difficult.

Programmers usually want to learn different programming languages. In today’s world, there is a wrong perception that one who knows several technologies or the latest technologies, is a hero. But believe me, there is no meaning in learning Java, CSS, AngularJS, Perl, Ruby, or Python, if at the end of the day, you are not able to admire your code. In the end, you become "Jack of all, Master of none". It’s not just the technology; it’s the code that makes software powerful.

You’re the author, you’re the artist of writing code. Improve your code writing every day. Each day is a new day to improve what you learned yesterday. Improve your coding day by day. Try to make it cleaner, more beautiful, and small every day. Be the best artist at writing source code.

When you start to embrace this thinking, you tell yourself, “This can much be better”. You make it better and better than starting to admire your code. You start feeling proud of converting an if-else into a ternary operator just to save three lines.

::: tip
Programming is the art of telling another human what one wants the computer to do. **Donald Knuth**

:::

- Always use a meaningful name.

- Choose a name that expresses the meaning of your purpose.

- Try to use detail for any naming. Names should be descriptive such that they should tell what it is for.

- Avoid ambiguous and small names which are hard to understand.

- Use Consistent Verbs per Concept. If we need a CRUD function, we use `create`, `get`, or `update` with the name. If we need to get user info from the database, then the name of the function can be `userInfo`, `user`, or `fetchUser`, but this is not the convention. We should use `getUser`.

### Class

A class name must be [pascal case](/glossary/case.md#pascal-case). It should be a noun.

**Wrong names**: student, Inkjet_printer, Bookinghistory

**Correct names**: Student, InkjetPrinter, BookingHistory

### Variable

A variable name must be [camel case](/glossary/case.md#camel-case).

**Wrong names**: Student, Inkjet_printer, Bookinghistory

**Correct names**: student, inkjetPrinter, bookingHistory

### Method

A method or function name must be [camel case](/glossary/case.md#camel-case). It should be a verb.

**Wrong names**: myAge, expensesHistory

**Correct names**: setMyAge, getExpensesHistory

### Constant

A constant name must be [screaming snake case](/glossary/case.md#screaming-snake-case).

**Wrong names**: myAge, expensesHistory

**Correct names**: setMyAge, getExpensesHistory

::: tip

There are only two hard things in Computer Science: cache invalidation and naming things. **Phil Karlton**

:::
