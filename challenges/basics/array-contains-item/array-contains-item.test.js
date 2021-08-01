const { arrayContainsItem } = require("./array-contains-item")

describe("arrayContainsItem", () => {
  test('returns true if the item exists: 1', () => {
    const res = arrayContainsItem([1, -1, 100, -100], 1)

    expect(res).toBe(true)
  })

  test('returns true if the item exists: "anItem"', () => {
    const res = arrayContainsItem(["someItem", "anItem", "someOtherItem"], "anItem")

    expect(res).toBe(true)
  })

  test('returns true if the item exists: true', () => {
    const res = arrayContainsItem(["someItem", "anItem", true, "someOtherItem"], true)

    expect(res).toBe(true)
  })

  test(`returns false if the item doesn't exist: true`, () => {
    const res = arrayContainsItem(["someItem", "anItem", false, "someOtherItem"], true)

    expect(res).toBe(false)
  })

  test(`returns false if the item doesn't exist: "anItem"`, () => {
    const res = arrayContainsItem(["someItem", false, "someOtherItem"], true)

    expect(res).toBe(false)
  })

  test(`returns false if the item doesn't exist: 1`, () => {
    const res = arrayContainsItem([-1, 100, 200, -999], 1)

    expect(res).toBe(false)
  })
})