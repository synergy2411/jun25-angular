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

// let varAny: any;

// varAny = "Hello";
// varAny = 102;
// varAny = true;

// console.log(varAny);

// let varUnknown: unknown;

// varUnknown = "Hello";
// // varUnknown = 102;
// // varUnknown = false;

// if (typeof varUnknown === "string") {
//   varUnknown.toUpperCase();
// }

// varUnknown = 201;

// if (typeof varUnknown === "number") {
//   varUnknown.toPrecision();
// }

// // let friends: Array<string>;
// let friends: string[];

// friends = ["Monica", "Joey", "Ross"];

// let varTuple: [string, number];

// varTuple = ["John Doe", 23];

// let varUnion: string | number;
// varUnion = "Twenty three";
// varUnion = 23;

// let varFn: Function;
// varFn = () => console.log("Do something");

// function doSomething(): never | void {
//   throw new Error("Something went wrong");
// }

// TEMPLATE LITERALS - Back tick (``)
// - Embed the variables
// - Multiline strings
// let username = "John Doe";
// let age = 23;

// let greetings = `Hello from ${username}!!

// I'm ${age} years old.

// `;

// console.log(greetings);

// // DEFAULT PARAMETER
// function demoFn(arr: Array<number> = []) {
//   //   arr = arr || [];

//   if (arr.length > 2) {
//     console.log("Good morning!");
//   } else {
//     console.log("Guden Morgan");
//   }
// }

// demoFn();
// demoFn([1, 2, 3]);

// CLASSES

// enum Role {
//   "MANAGER",
//   "ADMIN",
//   "EMPLOYEE",
// }

// class Employee {
//   // private empId: string;
//   // private empName: string;
//   // private age: number = 0;
//   // private role: Role;

//   // constructor(empId: string, empName: string, age: number, role: Role) {
//   //   this.empId = empId;
//   //   this.empName = empName;
//   //   this.age = age;
//   //   this.role = role;
//   // }

//   private _age: number = 0;

//   constructor(
//     private empId: string,
//     private empName: string,
//     private role: Role
//   ) {}

//   get age() {
//     return this._age;
//   }

//   set age(value: number) {
//     this._age = value;
//   }

//   getDetails() {
//     return `${this.empId} - ${this.empName}  | Role : ${this.role}`;
//   }
// }

// let john = new Employee("E001", "John Doe", Role.EMPLOYEE);
// console.log(john.getDetails());
// john.age = 23;
// console.log(john.age);

// class Calculator {

//   constructor() { }
//   // constructor(private age: number){}

//   add(x: number, y: number): number;
//   add(x: string, y: string): string;
//   add(x: any, y: any): any {
//     if (typeof x === "number" || typeof y === "number") {
//       return x + y;
//     }
//     if (typeof x === "string" || typeof y === "string") {
//       return x + " " + y;
//     }
//   }
// }

// let sum = new Calculator();
// console.log("Add Two numbers : ", sum.add(4, 5));
// console.log("Add Two strings : ", sum.add("Hello", "World"));

// GENERICS

function addAtBeginning<T>(item: T, arr: Array<T>): Array<T> {
  return [item, ...arr];
}

const numberArray = addAtBeginning<number>(99, [98, 96, 93]);

console.log(numberArray[0]);

const stringArray = addAtBeginning<string>("Hello", ["and", "Good", "Morning"]);

console.log(stringArray[0]);

interface IResource<T, K> {
  resourceName: T;
  resourceLocation: K;
}

let serverOne: IResource<string, string> = {
  resourceName: "Server One",
  resourceLocation: "Pune",
};

let serverTwo: IResource<number, string> = {
  resourceName: 1022,
  resourceLocation: "Bengaluru",
};

class Stack<T> {
  private list: Array<T> = [];

  addItem(item: T) {
    this.list.push(item);
  }
  removeItem(index: number) {
    const [deletedItem] = this.list.splice(index, 1);
    if (deletedItem) {
      console.log("Deleted");
    }
  }
  getList() {
    return this.list;
  }
}

let marks = new Stack<number>();
marks.addItem(99);
marks.addItem(97);
marks.addItem(94);

console.log(marks.getList());

let friends = new Stack<string>();
friends.addItem("Monica");
friends.addItem("Joey");
friends.addItem("Ross");
console.log(friends);

function demoGenericExtendsFn<T extends { length: number }>(item: T) {
  console.log(item);
}

demoGenericExtendsFn<{ name: string; length: number }>({
  name: "Box",
  length: 12,
});
