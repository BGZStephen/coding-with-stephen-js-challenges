const { sortAnArray } = require("./sort-an-array-of-numbers")

describe("sortAnArray", () => {
  test('returns the sorted array [9, 8, 7, 6, 5, 4, 3, 2, 1]', () => {
    const res = sortAnArray([9, 8, 7, 6, 5, 4, 3, 2, 1])

    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  test('returns the sorted array [1, 10, 100, 2, 20, 300]', () => {
    const res = sortAnArray([1, 10, 100, 2, 20, 300])

    expect(res).toEqual([1, 2, 10, 20, 100, 300])
  })

  test('returns the sorted array [1, -10, 100, -2, 20, 300]', () => {
    const res = sortAnArray([1, -10, 100, -2, 20, 300])

    expect(res).toEqual([-10, -2, 1, 20, 100, 300])
  })
})