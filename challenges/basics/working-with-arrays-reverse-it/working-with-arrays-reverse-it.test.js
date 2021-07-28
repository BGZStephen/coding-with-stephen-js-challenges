const { reverseAnArray } = require("./working-with-arrays-reverse-it")

describe("reverseAnArray", () => {
  test('returns reversed array []', () => {
    const res = reverseAnArray([])

    expect(res).toEqual([])
  })

  test('returns reversed array ["a", "b", "c"]', () => {
    const res = reverseAnArray(["a", "b", "c"])

    expect(res).toEqual(["c", "b", "a"])
  })

  test('returns reversed array [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    const res = reverseAnArray([1, 2, 3, 4, 5, 6, 7, 8, 9])

    expect(res).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1])
  })
})