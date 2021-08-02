const { getMiddleItem } = require("./get-middle-item-from-array")

describe("getMiddleItem", () => {
  test('returns [] for []', () => {
    const res = getMiddleItem([])

    expect(res).toBe([])
  })

  test('returns 2 for [1, 2, 3]', () => {
    const res = getMiddleItem([1, 2, 3])

    expect(res).toBe(undefined)
  })

  test('returns [2, 3] for [1, 2, 3, 4]', () => {
    const res = getMiddleItem([1, 2, 3, 4])

    expect(res).toBe([2, 3])
  })
})