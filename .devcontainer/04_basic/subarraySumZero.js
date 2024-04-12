function subarraySumZero(n,arr) {

    const prefixSumSet = new Set();
    let prefixSum = 0;
    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];
        if (prefixSum === 0 || prefixSumSet.has(prefixSum)) {
            return "Yes";
        }
        prefixSumSet.add(prefixSum);
    }
    return "No";
}

let arr =[3,2,-1];
let n=3;

console.log(subarraySumZero(n,arr))