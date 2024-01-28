function intersectionOfTwoArrays(n, nums1, m, nums2){
    const map_nums1 = new Map([nums1]);
    const map_nums2 = new Map([nums2]);
    let new_array = [];
    for(let val of map_nums2){
        console.log(val);
        if (map_nums1.has(val)){
            console.log([val]);
            new_array.push([val]);
        }
    }
    return new_array;
};

let nums1 = [1,2,2,1];
let nums2 = [2,2];

console.log(intersectionOfTwoArrays(4,nums1,2,nums2));