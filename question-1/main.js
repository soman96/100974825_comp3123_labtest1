// question one
const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve) => {
    const result = mixedArray.filter((item) => typeof item === "string").map((word) => word.toLowerCase());
    resolve(result);
  });
};

// call the function which returns a promise
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
lowerCaseWords(mixedArray).then((result) => console.log(result));
