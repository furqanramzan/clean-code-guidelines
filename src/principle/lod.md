---
title: Law of Demeter
icon: geometry
category:
  - Principle
---

## Introduction

The Law of Demeter is a principle in object-oriented programming that states that an object should only communicate with its immediate neighbors. In other words, an object should only invoke methods on objects that it directly depends on, rather than on objects that are further down the chain.

The Law of Demeter is based on the idea that an object should be responsible only for its behavior, and that it should not have to worry about the internal workings of other objects. By following the Law of Demeter, you can create more modular and decoupled systems, which are easier to maintain and understand.

## Example

Here is an example of how the Law of Demeter might be applied in code:

Imagine you are building a system to manage a library. One of the classes in your system is a Borrower class, which represents a borrower in the library. This Borrower class has a method return_book() that is used to return a book to the library.

Here is an example of how the return_book() method might be implemented in a way that violates the Law of Demeter:

```js
class Borrower {
  returnBook(book) {
    const librarian = Library.getLibrarian();
    librarian.acceptBook(book);
    this.books.remove(book);
  }
}
```

In this example, the Borrower class violates the Law of Demeter by calling the accept_book() method on the librarian object, which is an object that the Borrower class does not directly depend on.

A better way to implement this method would be to have the Borrower class only communicate with its immediate neighbors, like this:

```js
class Borrower {
  returnBook(book) {
    const library = Library.getLibrary();
    library.returnBook(book);
    this.books.remove(book);
  }
}
```

In this example, the Borrower class communicates only with the library object, which is an object that it directly depends on. This implementation follows the Law of Demeter and is therefore likely to be more maintainable and easier to understand.
