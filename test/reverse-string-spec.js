const { expect } = require("chai");

const reverseString = require("../problems/reverse-string");

describe ("Function reverseString", function () {
    it("should successfully reverses a string", function () {
        let string = "fun";
        expect(reverseString(string)).to.equal("nuf");
    });
});
