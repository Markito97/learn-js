class User {
  constructor(aboba) {
    this._aboba = aboba;
    console.log(aboba);
  }

  someHandler = () => {
    console.log(this);
  };

  get aboba() {
    return this._aboba;
  }
}

const test = new User({ aboba: "aboba" });
test.someHandler();
console.log(test);
