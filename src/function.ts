//normal function

function heroNormalFunc(a: number, b: number): number {
  const sum = a + b;
  return sum;
}

heroNormalFunc(2, 2);

//arrow function
const heroArrowFunc = (c: number, d: number): number => {
  return c + d;
};

heroArrowFunc(2, 3);
