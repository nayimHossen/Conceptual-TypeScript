//null
const myText = (text: string | null): void => {
  if (text === null) {
    console.log(`I have no text`);
  } else {
    console.log(text);
  }
};

myText(null);
myText("This not a null value");

//unknown

const guessSomeThing = (myGuess: unknown) => {
  console.log(myGuess);
};

guessSomeThing("hd");
guessSomeThing(2);
guessSomeThing(true);
guessSomeThing(null);
guessSomeThing(undefined);
