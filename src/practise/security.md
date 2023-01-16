---
title: Security
icon: float
category:
  - Practise
---

## Introduction

These are not something new. These are the industry best practices that many of you already know. But it's better to refresh this knowledge once in a while. So Without any further talking let's go to the point.

- Validation must be included both on the server and client side.

- Hazardous characters should not be allowed (e.g. <> " ' % ( ) & + \ \' \"\*#;--).

- All data going for SQL, XML, and LDAP\* should be sanitized.

- Passwords should be saved as a one-way salted hash (MD5 is easy to break).

- Instead of showing "Invalid username" or "Invalid password" just use "Invalid username and/or password“.

- Changing temporary passwords & Strong password policy should be enforced.

- The account should be temporarily disabled after a specified number of invalid login attempts.

- Temporary information (e.g. OTP) should have an expiration time.

- Cross-Site Request Forgery (CSRF) should be prevented.

- Authorization decisions should be made from the server side.

- Access to files or other resources should be authorized.

- Sensitive information like stack trace should not be disclosed in error responses.

- Try to handle most of the errors on the client side and custom error pages should be constructed.

- Logs should contain log event data like validation failures, authentication attempts, apparent tampering events, exceptions, and administrative function failures.

- Sensitive information should not be logged and log access should be restricted.

- Users should get only the required data that is needed to perform their tasks.

- Cached or Temporary copies of sensitive data stored on the server should be protected.

- Highly sensitive information should be encrypted.

- Server-side source code should be protected from being downloaded by a user.

- Unnecessary application and system documentation should be removed from the production server.

- Sensitive information should not be in HTTP GET request parameters.

- At minimum operations like Login, Registration, Access to personal data, Change of password & Password reminder function should be encrypted.

- Servers, frameworks and systems should be in the latest stable version with security patches.

- Directory & directory structure listings should be turned off from the server and unnecessary functionality, files test code or any functionality should not be in production.

- Info related to OS, server & app framework should be removed from HTTP response headers.

- Isolate the development server from production.

- Variables should be strongly verified before sending into database queries.

- The database should be accessed using a secured user with the lowest privileged.

- Default passwords should be changed.

- Any accounts that are not required should be disabled in servers and databases.

- User-supplied data should not be passed to the dynamic execution function. For example eval.

- Execution privileges should be turned off on file upload directories.

- Use Secure Upload (check file size, change file name, check extension).

- Directory or file paths should not be passed, use index values mapped to a pre-defined list.

- All input strings should be truncated to a reasonable length.

- Allocated memory should be securely freed.

- Calculation errors should be avoided by understanding how the language handles numbers.

- Encrypted and Secured channels should be used to transfer the code from the host server.
