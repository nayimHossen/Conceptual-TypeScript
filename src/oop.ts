//create a class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Nayim", 23);
// console.log(person1);

//inheritance
class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(`Name ${this.name} age ${this.age}`);
  }
}

class Person2 extends Person1 {
  salary: number;
  position: string;

  constructor(name: string, age: number, salary: number, position: string) {
    super(name, age);
    this.salary = salary;
    this.position = position;
  }

  show() {
    console.log(
      `Name ${this.name} age ${this.age} salary ${this.salary} position ${this.position}`
    );
  }
}

const person2 = new Person1("Khan", 23);
const person3 = new Person2("Khan", 23, 2002, "developer");
person2.show();
person3.show();
