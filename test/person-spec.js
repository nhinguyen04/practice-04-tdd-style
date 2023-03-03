const chai = require("chai");
const expect = chai.expect;

const { Person } = require("../problems/person");

describe ("Person class", function () {
    let person;
    let person2;

    beforeEach(() => {
        person = new Person("John-Doe", 20);
        person2 = new Person("Jenny", 25);
    });

    it ("properties name and age should exist", function () {
        expect(person.name).to.exist;
        expect(person.age).to.exist;
    });

    it ("should correctly instantiate a person class with name and age", function () {
        expect(person.name).to.equal("John-Doe");
        expect(person.age).to.equal(20);
    });

    it ("sayHello() should return string of person name and greeting message", function () {
        expect(person.sayHello()).to.equal("Hello, John-Doe");
    });

    it ("visit(otherPerson) should returns 'person1 visited person2'", function () {
        expect(person.visit(person2)).to.equal("John-Doe visited Jenny");
    });

    it ("switchVisit(otherPerson) should return 'person2 visited person1'", function () {
        expect(person.switchVisit(person2)).to.equal("Jenny visited John-Doe");
    });

    describe ("method update(object)", function () {
        let notObject;
        let goodObject;
        let badObject;

        beforeEach(() => {
            notObject = 5;
            goodObject = {name: "Mai", age: 23};
            badObject = {};
        });

        it ("should throw error if argument is not a valid object", function () {
            expect(person.update.bind(notObject)).to.throw(TypeError);
        });

        it ("should throw error if argument does not have name and age property", function () {
            expect(person.update.bind(badObject)).to.throw(TypeError);
        });

        it ("should update properties to match passed in object's values", function () {
            const newPerson = person.update(goodObject);
            expect(newPerson.name).to.equal(goodObject.name);
            expect(newPerson.age).to.equal(goodObject.age);
        });
    });

    describe ("method tryUpdate(object)", function () {
        let notObject;
        let goodObject;
        let badObject;

        beforeEach(() => {
            notObject = 5;
            goodObject = {name: "Mai", age: 23};
            badObject = {};
        });

        it ("should return false if update was unsuccessfully invoked", function () {
            expect(person.tryUpdate(goodObject)).to.equal(true);
        });

        it ("should return true if update was invoked successfully", function () {
            expect(person.tryUpdate(badObject)).to.equal(false);
        });

        it ("should correctly update properties", function () {
            person.tryUpdate(goodObject);
            expect(person.name).to.equal(goodObject.name);
            expect(person.age).to.equal(goodObject.age);
        });
    });

    describe ("method greetAll(object)", function () {
        let personArray = [];

        beforeEach(() => {
            const person3 = new Person("Lulu", 15);
            const person4 = new Person("Lala", 16);
            personArray = [person, person2, person3, person4];
        });

        it ("greetAll(array) should return array of greetings to each person", function () {
            const expectResult = ["Hello, John-Doe", "Hello, Jenny", "Hello, Lulu", "Hello, Lala"];
            expect(person.greetAll(personArray)).to.deep.equal(expectResult);
        });
    });

});
