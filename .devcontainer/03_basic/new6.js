function sumTwoArrays(arr1, arr2) {
    let ne = arr1.concat(arr2);
    let sum = 0;
    for (i=0;i<=ne.length-1;i=i+1){
      sum = sum+ne[i];
    }
    return sum;
  }

  let arr1=[2,3];
  let arr2=[1,2,3];

  console.log(sumTwoArrays(arr1,arr2));