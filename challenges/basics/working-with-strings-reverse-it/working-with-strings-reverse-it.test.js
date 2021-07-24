const { reverseAString } = require("./working-with-strings-reverse-it")

describe("reverseAString", () => {
  test('returns reversed string "abcdefghijklmnopqrstuvwxyz"', () => {
    const res = reverseAString("abcdefghijklmnopqrstuvwxyz")

    expect(res).toBe("zyxwvutsrqponmlkjihgfedcba")
  })

  test('returns reversed string "aBcDeFgHiJkLmNoPqRsTuVwXyZ"', () => {
    const res = reverseAString("aBcDeFgHiJkLmNoPqRsTuVwXyZ")

    expect(res).toBe("ZyXwVuTsRqPoNmLkJiHgFeDcBa")
  })

  test('returns reversed string "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."', () => {
    const res = reverseAString("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

    expect(res).toBe(".auqila angam erolod te erobal tu tnudidicni ropmet domsuie od des ,tile gnicsipida rutetcesnoc ,tema tis rolod muspi meroL")
  })
})