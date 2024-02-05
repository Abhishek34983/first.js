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

    let arr = [];
    for (let [key, value] of map1){
        let arr = [];
        if(map2.has(key)){
            console.log(key);
            if()
        }
            };
    return arr;
};

let nums1 = [1,2,2,1];
let nums2 = [2,2,3];

console.log(intersectionOfTwoArrays(4,nums1,3,nums2));