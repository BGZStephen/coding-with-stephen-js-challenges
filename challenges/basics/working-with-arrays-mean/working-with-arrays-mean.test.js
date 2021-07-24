const { meanValueOfArray } = require("./working-with-arrays-mean")

describe("meanValueOfArray", () => {
  test("returns mean values for positive numbers [2, 2]", () => {
    const res = meanValueOfArray([2, 2])

    expect(res).toBe(2)
  })

  test("returns mean values for positive numbers [3, 3]", () => {
    const res = meanValueOfArray([3, 3])

    expect(res).toBe(3)
  })

  test("returns mean values for positive numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    const res = meanValueOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    expect(res).toBe(5.5)
  })

  test("returns mean values for positive numbers [1]", () => {
    const res = meanValueOfArray([1])

    expect(res).toBe(1)
  })

  test("returns mean values for positive numbers [22, 33, 44, 55]", () => {
    const res = meanValueOfArray([22, 33, 44, 55])

    expect(res).toBe(38.5)
  })
})