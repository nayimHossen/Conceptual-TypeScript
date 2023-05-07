const isHeroAvailable: boolean = true;

if (isHeroAvailable) {
  console.log("book now");
} else {
  console.log("you can not book");
}

const checkAvailablity = isHeroAvailable ? "Book now" : "you can not book";

//nullish operator

//check null and undefined
/**
 * null = no input
 * undefined = no input
 * hero = hello
 * true = true
 * 4 = 4
 * "" = ""
 */

const inputSomeThing: unknown = "Hello";
const checkInput = inputSomeThing ?? "No input";
console.log(checkInput);
