const { convertToMilliseconds } = require("./convert-time-to-milliseconds")

describe("convertToMilliseconds", () => {
  test('returns the required for 1 hours, 0 minutes, 0 seconds', () => {
    const res = convertToMilliseconds(1, 0, 0)

    expect(res).toBe(3600000)
  })

  test('returns the required for 0 hours, 1 minute, 0 seconds', () => {
    const res = convertToMilliseconds(0, 1, 0)

    expect(res).toBe(60000)
  })

  test('returns the required for 0 hours, 0 minutes, 30 seconds', () => {
    const res = convertToMilliseconds(0, 0, 30)

    expect(res).toBe(30000)
  })
  
  test('returns the required for 12 hours, 10 minutes, 30 seconds', () => {
    const res = convertToMilliseconds(12, 10, 30)

    expect(res).toBe(43830000)
  })

  test('returns the required for 120 hours, 900 minutes, 600 seconds', () => {
    const res = convertToMilliseconds(120, 900, 600)

    expect(res).toBe(486600000)
  })
})