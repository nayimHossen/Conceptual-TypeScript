//speed operator

const heroArrow1: string[] = ["khan", "Nayim", "hossen"];
const heroArrow2: string[] = ["sultan", "sultana", "Halima"];

const [hero1, hero2, hero3] = heroArrow1;
console.log(hero1, hero2, hero3);

heroArrow1.push(...heroArrow2);
// console.log(heroArrow1);

//rest parameter
const heroScore = (...score: number[]): number => {
  let sum: number = 0;
  score.map((n) => (sum = sum + n));
  return sum;
};

console.log(heroScore(4, 5, 6, 2));

const heroString = (...string: string[]): void => {
  string.map((str) => console.log(str));
};
// heroString("Nayim", "Hossen", "Sultana");
