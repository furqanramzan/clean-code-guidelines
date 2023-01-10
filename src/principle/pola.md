---
title: Least Astonishment
icon: class
category:
  - Principle
---

## Introduction

The Principle of Least Astonishment (POLA) is a design principle that states that a system should work in the way that is most likely to be expected by the user. It is also sometimes known as the Principle of Least Surprise.

The idea behind POLA is that when a user interacts with a system, they should not be surprised by the outcome of their actions. Instead, the system should work in a way that is intuitive and consistent with the user's expectations. This makes the system easier to use and understand, as the user is less likely to make mistakes or become frustrated.

One way to apply this principle is to ensure consistency in the user interface across the application, for example, the same button should do the same action throughout the application, this will reduce the cognitive load of the user and make the interaction with the system more intuitive.

Another way to apply this principle is by providing clear feedback to the user, for example, when an action is performed, the system should inform the user of the outcome, either with a message, a change in the interface or a sound.

The principle can also be applied to the code and the algorithm design, for example, when naming variables, methods or classes, they should be consistent, meaningful, and follow standard conventions. Also, the algorithm should handle the edge cases and corner cases in a way that is consistent with the user's expectations.

In summary, the Principle of Least Astonishment is a design principle that aims to create systems that are intuitive and easy to use, by working in a way that is consistent with the user's expectations. This helps to make the system more predictable and less prone to errors, and it ultimately improves the user experience.

## Example

Here's an example of how the Principle of Least Astonishment (POLA) might be applied in a software application:

- A user interface for a file management application has a button labeled "Delete." When the user clicks this button, the application prompts the user to confirm that they want to delete the selected file(s). After the user confirms, the selected files are permanently deleted and removed from the file system.

This example follows the POLA because the user's action of clicking the "Delete" button aligns with their expectation of the action that should take place. The confirmation step also follows the principle as it gives the user a chance to back out of the action if they accidentally clicked on the button.

- An e-commerce website has a shopping cart feature. When a user adds an item to their cart and then proceeds to the checkout page, the item's price and availability are checked in real-time. If the price has changed or the item is out of stock, the user is immediately informed and provided with the updated information.

This example follows the principle of least astonishment because the user would expect the price and availability of an item to be accurate and up-to-date, and they would be surprised if they proceeded with the checkout process only to find that the price was different or the item was unavailable. By checking the item's price and availability in real-time, the website is ensuring that the user's expectations.
