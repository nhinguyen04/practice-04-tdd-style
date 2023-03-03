const chai = require("chai"),
    spies = require("chai-spies");

chai.use(spies);
const expect = chai.expect;

const { myMap } = require("../problems/my-map");

describe ("Function myMap", function () {
    let array = [];
    const cbDouble = (el) => el * 2;
    const callbackSpy = chai.spy(cbDouble);

    it ("should apply callback to all in array", function () {
        array = [1, 2, 3];
        expect(myMap(array, cbDouble)).to.deep.equal([2, 4, 6]);

        array = [3, 4, 5];
        expect(myMap(array, cbDouble)).to.deep.equal([6, 8, 10]);
    });

    it ("should not mutate the passed-in array", function () {
        array = [1, 2, 3];
        myMap(array, cbDouble);
        expect(array).to.deep.equal([1, 2, 3]);

        array = [3, 4, 5];
        myMap(array, cbDouble);
        expect(array).to.deep.equal([3, 4, 5]);
    });

    it ("should not call the built in Array.map", function () {
        const spy = chai.spy.on(array, 'map');
        expect(spy).to.not.have.been.called();
    });

    it ("should invoke callback once for every element of array", function () {
        array = [1, 2, 3];
        myMap(array, callbackSpy);
        expect(callbackSpy).to.have.been.called.exactly(array.length);
    });
});
