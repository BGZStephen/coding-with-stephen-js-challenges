const { invertTheNumbers } = require("./invert-the-numbers")

describe("invertTheNumbers", () => {
  test('returns the required for [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9]', () => {
    const res = invertTheNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9])

    expect(res).toEqual([-1, -2, -3, -4, -5, -6, -7, -8, -9, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  test('returns the required for [1, 25, -37, 68]', () => {
    const res = invertTheNumbers([1, 25, -37, 68])

    expect(res).toEqual([-1, -25, 37, -68])
  })

  test('returns the required for [9584, -17526, -40125, 668952]', () => {
    const res = invertTheNumbers([9584, -17526, -40125, 668952])

    expect(res).toEqual([-9584, 17526, 40125, -668952])
  })
})