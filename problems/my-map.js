function myMap(inputArray, callback) {
  let resultArray = [];

  inputArray.forEach((ele) => {
    resultArray.push(callback(ele));
  })

  return resultArray;
}

const array = [1, 2, 3];

console.log(myMap(array, (ele) => ele * 2));


//-----
module.exports = {
  myMap,
};
