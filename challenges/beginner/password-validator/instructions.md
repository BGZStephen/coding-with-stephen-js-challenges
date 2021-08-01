# Validate password

The challenge is to complete the function `isPasswordValid`, the function should return `true` if the password matches the following requirements:

* minimum of 10 characters
* minimum of 1 lowercase character
* minimum of 1 uppercase character
* minimum of 1 number

The function must handle edge cases which should return `false` by default:

* null / undefined function arguments
* non string type arguments (number, array, object)

Fill in the code between the curly braces `{ }` with your solution.

Once you're happy, try running the tests with `npm run test challenges/beginner/password-validator/password-validator.test.js`, if you're all done, you should get a total of 11 passing tests.

Don't worry if you don't get it first try, here are some things to help out:

* Regular expressions - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions