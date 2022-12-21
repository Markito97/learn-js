const user = {
  name: "Aboba",
};

// const descriptor = Object.getOwnPropertyDescriptor(user, "name");

// console.log(descriptor);

Object.defineProperty(user, "name", {
  value: "zopa",
});

console.log(user);

const descriptor1 = Object.getOwnPropertyDescriptor(user, "name");

console.log(descriptor1);

Object.defineProperty(user, "name", {
  writable: true,
  enumerable: true,
  configurable: false,
});

Object.defineProperty(user, "name", {
  writable: false, // можно изменить только один раз с true на false при configurrable false
  enumerable: true, // TypeError cannot redefine property при configurable false
  configurable: false,
});

const descriptor2 = Object.getOwnPropertyDescriptor(user, "name");
console.log(descriptor2);
