function checkSpam(str) {
  str = str.toLowerCase();
  let result = str.includes('1xbet') || str.includes('xxx') ? true : false;
  return result;
}
