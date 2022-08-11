## Example 1: The Basics

_What is a closure in JavaScript?_ It's defined as a function that references variables in the outer scope from its inner scope. A closure **preserves** the outer scope inside its inner scope.

Let's understand this concept by creating a custom logger.

**Problem**: I want to initialize a logger for my app _once_ with an Application Id and then use it several times to log informational and error messages.

Let's start with wishful coding:

```ts
const myAppLogger = createLogger('application-id');

myAppLogger.logInfo('The user logged in');
myAppLogger.logError('Something went wrong');
```

You can run this example (and see that it crashes) with:

```bash
yarn example-1
```

Next, create the `createLogger` method:

```ts
function createLogger(applicationId: string) {}
```

This function will behave a little differently than a normal function, meaning instead of returning a primitive type it's going to return two functions `logInfo` and `logError`.

```ts
function createLogger(applicationId: string) {
  function logInfo() {}

  function logError() {}

  return { logInfo, logError };
}
```

Both `logInfo` and `logError` need to write a message to the console. Let's add that:

```ts
function createLogger(applicationId: string) {
  function logInfo(message: string) {
    console.log({ message });
  }

  function logError(message: string) {
    console.log({ message });
  }

  return { logInfo, logError };
}
```

But the trick is that they also need to log the Application Id from the outer scope. This is known as closure because the inner scope is referencing a variable from the outer scope.

```ts
function createLogger(applicationId: string) {
  function logInfo(message: string) {
    console.log({ applicationId, message });
  }

  function logError(message: string) {
    console.log({ applicationId, message });
  }

  return { logInfo, logError };
}
```

So, what's happening here? When `createLogger` is initialized, it returns two methods that will preserve the `applicationId` from it's outer scope whenever they are invoked! So, you only have to initialize the logger once with the `applicationId` and then use `logInfo` and `logError` by passing a message!

Let's DRY this up a little by moving the duplicated `console.log` to its own method.

```ts
function createLogger(applicationId: string) {
  function log(message: string) {
    console.log({ applicationId, message });
  }

  function logInfo(message: string) {
    return log(message);
  }

  function logError(message: string) {
    return log(message);
  }

  return { logInfo, logError };
}
```

Notice that `logInfo` and `logError` are the same thing now. Usually informational and error logs have a priority associated with them:

```ts
type Priority = 'info' | 'error';

function createLogger(applicationId: string) {
  function log(message: string, priority: Priority) {
    console.log({ applicationId, message, priority });
  }

  function logInfo(message: string) {
    return log(message, 'info');
  }

  function logError(message: string) {
    return log(message, 'error');
  }

  return { logInfo, logError };
}
```

And that's it!

One last thing about this example: `log` is never exposed from `createLogger`. It's scoped to the `createLogger` context and is a private function! This is a helpful strategy for encapsulating logic that doesn't need to be exposed.

The wishful code from the beginning will now work:

```ts
const myAppLogger = createLogger('application-id');

myAppLogger.logInfo('The user logged in'); // => console.log({ applicationId: 'application-id', message: 'The user logged in', priority: 'info' });
myAppLogger.logError('Something went wrong'); // => console.log({  applicationId: 'application-id', message: 'Something went wrong', priority: 'error' });
```
