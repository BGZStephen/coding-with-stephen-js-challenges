const { areTheseTheSame } = require("./are-these-the-same")

describe("areTheseTheSame", () => {
  test('returns true for number / number', () => {
    const res = areTheseTheSame(1, 1)

    expect(res).toBe(true)
  })

  test('returns false for number / string representation of the number', () => {
    const res = areTheseTheSame(1, "1")

    expect(res).toBe(false)
  })

  test('returns true for true / true', () => {
    const res = areTheseTheSame(true, true)

    expect(res).toBe(true)
  })

  test('returns false for true / false', () => {
    const res = areTheseTheSame(true, false)

    expect(res).toBe(false)
  })

  test('returns false for NaN / NaN', () => {
    const res = areTheseTheSame(NaN, NaN)

    expect(res).toBe(false)
  })

  test('returns false for [] / []', () => {
    const arr = []
    const res = areTheseTheSame(arr, arr)

    expect(res).toBe(true)
  })

  test('returns false for [1] / []', () => {
    const res = areTheseTheSame([1], [])

    expect(res).toBe(false)
  })

  test('returns false for {} / {}', () => {
    const obj = {}
    const res = areTheseTheSame(obj, obj)

    expect(res).toBe(true)
  })

  test('returns false for {property: true} / {}', () => {
    const res = areTheseTheSame({property: true}, {})

    expect(res).toBe(false)
  })
})