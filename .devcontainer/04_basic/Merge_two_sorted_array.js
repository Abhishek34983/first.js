function mergeSortedArray(m, nums1, n, nums2) {
    let news = nums1.concat(nums2);
    return news.sort((a,b)=> a-b);
}

nums1 = [1,2,3];
m =3;
nums2 = [2,4,5];
n = 3;

console.log(mergeSortedArray(m, nums1, n, nums2));