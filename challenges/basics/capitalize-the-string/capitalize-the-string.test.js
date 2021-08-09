const { capitalize } = require("./capitalize-the-string")

describe("capitalize", () => {
  test('returns "Hello"', () => {
    const res = capitalize("hello")

    expect(res).toBe("Hello")
  })

  test('returns "Bjorn"', () => {
    const res = capitalize("bjorn")

    expect(res).toBe("Bjorn")
  })

  test('returns "1001"', () => {
    const res = capitalize("1001")

    expect(res).toBe("1001")
  })

  test('returns ""', () => {
    const res = capitalize("")

    expect(res).toBe("")
  })
})