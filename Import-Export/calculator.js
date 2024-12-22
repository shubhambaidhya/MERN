const doSum = (x, y) => {
  return x + y;
};

const sayHello = (name = "user") => {
  console.log(`hello ${name}`);
};

const PI = Math.PI;
export { doSum, sayHello, PI }; //normal export
