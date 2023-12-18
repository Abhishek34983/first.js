function createMatrixII(size){
    const parent=[];
    for (let i=0;i<size;i++){
        const child=[];

    for (let j=i;j<size;j++){
        child.push(j);
    }
    parent.push(child);
        }
        return parent;
}

console.log(createMatrixII(2));
    










    /*
    function checkProperty(obj,propName){
    let result  = obj.hasOwnProperty(propName);
    return result;
}

  let obj= { firstName: 'Alex' };
  let propName = "firstName";

    console.log(checkProperty(obj,propName));
    */
