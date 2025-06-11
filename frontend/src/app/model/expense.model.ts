// CUSTOM DATATYPE USING 'interface'
export interface IExpense {
  id: string;
  title: string;
  amount: number;
  createdAt: string;
}

// CUSTOM DATA TYPE USING 'type' KEYWORD
// export type IExpense = {
//   id: string;
//   title: string;
//   amount: number;
//   createdAt: string;
// }

// CUSTOM DATATYPE USING 'class'
// export class Expenses {
//   constructor(
//     private id: string,
//     private title: string,
//     private amount: number,
//     private createdAt: string
//   ) {}
// }
