# GROUP 03 - Benjamin Valenzuela // Hanan Mohamed (11/17/26 Class Activity part 1)

# Calculator test automation lab

Individual activity, 60 minutes. Install Node.js 22 with npm before class.
No external packages are required. You do not need npm install for this version.

Open this folder in VS Code. Run npm start and open http://127.0.0.1:3000.
Stop the server with Ctrl+C. Follow the handout to create tests/calculator.test.js.
Run npm test from this folder after creating the test file. An empty tests folder
is not a completed test suite. Unit tests do not need the web server running.

The function calculate(a, b, operation) accepts numeric arguments and the operation
add, subtract, multiply, or divide. Division by zero throws an Error with message
Cannot divide by zero. An unknown operation throws Unknown operation.
The browser handles blank and nonnumeric form inputs separately in src/app.js.
This lab tests the calculation function directly. It does not automate the browser.
