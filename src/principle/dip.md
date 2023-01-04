---
title: DIP
icon: storage
category:
  - Principle
---

## Introduction

The Dependency Inversion Principle is a principle in object-oriented programming that states that high-level modules should not depend on low-level modules. Instead, both should depend on abstractions. This helps to reduce the coupling between modules and makes it easier to modify the system.

The principle consists of two parts:

- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details. Details should depend on abstractions.

Always try to make classes loosely coupled as much as you can and you can achieve this through abstraction. The main motive of this principle is decoupling the dependencies so if class A changes class B doesn’t need to care or know about the changes.

## Example

Here's a simple example of the Dependency Inversion Principle (DIP):

Imagine you have a class called `EmailSender` that sends emails. This class has a dependency on a class called `SmtpClient`, which handles the low-level details of actually sending emails over the internet.

Here's how the `EmailSender` class might look without following the DIP:

```ts
class EmailSender {
  public sendEmail(emailAddress: string, message: string) {
    const client = new SmtpClient();
    client.connect();
    client.send(emailAddress, message);
    client.disconnect();
  }
}
```

In this example, `EmailSender` is tightly coupled to the `SmtpClient`, because it creates a new instance of `SmtpClient` every time it wants to send an email. This makes it difficult to unit test the EmailSender class because you can't easily mock out the `SmtpClient`.

To follow the DIP, we can invert the dependency by introducing an abstractions layer. We can do this by creating an interface called `IEmailSender` that defines a method for sending emails. The `EmailSender` class can then implement this interface, and it can depend on the interface rather than the concrete `SmtpClient` class.

Here's how the refactored `EmailSender` class might look:

```ts
interface IEmailSender {
  sendEmail(emailAddress: string, message: string): void;
}

class EmailSender implements IEmailSender {
  private readonly client: ISmtpClient;

  constructor(_client: ISmtpClient) {
    this.client = _client;
  }

  public sendEmail(emailAddress: string, message: string): void {
    this.client.connect();
    this.client.send(emailAddress, message);
    this._client.disconnect();
  }
}
```

Now, the `EmailSender` class depends on the `ISmtpClient` interface, which can be easily mocked in unit tests. This allows us to test the `EmailSender` class in isolation, without having to worry about the concrete implementation of the `SmtpClient`.
