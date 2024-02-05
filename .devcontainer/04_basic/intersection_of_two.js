function intersectionOfTwoArrays(n,nums1,m, nums2){
    const map1 = new Map();
    for(let i=0;i<n;i++){
        const a = nums1[i];
        if (map1.has(a)){
            const prevCount = map1.get(a);
            map1.set(a, prevCount +1);
        }
        else{
            map1.set(a,1);
        }
    }
    console.log(map1);


    const map2 = new Map();
    for(let i=0;i<m;i++){
        const b = nums2[i];
        if (map2.has(b)){
            const prevCount = map2.get(b);
            map2.set(b, prevCount +1);
        }
        else{
            map2.set(b,1);
        }
    }
    console.log(map2);

    //let arr = [];
    let intersection = [];
    for (let [key, value] of map1) {
        if (map2.has(key)) {
            const countInBothArrays = Math.min(value, map2.get(key));
            for (let i = 0; i < countInBothArrays; i++) {
                intersection.push(key);
            }
        }
    }
    intersection.sort(function(a, b){return a - b});
    return intersection;
};

let nums1 = [-85, 32, -89, 1, 16, -47, -3, -63, 16, -39, -50, 2, -63, 14, 13, -44, -43, 40, -5, 92];
let nums2 = [-89, 92, -50, 13, -44, 16, 1, -63, -85, -47, 16, -3, -63, -43, 32, 40, -5, 2, 14, -39];

console.log(intersectionOfTwoArrays(20,nums1,20,nums2));