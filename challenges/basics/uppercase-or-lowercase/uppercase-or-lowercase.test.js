const { toUpperOrLowerCase } = require("./uppercase-or-lowercase")

describe("toUpperOrLowerCase", () => {
  test('returns the string unchanged if no second argument is passed', () => {
    const res = toUpperOrLowerCase("string")

    expect(res).toBe("string")
  })

  test("returns the string unchanged the second argument doesn't match an operation (null)", () => {
    const res = toUpperOrLowerCase("string", null)

    expect(res).toBe("string")
  })

  test("returns the string unchanged the second argument doesn't match an operation (undefined)", () => {
    const res = toUpperOrLowerCase("string", undefined)

    expect(res).toBe("string")
  })

  test("returns the string unchanged the second argument doesn't match an operation (integer)", () => {
    const res = toUpperOrLowerCase("string", 1)

    expect(res).toBe("string")
  })

  test("returns the string unchanged the second argument doesn't match an operation (non matching string)", () => {
    const res = toUpperOrLowerCase("string", "invalid option")

    expect(res).toBe("string")
  })

  test("returns the string in upper case if the operation passed is upperCase", () => {
    const res = toUpperOrLowerCase("string", "upperCase")

    expect(res).toBe("STRING")
  })

  test("returns the string in lower case if the operation passed is lowerCase", () => {
    const res = toUpperOrLowerCase("STRING", "lowerCase")

    expect(res).toBe("string")
  })
})