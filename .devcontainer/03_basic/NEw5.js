function manipulatingArray(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if (arr[i]%2==0){
            result.push(arr[i]+5);
        }
        else{
            result.push(arr[i]*5);
        }
    }
    return result;
}
var arr = [9,1,7,4];

console.log(manipulatingArray(arr));