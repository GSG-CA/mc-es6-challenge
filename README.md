## ES6

### ESwhat??

ES5 is a name for the version of JavaScript that we all know and love. It's
[supported very well](http://kangax.github.io/compat-table/es5/) in reasonably modern browsers, and is probably what you've been using
up to now.

ECMAScript 2015 commonly known as ES6 or ES2015 released on June 2015. ES5 was released on December 2009. It would then take almost six years for the next version of ECMAScript to be released. So, there are many exciting feature in ES6.

#### Most Top Feature in ES6
- [block-scoped variables](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let)

  `let` is a new `var` which allows to scope the variable to the blocks. So, the main difference between `let` and `var` is, `var` is scoped to the nearest function block and `let` is scoped to the nearest enclosing block, which can be smaller than a function block.
  In ES6,
  ```js
    let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting);  // "say Hello instead"
    }
    console.log(greeting); // "say Hi"
  ``` 
  In ES5,
  ```js
    var greeting = "say Hi";
    if (true) {
        var greeting = "say Hello instead";
        console.log(greeting);  // "say Hello instead"
    }
    console.log(greeting); // "say Hello instead"
  ``` 
  When it comes to `const`, it’s just an immutable and it’s also block-scoped like `let`.

- [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
  ```js
  // Traditional Function
  function bob (a){
    return a + 100;
  }

  // Arrow Function
  let bob = a => a + 100;
  ```
- [template literals](http://es6-features.org/#StringInterpolation)

  `Template literals` (or interpolation as they’re known in other languages) are a way to output variables in the string mixed with some text.
  ```js
    var name = 'Your name is ' + first + ' ' + last + '.';
    let name = `Your name is ${first} ${last}.`
  ```
- [default parameter values](http://es6-features.org/#DefaultParameterValues):
  Functions can have default parameters
  ```js
    function greet(message = "HI THERE"){ 
      return message
    }
    greet() // HI THERE
    greet("Good Morning") // Good Morning
  ```
- [object destructuring](http://es6-features.org/#ParameterContextMatching)

  Consider the next code:
  ```js
    function addUser(args){
      const name = args.name;
      const age = args.age;
      const email = args.email;
    }
  ```
  With destructuring assignment syntax, it can be written like this:
  ```js
    function addUser(args){
      const { name, age, email } = args;
    }
  ```

  or even better, with the destructuring syntax in the parameter list:
  ```js
    function addUser({ name, age, email }){}
  ```
  Below is the function call:

  ```js
    addUser({ name, age, email });
  ```
- **Promises in ES6 (will cover later)**
- **Classes in ES6 (will cover later)**
- **Modules in ES6**

  Before modules, a variable declared outside any function was a global variable.
  With modules, a variable can be exported and imported despite the scripts order.

  Exporting makes a function or object available to other modules. 
  ```js
    //module "./TodoStore.js"
    export default function TodoStore(){}

    //module "./UserStore.js"
    export default function UserStore(){}
  ```
  Importing makes a function or object, from other modules, available to the current module.

  ```js
    import TodoStore from "./TodoStore";
    import UserStore from "./UserStore";

    const todoStore = TodoStore();
    const userStore = UserStore();
  ```  

### The Challenge
We're going to have some code we want to convert between ES6 and ES5.
Bear in mind there are some differences in functionality between ES6 and ES5, which this challenge should help you to understand. You may want to focus on understanding some of the main differences rather than rushing to the end as this will help you to start using ES6 in your own projects.

Clone the repository to your computer and follow the instructions.
- [Part1](./ES5-ES6/README.md) : Convert ES5 features to ES6.
- [Part2](./ES6-ES5/README.md): Convert ES6 features to ES5.

A completed solution is saved in the solutions directory of the repository, but try to work it out yourself first – it's not a race, and you shouldn't worry if you don't manage to complete everything.