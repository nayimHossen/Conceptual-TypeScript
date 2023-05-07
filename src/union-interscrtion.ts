type HeroType2 = {
  name: string;
  age?: number;
};

type HeroType3 = HeroType2 & {
  salary: number;
  position: string;
};

const HeroData: HeroType3 = {
  name: "Nayim",
  age: 23,
  salary: 2304,
  position: "Developer",
};

const myFavHero: HeroType2 | HeroType3 = {
  name: "nayim",
  //   age: 20,
  salary: 2039,
  position: "developer",
};
