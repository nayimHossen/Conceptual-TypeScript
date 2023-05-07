type MyArray<T> = Array<T>;

//T = number
//Array<number>

//generic type in array
const myNumber: MyArray<number> = [1, 2, 4, 5];
const myString: MyArray<string> = ["a", "b", "c"];
const myBoolean: MyArray<boolean> = [true, false];

//generic type in object array
type dataType = { name: string; age: number };
const ourInfo: MyArray<dataType> = [
  { name: "Nayim", age: 80 },
  { name: "sultan", age: 60 },
  { name: "Khan", age: 20 },
  { name: "Hossen", age: 50 },
];

//tuple in generic
type MyGenType<X, Y, Z> = [X, Y, Z];
const A: MyGenType<string, number, boolean> = ["23", 34, true];
const B: MyGenType<number, boolean, string> = [23, true, "Hello"];

//generic in function

const printInfo = <X, Y>(param1: X, param2: Y) => {
  console.log(`param1: ${param1} param2: ${param2}`);
  return param1;
};

printInfo<string, number>("Nayim", 32);
printInfo<number, number>(234, 32);
printInfo<number, boolean>(234, true);

//generic in interface

interface IMe<T> {
  name: string;
  age: T;
  mark: number;
}

const me: IMe<string> = {
  name: "Nayim",
  age: "23 years",
  mark: 59,
};

//keyof
type MoveType = {
  name: string;
  duration: number;
  category: string;
};

// type test = "name" | "duration" | "category"
// const myTest : test = ""

const data: MoveType = {
  name: "KGF",
  duration: 2000,
  category: "Action",
};

type MyMovieType = keyof MoveType; // "name" | "duration" | "category"

const myTestMovie: MyMovieType = "category";
