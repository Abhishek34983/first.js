function halfValues(arr) {
    result= [];
    for(let i=0;i<arr.length;i++){
      result.push(arr[i]/(i+1));
      }
      return result;// You only need to implement this function.
  }

arr=[2,3,4];

  console.log(halfValues(arr));