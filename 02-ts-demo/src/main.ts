// Explicit Types
// let x: string = "Hello World";

// x = 201;

// console.log(typeof x);

// console.log("X : ", x);

// Implicit Types / Type inference
// let y = 201;

// y = "Hello there";

// y = "Hello there"

// console.log(typeof y);
// console.log(x);

// type MyCustomType = {
//   email: string;
//   age: number;
// };

// let emp: MyCustomType = {
//   email: "john@test",
//   age: 23,
// };

// console.log(emp);

// interface IEmployee {
//   empId: string;
//   dept: string;
//   getDetails: () => void;
// }

// let john: IEmployee = {
//   empId: "E001",
//   dept: "Sales",
//   getDetails: function () {
//     console.log("Emp Details");
//   },
// };

// john.getDetails();
// // console.log();

// interface HasFormatter {
//   format: () => void;
// }

// class Foo implements HasFormatter {
//   format() {
//     console.log("Formatting...");
//   }
// }

// class Bar implements HasFormatter {
//   format() {
//     console.log("Formatting...");
//   }
// }
// let foo: HasFormatter = new Foo();

// let bar: HasFormatter;

// bar = new Foo();
// bar = new Bar();

let varAny: any;

varAny = "Hello";
varAny = 102;
varAny = true;

console.log(varAny);

let varUnknown: unknown;

varUnknown = "Hello";
// varUnknown = 102;
// varUnknown = false;

if (typeof varUnknown === "string") {
  varUnknown.toUpperCase();
}

varUnknown = 201;

if (typeof varUnknown === "number") {
  varUnknown.toPrecision();
}

// let friends: Array<string>;
let friends: string[];

friends = ["Monica", "Joey", "Ross"];

let varTuple: [string, number];

varTuple = ["John Doe", 23];

let varUnion: string | number;
varUnion = "Twenty three";
varUnion = 23;

let varFn: Function;
varFn = () => console.log("Do something");

function doSomething(): never | void {
  throw new Error("Something went wrong");
}
