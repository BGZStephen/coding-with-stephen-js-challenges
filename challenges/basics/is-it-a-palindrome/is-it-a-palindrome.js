function isAPalindrome(string) {
  return string === string.split("").reverse().join("")
}

module.exports = {
  isAPalindrome
}