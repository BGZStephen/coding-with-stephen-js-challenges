function fizzBuzz(number) {
  let res = "";
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res += "fizzBuzz\n"
    } else if (i % 5 === 0) {
      res += "buzz\n"
    } else if (i % 3 === 0) {
      res += "fizz\n"
    } else {
      res += `${i}\n`
    }
  }

  return res;
}

module.exports = {
  fizzBuzz
}