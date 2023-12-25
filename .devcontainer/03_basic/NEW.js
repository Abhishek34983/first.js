function multiplyThree(arr) {
    let ajj = arr.map(myFunction);
      function myFunction(num) {
      return num * 3;
  }
  return ajj;
    // You only need to implement this function.
  }

  arr = [1, 2, 3];

  console.log(multiplyThree(arr));