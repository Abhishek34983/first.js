function sortNumerically(arr) {
    return arr.sort(function(a, b){return a-b});// You only need to implement this function.
  };

  arr = [9, 1, 6, 5, 4, 10];

  console.log(sortNumerically(arr));