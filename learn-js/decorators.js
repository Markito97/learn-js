function slowCalculates(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum += i;
  }
  return sum;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (number) {
    if (cache.has(number)) {
      return cache.get(number);
    }
    let result = func(number);
    cache.set(number, result);
    return result;
  };
}

// slowCalculates = cachingDecorator(slowCalculates);

// console.log(slowCalculates(5000)); // кешируем
// console.log("Again " + slowCalculates(5000)); // возвщаем из кеша

function multiply(a, b) {
  return a * b;
}

function allArgsValid(fn) {
  return function (...args) {
    if (args.length != fn.length) {
      throw new Error("Only submit required number of params");
    }
    const validArgs = args.filter((arg) => Number.isInteger(arg));
    if (validArgs.length < fn.length) {
      throw new TypeError("Argument cannot be a non-integer");
    }
    return fn(...args);
  };
}

multiply = allArgsValid(multiply);

// console.log(multiply(5, 5)); // 25
// console.log(multiply(6, 8, 7)); // Error("Only submit required number of params")
// console.log(multiply(5, null)); // TypeError("Argument cannot be a non-integer")

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log("Called", +x);
    return x * this.someMethod(); // *
  },
};

function cachingDecoratorForObj(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}

console.log(worker.slow(1)); // 1

worker.slow = cachingDecoratorForObj(worker.slow);

console.log(worker.slow(2)); // 2
