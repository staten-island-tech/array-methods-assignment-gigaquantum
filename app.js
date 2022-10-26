const arr = [
  { name: "alpha", numbers: [2, 4, 6, 8], float: 2.9, iceCream: "Vanilla" },
  { name: "beta", numbers: [3, 6, 9, 12], float: 8.6, iceCream: "Chocolate" },
  { name: "gamma", numbers: [1, 2, 4, 8], float: 4.8, iceCream: "Stawberry" },
  {
    name: "delta",
    numbers: [2.5, -2.5, 5.5, -5.5],
    float: 9.1,
    iceCream: "Mint",
  },
];

function arrNames() {
  console.log("Array Names:")
  arr.forEach(object => {
    console.log(object.name);
  });
}

function arrNumbers() {
  console.log("Array Numbers:")
  arr.forEach(object => {
  object.numbers.forEach(numArr => {
    console.log(numArr);
  });
});
}

function arrFilter() {
  const filteredArr = arr.filter(object => {
    return object.float > 5
  });
  console.log("Filtered Array:");
  console.log(filteredArr);
}

arrNames();
arrNumbers();
arrFilter();