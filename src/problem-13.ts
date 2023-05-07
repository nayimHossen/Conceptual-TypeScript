function getFirstElement<T extends number | string>(arr: T[]) {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

const myArr = ["a", "b", "c"];
console.log(getFirstElement(myArr));
