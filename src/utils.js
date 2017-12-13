console.log('utils.js is running');

const square = (x) => x * x;

const add = (a, b) => a + b;

// you can also do `export square = (x) => x * x;`

const subtract = (a, b) => a - b;

// export - default export - named exports
export { square, add, subtract as default };
