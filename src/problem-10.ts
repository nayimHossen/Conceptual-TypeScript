function convertToUpperCase(
  str: string | string[]
): string | string[] | undefined {
  if (typeof str === "string") {
    return str.toUpperCase();
  } else if (Array.isArray(str)) {
    return str.map((s) => s.toUpperCase());
  }
}

console.log(convertToUpperCase(["hello", "nayim"]));
