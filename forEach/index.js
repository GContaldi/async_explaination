const myArray = [1, 2, 3];

console.log('standard way');
myArray.forEach((value, index) => {
  console.log(`index: ${index}, value ${value}`);
});

console.log('our implementation');

const forEach = () => {};

forEach(myArray, (value, index) => {
  console.log(`index: ${index}, value ${value}`);
});
