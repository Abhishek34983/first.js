function findFibonacci(n) {
    var n1 = 0;
    var n2 = 1;
    var sum;
    if (n==0) {
      return 0;
    } else if (n==1) {
      return 1;
    } else if (n==2) {
      return 1;
    } else {
      for (var i = 0; i < n; i++) {
        sum = n1+n2;
        n1 = n2;
        n2 = sum;
      }
      return n1;
    }
  }

  console.log(findFibonacci(5));