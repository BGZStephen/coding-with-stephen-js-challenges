const { isPasswordValid } = require("./password-validator")

describe("isPasswordValid", () => {
  test('returns true for "Password123"', () => {
    const res = isPasswordValid("Password123")

    expect(res).toBe(true)
  })

  test('returns true for "6xJQmqyn6AqPR2d6fXvkLPx3hh9EGEQW6KQggtzvGBhcVtD8b79suTPsjRq5"', () => {
    const res = isPasswordValid("6xJQmqyn6AqPR2d6fXvkLPx3hh9EGEQW6KQggtzvGBhcVtD8b79suTPsjRq5")

    expect(res).toBe(true)
  })

  test('returns false for "password"', () => {
    const res = isPasswordValid("password")

    expect(res).toBe(false)
  })

  test('returns false for "12345678910"', () => {
    const res = isPasswordValid("12345678910")

    expect(res).toBe(false)
  })


  test('returns false for "password123"', () => {
    const res = isPasswordValid("password123")

    expect(res).toBe(false)
  })

  test('returns false for "PASSWORD123"', () => {
    const res = isPasswordValid("PASSWORD123")

    expect(res).toBe(false)
  })

  test('returns false for null', () => {
    const res = isPasswordValid(null)

    expect(res).toBe(false)
  })

  test('returns false for undefined', () => {
    const res = isPasswordValid(undefined)

    expect(res).toBe(false)
  })

  test('returns false for 1', () => {
    const res = isPasswordValid(1)

    expect(res).toBe(false)
  })

  test('returns false for {}', () => {
    const res = isPasswordValid({})

    expect(res).toBe(false)
  })

  test('returns false for []', () => {
    const res = isPasswordValid([])

    expect(res).toBe(false)
  })
})