const { getMiddleItem } = require("./get-middle-item-from-array")

describe("getMiddleItem", () => {
  test('returns [] for []', () => {
    const res = getMiddleItem([])

    expect(res).toEqual([])
  })

  test('returns 2 for [1, 2, 3]', () => {
    const res = getMiddleItem([1, 2, 3])

    expect(res).toEqual([2])
  })

  test('returns [2, 3] for [1, 2, 3, 4]', () => {
    const res = getMiddleItem([1, 2, 3, 4])

    expect(res).toEqual([2, 3])
  })
})