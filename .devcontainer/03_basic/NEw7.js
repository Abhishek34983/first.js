function createBase(baseNumber) {
    console.log(baseNumber);
    return function(N) {
      return baseNumber + N;
    }
  }
  
  var addSix = createBase(6);
  console.log(addSix(10));
