// test something outside vue

// // map method with arrays
// // meth1
// const numbers = [1, 2, 3, 4, 5];
// const squares = [];

// for (let i = 0; i < numbers.length; i++) {
//   squares[i] = numbers[i] * numbers[i];
// }
// console.log(squares);
// // meth2 ---> map

// const squares2 = numbers.map((n) => {
//   return n * n;
// });
// console.log(squares2);

// // testing exemple

export const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
