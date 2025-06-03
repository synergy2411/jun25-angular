// let marks = [99, 98, 97, 90];

// // Declarative
// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }

// // Imperative
// for (let mark of marks) {
//   console.log(mark);
// }

// // Reactive
// marks.forEach(console.log);

// let x = 102;

// console.log(typeof x);    // number

// x = "Hello there!";

// console.log(typeof x);    // string

// T1
// console.log("Start");

// setTimeout(() => console.log("Timer"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// // T1
// console.log("End");

// OUTPUT :
// Start
// End
// Promise
// Timer (after 0 seconds)

// ARROW FUNCTION
// - (argsList) => function Body

// let sum = (n1, n2) => n1 + n2;

// console.log("Sum : ", sum(3, 4));

// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   getDetails: function () {
//     // return () => this.firstName + this.lastName;

//     // let that = this;
//     return function () {
//       return this.firstName + " " + this.lastName;
//     };
//   },
// };

// let userdetails = user.getDetails();

// console.log("User Details : ", userdetails()); // ?

// Scope chaining / Lexical Scoping / Physical location of function

// let x = 200;

// function b() {
//   //   let x = 300;
//   // this.x = 99;
//   console.log("X : ", this.x); // undefined
// }

// function a() {
//   let x = 100;
//   b();
// }

// a();

// function demo() {
//   // let this = {};
//   // return this;
// }

// function testClosure() {
//   let x = 4;
//   return function () {
//     return ++x
//   }
// }

// const nestedFn = testClosure()

// console.log(nestedFn())     // 5
// console.log(nestedFn())     // 6
// console.log(nestedFn())     // 7
// console.log(nestedFn())     // 8
// console.log(nestedFn())     // 9

// -----------
// BLOCK SCOPING - let and const

// function demoFn(arr) {
//   // variable hoisting
//   if (arr.length > 2) {
//     let load = "loading...";
//     console.log(flash); // undefined / not defined - RefError /
//   } else {
//     let flash = "flashing...";
//   }
// }

// demoFn([2, 3, 4, 5]);

// const username = "John Doe";

// username = "Mary Public";

// const user = {
//   // xx09876 ---> John Doe
//   name: "John Doe",
// };

// user = {       // xx1234  ---> Jenny           // changing the reference
//   name : "Jenny"
// }

// user.name = "Mary Public"; // value present inside reference

// console.log(user.name); // "Mary Public"

// const friends = ["Monica", "Joey", "Ross"];

// // Allowed
// friends.push("Rachel");

// console.log(friends);

// // Not Allowed
// friends = ["Monica", "Joey", "Ross", "Rachel"];

// -------------
// REST Operator - creates collection from individual items

// function demoRest(email, ...args) {
//   console.log(args[0]); // 32
// }

// // demoRest("test@test.com")
// // demoRest("test@test.com", 32)
// demoRest("test@test.com", 32, true);

// SPREAD Operator - spreads the collection

// let arr = [98, 99, 100];

// let marks = [91, 92, 98, ...arr];

// console.log(marks); // [91,92,98,[98,99,100]]

// let empOne = {
//   name: "john doe",
//   company: "XYZ Inc.",
// };

// let empTwo = {
//   ...empOne,
//   name: "Mary Public",
// };

// console.log(empTwo); // {name : "John doe", company : "XYZ Inc" }

// function demoSpread(name, age) {
//   console.log(name, age);
// }

// let userDetail = ["Monica Geller", 23];
// demoSpread(...userDetail);

// --------
// DESTRUCTURING

// let friends = ["Monica", "Joey", "Ross", "Rachel"];

// let [f3, f4, f5] = friends;

// console.log(f3, f5); // "Ross", undefined

let book = {
  author: "Mary Public",
  noOfPages: 198,
  isbn: 987654321,
  genere: ["Melody", "Drama", "Action"],
  published: {
    year: 2024,
  },
};

let {
  isbn,
  author: bookAuthor,
  genere,
  published: { year },
} = book;

console.log(author, noOfPages);

// let [g1, g2, g3] = genere;

// console.log(isbn, bookAuthor, g2, year);

// let users = [
//   { email: "x@test.com", age: 22 },
//   { email: "y@test.com", age: 23 },
//   { email: "z@test.com", age: 24 },
// ];

// let [u1, u2, u3] = users;

// let { email: e1, age: a1 } = u1;

// let { email: e2, age: a2 } = u2;

// console.log(e1, a1, e2, a2);

let a = 10,
  b = 20;

[a, b] = [b, a];

console.log(a, b);
