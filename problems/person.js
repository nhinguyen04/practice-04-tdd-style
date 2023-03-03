class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, ${this.name}`;
  }

  visit(person) {
    return `${this.name} visited ${person.name}`;
  }

  switchVisit(person) {
    return person.visit(this);
  }

  update(object) {
    if (typeof object !== "object") {
      throw new TypeError("not an object");
    }

    if (!Object.hasOwn(object, "name") || !Object.hasOwn(object, "age")) {
      throw new TypeError("object has incorrect properties");
    }

    this.name = object.name;
    this.age = object.age;
    return this;
  }

  tryUpdate(object) {
    try {
      this.update(object);
      return true;
    } catch {
      return false;
    }
  }

  greetAll(personsArray) {
    let greetArray = [];

    personsArray.forEach((ele) => {
      greetArray.push(ele.sayHello());
    })

    return greetArray;
  }
}

module.exports = {
  Person,
}
