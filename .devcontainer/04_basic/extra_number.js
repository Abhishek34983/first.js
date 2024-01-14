function findLocalPeak(N, arr) {
    var result=[];
    if (N == 1) {result.push(arr[0]);};
    if (arr[0]>arr[1]) {result.push(arr[0]);}
    if (arr[N-1] >= arr[N-2]) {result.push(arr[N-1]);}
    for (let i=1;i<=arr.length;i++){
        if(arr[i-1]<arr[i] && arr[i]>arr[i+1]){
            result.push(arr[i]);
        }
    }
    return result;
}

let arr = [791, 268, 468, 886, 388, 2, 452, 102, 445, 478, 551, 239, 861, 611, 716, 995, 897, 252, 170, 217, 409, 112, 939];
console.log(findLocalPeak(23,arr));