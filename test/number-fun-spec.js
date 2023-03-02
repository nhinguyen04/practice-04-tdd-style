const { expect } = require("chai");

const { returnsThree, reciprocal } = require("../problems/number-fun");

describe ("Function returnsThree", function () {
    it ("function should return 3", function () {
        expect(returnsThree()).to.equal(3);
    });
});

describe ("Function reciprocal", function () {
    describe ("With valid inputs", function () {
        it ("should take a number and return the reciprocal", function () {
            expect(reciprocal(4)).to.equal(.25);
            expect(reciprocal(20)).to.equal(1/20);
            expect(reciprocal(55)).to.equal(1/55);
        });

        it ("should return reciprocal with decimal", function () {
            expect(reciprocal(4.4)).to.equal(1/4.4);
            expect(reciprocal(2.2)).to.equal(1/2.2);
            expect(reciprocal(55.55)).to.equal(1/55.55);
        });

        it ("should return reciprocal of a fraction", function () {
            expect(reciprocal(10/5)).to.equal(5/10);
            expect(reciprocal(8/3)).to.equal(3/8);
            expect(reciprocal(101/9)).to.closeTo(9/101, 0.0000001);
        });
    });

    describe ("With invalid inputs", function () {
        it ("should throw an error if argument is higher than 1,000,000 or lower than 1", function () {
            expect(() => reciprocal(1000001)).to.throw(Error);
            expect(() => reciprocal(-2)).to.throw(Error);
            expect(() => reciprocal(3/8)).to.throw(Error);
        });
    });
});
