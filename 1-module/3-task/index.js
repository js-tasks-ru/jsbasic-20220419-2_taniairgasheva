
function ucFirst(str) {
  let result = !str ? "" : str.charAt(0).toUpperCase() + str.slice(1);
  return result;
}
