function evenCubeSum(arr) {
    let sum=0;
    for (let i=0;i<arr.length;i++){
      if (arr[i]%2==0) {
       sum +=Math.pow(arr[i],3);
      }
    }
    return sum;
  }
  

  let arr = [1, 2, 3, 4];

  console.log(evenCubeSum(arr));