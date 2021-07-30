const { findTheLargestNumber } = require("./find-the-largest-number")

describe("findTheLargestNumber", () => {
  test('returns 1000 for the argument [1, 100, 1000]', () => {
    const res = findTheLargestNumber([1, 100, 1000])

    expect(res).toBe(1000)
  })

  test('returns 100 for the argument [-1, 100, -1000]', () => {
    const res = findTheLargestNumber([-1, 100, -1000])

    expect(res).toBe(100)
  })

  test('returns 1 for the argument [1]', () => {
    const res = findTheLargestNumber([1])

    expect(res).toBe(1)
  })
})