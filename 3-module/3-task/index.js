function camelize(str) {
  let word = str.split("-");

  if (str.startsWith("-")) {
    return arrayToPascalCase(word);
  }
  return word[0] + arrayToPascalCase(word.slice(1));
}

function arrayToPascalCase(arr) {
  return arr.map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join("");
}
