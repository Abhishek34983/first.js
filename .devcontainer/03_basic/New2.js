function checkNonDecreasing(arr) {
    for (i=0;i<arr.length;i++){
      if(arr[i]<arr[i+1]){
          result =true;
        }
        else{
          result = false;
        }
    }
    return result;
  }

  let arr = [6, 9, 10, 12];

  console.log(checkNonDecreasing(arr));