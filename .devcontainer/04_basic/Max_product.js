function maxProduct2(n,nums) {
    nums.sort(function(a, b){return a - b});
    let result = (nums[n-1]-1)*(nums[n-2]-1);
    return result;
}

let nums = [3,5,4,2]

console.log(maxProduct2(4,nums));