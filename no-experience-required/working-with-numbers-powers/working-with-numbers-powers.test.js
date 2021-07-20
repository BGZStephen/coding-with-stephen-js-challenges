const { toThePowerOf } = require("./working-with-numbers-powers")

describe("sumTwoNumbers", () => {
  test("returns values for positive numbers 1 & 10", () => {
    const res = toThePowerOf(1, 10)

    expect(res).toBe(1)
  })

  test("returns values for positive numbers 2 & 2", () => {
    const res = toThePowerOf(2, 2)

    expect(res).toBe(4)
  })

  test("returns values for positive numbers 3 & 3", () => {
    const res = toThePowerOf(3, 3)

    expect(res).toBe(27)
  })

  test("returns values for positive numbers 10 & 10", () => {
    const res = toThePowerOf(10, 10)

    expect(res).toBe(10000000000)
  })

  test("returns values for positive numbers 0 & 10", () => {
    const res = toThePowerOf(0, 10)

    expect(res).toBe(0)
  })
})