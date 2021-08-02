const { fizzBuzz } = require("./fizz-buzz")

describe("fizzBuzz", () => {
  test('returns valid response for 1', () => {
    const res = fizzBuzz(1)

    expect(res).toBe("1\n")
  })

  test('returns valid response for 3', () => {
    const res = fizzBuzz(3)

    expect(res).toBe("1\n2\nfizz\n")
  })

  test('returns valid response for 5', () => {
    const res = fizzBuzz(5)

    expect(res).toBe("1\n2\nfizz\n4\nbuzz\n")
  })

  test('returns valid response for 9', () => {
    const res = fizzBuzz(9)

    expect(res).toBe("1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\n")
  })

  test('returns valid response for 15', () => {
    const res = fizzBuzz(15)

    expect(res).toBe("1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\nbuzz\n11\nfizz\n13\n14\nfizzBuzz\n")
  })
})