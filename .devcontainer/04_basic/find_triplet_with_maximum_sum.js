/*
function maxSumTriplet(n, nums) {
    let ans = 0;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n-1;j++){
            for(let k=j+1;k<n-1;k++){
                if (nums[i]<nums[j] && nums[j]<nums[k]){
                    let currentSum =nums[i]+nums[j]+nums[k];
                    ans = Math.max(ans, currentSum);
                }
            }
        }
    }
    return ans;
}
*/

function maxSumTriplet(n, nums) {
    let ans = 0;
    for(let j=1;j<n-1;++j){
        let max1 = 0, max2 = 0;
        for(let i=0;i<j;++i){
            if (nums[i] < nums[j]) 
                max1 = Math.max(max1, nums[i]); }
        for(let k=j+1;k<n;++k){
            if (nums[k] > nums[j]) 
                max2 = Math.max(max2, nums[k]);
        }
        if(max1 && max2) {
        ans=Math.max(ans,max1+nums[j]+max2);
        }}
    return ans;
}

let nums = [43,92,47,42,52,52,80,42,83,73];
let n=10;

console.log(maxSumTriplet(n, nums));