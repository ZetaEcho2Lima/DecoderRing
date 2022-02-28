const { expect } = require("chai")
const { caesar } = require("../src/caesar")

// Write your tests here!
describe("caesar",() => {
    it("should return an encoded message when set to true", () =>{
const input="thinkful"
const actual=caesar(input)
expect(actual).to.be.false
})
it("should return false if shift value is greater than 25", () => {
    const input = "thinkful"
    const shift = 50;
    const actual = caesar(input, shift)
    expect(actual).to.be.false;
})
it("should encode a given string by a given shift value", () => {
    const input = "thinkful";
    const shift = 3;
    const expected = "wklqnixo";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
})
it("should encode a string by shift value", () => {
    const input = "thinkful";
    const shift = 3;
    const expected = "wklqnixo";
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
})
it("should decode if encode is false", () => {
    const input = "wklqnixo";
    const shift = 3;
    const encode = false;
    const actual = caesar(input, shift, encode);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
it("should handle shifts that go abouve 122 on the charcode thing", () => {
    const input1 = "z";
    const shift = 3;
    const encode = true;
    const actual = caesar(input1, shift, encode);
    const expected = "c";
    expect(actual).to.equal(expected);
  });
  it("should handle shifts that go below 97 on the charcode thing", () => {
    const input1 = "a";
    const shift = -3;
    const encode = true;
    const actual = caesar(input1, shift, encode);
    const expected = "x";
    expect(actual).to.equal(expected);
  });
  it("spaces and special characters should still exist", () => {
    const input = " @#$% *()@";
    const shift = -3;
    const actual = caesar(input, shift, (encode = true));
    const expected = " @#$% *()@";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const message = "beepBOOP";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "ehhserrs";
    expect(actual).to.equal(expected);
  });
})