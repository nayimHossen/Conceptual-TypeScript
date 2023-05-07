//type assertion

const thinkSomeThing: unknown = 34.7754;
const result = (thinkSomeThing as string).length;

const myLuckyNum = (num: string | number): number | string | undefined => {
  if (typeof num === "string") {
    return "This is string";
  }
  return num;
};
