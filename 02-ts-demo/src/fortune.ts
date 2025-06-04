const randomNumber = Math.round(Math.random() * 100);

const getLuckyNumber = () => randomNumber;

class Calculator {
  constructor() {}
  // constructor(private age: number){}

  add(x: number, y: number): number;
  add(x: string, y: string): string;
  add(x: any, y: any): any {
    if (typeof x === "number" || typeof y === "number") {
      return x + y;
    }
    if (typeof x === "string" || typeof y === "string") {
      return x + " " + y;
    }
  }
}

export { getLuckyNumber, Calculator };
