function oddNumbers(n){
    let odd = [];
    let j = 1;
    for (i=1;i<=n;i=i+2){
      odd.push(i);
    }
    return odd;
  }

  console.log(oddNumbers(10));