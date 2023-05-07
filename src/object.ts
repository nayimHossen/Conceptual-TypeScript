const heroObject: {
  heroName: string;
  readonly age: number;
  profession: string;
  isMarred?: boolean;
} = {
  heroName: "khan",
  age: 23,
  profession: "Actor",
  isMarred: false,
};

const { heroName, profession, isMarred } = heroObject;
