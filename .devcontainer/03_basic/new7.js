function createPhoneNumber(arr){
    let ne = "xxxxxxxxxx";
      for (let i = 0; i < arr.length; i=i+1) {
        ne = ne.replace('x',arr[i]);
    }
    return ne;
    }

let arr = [1,2,3,4,5,6,7,8,9,0];

console.log(createPhoneNumber(arr));