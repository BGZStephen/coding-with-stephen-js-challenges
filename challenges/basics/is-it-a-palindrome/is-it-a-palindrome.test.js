const { isAPalindrome } = require("./is-it-a-palindrome")

describe("isAPalindrome", () => {
  test('returns true for "ollo"', () => {
    const res = isAPalindrome("ollo")

    expect(res).toBe(true)
  })

  test('returns true for "hannah"', () => {
    const res = isAPalindrome("hannah")

    expect(res).toBe(true)
  })

  test('returns false for "Hannah"', () => {
    const res = isAPalindrome("Hannah")

    expect(res).toBe(false)
  })
  
  test('returns false for "Hello"', () => {
    const res = isAPalindrome("hello")

    expect(res).toBe(false)
  })
})