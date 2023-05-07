//of guard

type typeOfData = number | string;

const doSomething = (a: typeOfData): typeOfData => {
  if (typeof a === "number") {
    return a;
  }
  return a;
};

// console.log(doSomething(23));
// console.log(doSomething("hello"));

//in guard
type X = {
  name: string;
  phone: number;
};

type Y = {
  name: string;
  address: string;
  salary: number;
};

const getInfo = (info: X | Y) => {
  if ("phone" in info) {
    return `type A: phone : ${info.phone}`;
  } else if ("salary" in info) {
    return `type B: salary: ${info.salary}`;
  }
};

//instance of guard
class P {
  position: string;
  salary: number;

  constructor(position: string, salary: number) {
    this.position = position;
    this.salary = salary;
  }

  showDetails() {
    console.log(`position: ${this.position}`);
  }
}

class Q extends P {
  constructor(position: string, salary: number) {
    super(position, salary);
  }

  showSalary() {
    console.log(`salary : ${this.salary}`);
  }
}

class R extends P {
  constructor(position: string, salary: number) {
    super(position, salary);
  }

  showSalaryWithPosition() {
    console.log(`salary : ${this.salary} position: ${this.position}`);
  }
}

function findInstance(person: P) {
  if (person instanceof Q) {
    person.showSalary();
  }
  if (person instanceof R) {
    person.showSalaryWithPosition();
  }
}

const q4 = new Q("developer", 7000);
const q5 = new R("Junior", 7);
console.log(q4);
console.log(q5);
