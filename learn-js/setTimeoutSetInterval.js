// const functionTimeout = (time) => {
//   console.log(`${time}`);
// };
// const DELAY = 3000;
// const ARG = 3000;
// const timeoutWithFunction = setTimeout(functionTimeout, DELAY, ARG);

// const codeString = "(function test() {console.log(123)})()"; // need called function
// const timeoutWithCodeString = setTimeout(codeString, 1000, "Aboba"); // arg undefined

// const timerId = setTimeout(() => {
//   console.log(1);
// }, 2000);

// const newTimerId = setTimeout(() => {
//   console.log(2);
// }, 2000);

// console.log(timerId); // timeout id
// console.log(newTimerId); // timeout id

// can clear timeout

// clearTimeout(timerId);
// // console.log(timerId); // same timeout id

// const functionInteval = (data) => {
//   console.log(`Aboba ${data}`);
// };

// const intervalWithFunction = setInterval(functionInteval, 1000, "Opa");

// const intervalCodeString =
//   '(function interval() {console.log("Interval from code string")})()';

// const intervalWithCodeString = setInterval(intervalCodeString, 1000);

// function tick() {
//   console.log("tick");
//   intervalWithSetTimeout = setTimeout(tick, 2000);
// }
// let intervalWithSetTimeout = setTimeout(tick, 2000);

// setTimeout(() => console.log("Мир"));

// console.log("Привет");

// let start = Date.now();
// let times = [];

// const run = () => {
//   times.push(Date.now() - start);

//   if (start + 100 < Date.now()) {
//     console.log(times);
//   } else {
//     setTimeout(run);
//   }
// };

// setTimeout(run);

// const printNumbersWithInterval = (from, to) => {
//   let current = from;

//   let intervalId = setInterval(() => {
//     console.log(current);
//     if (current == to) {
//       clearInterval(intervalId);
//     } else {
//       current++;
//     }
//   }, 1000);
// };

// printNumbers(1, 10);

// const printNumbersWithTimeout = (from, to) => {
//   let current = from;

//   let timeoutlId = setTimeout(function numbers() {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timeoutlId);
//     } else {
//       current++;
//       setTimeout(numbers, 1000);
//     }
//   }, 1000);
// };

// printNumbersWithTimeout(1, 10);

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function printList(list) {
//   console.log(list.value);
//   if (list.next) {
//     printList(list.next);
//   }
// }
// console.log(printList(list));

// function printList(list) {
//   let tmp = list;

//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }

// printList(list);

// function flatDeep(arr, d = 1) {
//   return d > 0
//     ? arr.reduce(
//         (acc, val) =>
//           acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
//         []
//       )
//     : arr.slice();
// }

// function max() {
//   const arr = [...arguments];
//   arr.length;
//   const res = flatDeep(arr, Infinity);
//   let max = res[0];
//   for (let prop of res) {
//     prop = Number(prop);
//     if (isNaN(prop)) {
//       max = prop;
//     }
//     if (max < prop) {
//       max = prop;
//     }
//   }
//   return max;
// }

// max(1, 2, [3, ["4"]]);

// function min() {
//   const arr = [...arguments];
//   const res = flatDeep(arr, Infinity);
//   let min = res[0];
//   for (let prop of res) {
//     prop = Number(prop);
//     if (isNaN(prop)) {
//       min = prop;
//     }
//     if (prop < min) {
//       min = prop;
//     }
//   }
//   return min;
// }

// min(3, 2, 1, "4");

// let list = {
//   value: 1,
//   next: {
//     value: 2.
//   }
// }

let list = {
  prop: 1,
  test: {
    prop: 2,
    test: {
      prop: 3,
      test: {
        prop: null,
      },
    },
  },
};

console.log(list);

function printList(list) {
  let tmp = list;
  console.log(tmp);
  while (tmp) {
    // console.log(tmp.prop);
    tmp = tmp.test;
  }
}

printList(list);
