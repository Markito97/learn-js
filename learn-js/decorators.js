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

// console.log(worker.slow(1)); // 1

worker.slow = cachingDecoratorForObj(worker.slow);

// console.log(worker.slow(2)); // 2

let workerWithAnyArguments = {
  slow(min, max) {
    return min + max;
  },
};

function hashArguments(args) {
  return [].join.call(arguments);
  // return [...args].join("");
}

function cachingDecoratorWidthAnyArguments(func, hashArguments) {
  let cache = new Map();
  return function () {
    let key = hashArguments(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }
    // let result = func.call(this, ...arguments);

    let result = func.apply(this, arguments);
    cache.set(key, result);
    return result;
  };
}

workerWithAnyArguments.slow = cachingDecoratorWidthAnyArguments(
  workerWithAnyArguments.slow,
  hashArguments
);

// console.log(workerWithAnyArguments);

// console.log(workerWithAnyArguments.slow(3, 5));

// function work(a, b) {
//   return a + b;
// }

// function spy(func) {
//  function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, args);
//   }
//   wrapper.calls = [];

//   return wrapper;
// }

// work = spy(work);

// console.log(work(1, 2));
// console.log(work(4, 5));
// console.log(work(4, 10));

// for (let args of work.calls) {
//   console.log(args.join());
// }

// ("use strict");

// function f(x) {
//   console.log(this);
//   console.log(x);
// }

// function delay(func, ms) {
//   return function (...args) {
//     const savedThis = this;
//     setTimeout(function () {
//       func.apply(savedThis, args);
//     }, ms);
//   };
// }

// const test = {
//   aboba: "aboba",
// };

// let f1000 = delay(f, 1000).bind(test);
// let f1500 = delay(f, 1500);
// f1000("test");
// f1500("test2");

// function delay(f, ms) {
//   return function () {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// }

// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test2");

// function func(x) {
//   console.log(x);
// }

// function debounce(func, ms) {
//   let isCooldown = false;

//   return function () {
//     if (isCooldown) return;
//     func.apply(this, arguments);

//     isCooldown = true;

//     setTimeout(() => (isCooldown = false), ms);
//   };
// }

// let f = debounce(func, 1000);

// f(1);
// f(2);

function f(a) {
  console.log(a);
}

function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // ограничение 1000 мс ещё нет
f1000(3); // ограничение 1000 мс ещё нет

// выводим 3, промежуточное значение 2 было проигнорированно
