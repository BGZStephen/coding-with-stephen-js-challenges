const { reverseANumber } = require("./working-with-numbers-reverse-it")

describe("reverseANumber", () => {
  test('returns reversed number 987654321', () => {
    const res = reverseANumber(1234567890)

    expect(res).toBe(987654321)
  })

  test('returns reversed number 11211', () => {
    const res = reverseANumber(11211)

    expect(res).toBe(11211)
  })

  test('returns reversed number -201', () => {
    const res = reverseANumber(-102)

    expect(res).toBe(201)
  })

  test('returns reversed number 0', () => {
    const res = reverseANumber(0)

    expect(res).toBe(0)
  })
})