const functionTimeout = (time) => {
  console.log(`${time}`);
};
const DELAY = 3000;
const ARG = 3000;
const timeoutWithFunction = setTimeout(functionTimeout, DELAY, ARG);

const codeString = "(function test() {console.log(123)})()"; // need called function
const timeoutWithCodeString = setTimeout(codeString, 1000, "Aboba"); // arg undefined

const timerId = setTimeout(() => {
  console.log(1);
}, 2000);

const newTimerId = setTimeout(() => {
  console.log(2);
}, 2000);

console.log(timerId); // timeout id
console.log(newTimerId); // timeout id

// can clear timeout

clearTimeout(timerId);
// console.log(timerId); // same timeout id

const functionInteval = (data) => {
  console.log(`Aboba ${data}`);
};

const intervalWithFunction = setInterval(functionInteval, 1000, "Opa");

const intervalCodeString =
  '(function interval() {console.log("Interval from code string")})()';

const intervalWithCodeString = setInterval(intervalCodeString, 1000);

function tick() {
  console.log("tick");
  intervalWithSetTimeout = setTimeout(tick, 2000);
}
let intervalWithSetTimeout = setTimeout(tick, 2000);

setTimeout(() => console.log("Мир"));

console.log("Привет");

let start = Date.now();
let times = [];

const run = () => {
  times.push(Date.now() - start);

  if (start + 100 < Date.now()) {
    console.log(times);
  } else {
    setTimeout(run);
  }
};

setTimeout(run);

const printNumbersWithInterval = (from, to) => {
  let current = from;

  let intervalId = setInterval(() => {
    console.log(current);
    if (current == to) {
      clearInterval(intervalId);
    } else {
      current++;
    }
  }, 1000);
};

printNumbers(1, 10);

const printNumbersWithTimeout = (from, to) => {
  let current = from;

  let timeoutlId = setTimeout(function numbers() {
    console.log(current);
    if (current == to) {
      clearInterval(timeoutlId);
    } else {
      current++;
      setTimeout(numbers, 1000);
    }
  }, 1000);
};

printNumbersWithTimeout(1, 10);
