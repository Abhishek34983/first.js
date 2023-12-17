function createMatrixII(size){
  const parent=[];
  for (let i=0;i<size;i++){
      const child=[];
  for (let j=0;j<size;j=j++){
      child.push(j);
  }
  parent.push(child);
      }
      return parent;
} 
   console.log(createMatrixII(2));