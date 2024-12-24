// let getSum = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

// const res = getSum('2', 3);
// console.log(res);

// typescript
// let x: number = 25;

// let isMarried: boolean = false;

// let isGraduated: boolean | null = null;

// let firstName: string | undefined = undefined;

// interface UserType {
//   firstName: string;
//   lastName: string;
//   age: number;
//   isMarried?: boolean;
//   hobbies: string[];
//   favBook: [string];
// }

// interface UserType {
//   hasChildren: boolean;
// }

// const user: UserType = {
//   firstName: 'Subham',
//   lastName: 'Chapagain',
//   age: 25,
//   isMarried: true,

//   hobbies: ['music', 'sports'],
//   favBook: ['Karnali Blues'],
//   hasChildren: false,
// };

// const user2: UserType = {
//   firstName: 'Subham',
//   lastName: 'Baidhya',
//   age: 25,
//   isMarried: true,
//   hobbies: ['music', 'sports'],
//   favBook: ['Harry Potter'],
//   hasChildren: true,
// };

// interface EmailAndPassword {
//   email: string;
//   password: string;
// }

// interface User extends EmailAndPassword {
//   id: string;
//   fullName: string;
//   gender?: 'male' | 'female' | 'other';
// }

// let user1: User = {
//   id: '1',
//   email: 'arun@gmail.com',
//   password: '1234',
//   fullName: 'Arun',
//   gender: 'male',
// };

// type Laptop = { brand: string; model: string; price: number };

// let laptopDetails: Laptop = {
//   brand: 'Dell',
//   model: 'Inspiron',
//   price: 50000,
// };

// console.log(laptopDetails);

// type LaptopExtraProperties = Laptop & { color: string };

// type numData = number;

// let x: numData = "5";

// ?
interface Bike {
  brand: string;
  model: string;
  price: number;
}
let bikeDetails = {
  brand: 'Honda',
  model: 'CBR',
  price: 5000,
} satisfies Bike;

// ? union
// create an object called animal which can be either a dog or a cat

// interface Animal {
//   name: string;
//   type: string;
//   weight: number;
//   lifeSpan: number;
//   isPet: boolean;
//   location: {
//     first: string;
//     second: string;
//   };
//   makeSound: () => string;
// }

// let animal: Animal = {
//   name: 'Elephant',
//   type: 'Herbivorous',
//   weight: 5000,
//   lifeSpan: 60,
//   isPet: false,
//   location: {
//     first: 'Asia',
//     second: 'Africa',
//   },
//   makeSound: () => {
//     console.log('Trumpet...');
//     return 'Trumpet';
//   },
// };

// animal.makeSound();

// interface NumberType {
//   num1: number;
//   num2: number;
//   addNum: () => number;
// }
// let numbers = {
//   num1: 5,
//   num2: 10,
//   addNum: function () {
//addNum:()=>{}
//cannot use arrow function because tesle (this.) bujhdaina
// let sum = this.num1 + this.num2;
//     return sum;
//   },
// };
// console.log(numbers.addNum());

type functionType = (firstName: string, lastName: string) => string;

const getFullName: functionType = (firstName, lastName) => {
  return firstName + ' ' + lastName;
};

const res = getFullName('Rohan', 'Bhandari');
console.log(res);
