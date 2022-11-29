module.exports = function reverse (n) {
  let string = n.toString();
  if (n > 0) {
  let reversed = string.split('').reverse().join('');
    return reversed;
  } else {
    string = string.substring(1);
    return reversed = string.split('').reverse().join('');
  }
}
