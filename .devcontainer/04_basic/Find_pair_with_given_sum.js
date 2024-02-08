function twoSum(nums, target) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        arr.push([nums[i],i]);
    }
    console.log(arr);
    arr.sort((a,b) => a[0] - b[0]);    
    let left = 0;
    let right = nums.length-1;
    let sum =0;
    let j;
    while(left < right){
        sum = arr[left][0] + arr[right][0];
        console.log(sum);
        if(sum === target){
            j= [arr[left][1], arr[right][1]].sort((a,b) => a-b);
        }
        else if (sum < target){
            left++;
        }
        else{
            right--;
        }
        }
        return j;
    }

let target = 7;
let str = 

    console.log(twoSum(str,target));