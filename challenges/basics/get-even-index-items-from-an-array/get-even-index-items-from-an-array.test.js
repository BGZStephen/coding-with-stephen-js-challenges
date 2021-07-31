const { getEvenIndexItems } = require("./get-even-index-items-from-an-array")

describe("getEvenIndexItems", () => {
  test('returns the filtered array []', () => {
    const res = getEvenIndexItems([])

    expect(res).toEqual([])
  })

  test('returns the sorted array [0, 1, 2, 3, 4, 5, 6, 7, 8]', () => {
    const res = getEvenIndexItems([0, 1, 2, 3, 4, 5, 6, 7, 8])

    expect(res).toEqual([0, 2, 4, 6, 8])
  })

  test('returns the sorted array [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    const res = getEvenIndexItems([1, 2, 3, 4, 5, 6, 7, 8])

    expect(res).toEqual([1, 3, 5, 7])
  })
})