function removeDuplicatesFromSortedArrayII(n, arr) {
    let currentcount = 1, currentelement = arr[0], totallength =1;
    for(let i = 0;i<n;i++){
        if(arr[i] == currentelement){
            currentcount++;
            }
        else {
            currentelement = arr[i];
            currentcount = 1;
        }

        if(currentcount <= 2){
            arr[totallength] = currentelement;
            totallength++;
        }
    }
    return totallength;
}

n=7;
arr = [2,2,2,3,4,4,9];

console.log(removeDuplicatesFromSortedArrayII(n,arr));