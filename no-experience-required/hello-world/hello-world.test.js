const { helloWorld } = require("./hello-world")

describe("helloWorld", () => {
  test("returns hello world successfully", () => {
    const res = helloWorld();

    expect(res).toEqual("Hello World")
  })
})