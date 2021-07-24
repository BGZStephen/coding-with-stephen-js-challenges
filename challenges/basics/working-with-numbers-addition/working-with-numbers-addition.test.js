const { sumTwoNumbers } = require("./working-with-numbers-addition")

describe("sumTwoNumbers", () => {
  test("returns summed values for positive numbers", () => {
    const res = sumTwoNumbers(10, 35)

    expect(res).toBe(45)
  })

  test("returns summed values for positive numbers with the first being 0", () => {
    const res = sumTwoNumbers(0, 35)

    expect(res).toBe(35)
  })

  test("returns summed values for positive numbers with the second being 0", () => {
    const res = sumTwoNumbers(35, 0)

    expect(res).toBe(35)
  })

  test("returns summed values for positive numbers with the both being 0", () => {
    const res = sumTwoNumbers(0, 0)

    expect(res).toBe(0)
  })

  test("returns summed values for a mix of positive and negative numbers", () => {
    const res = sumTwoNumbers(100, -50)

    expect(res).toBe(50)
  })
})