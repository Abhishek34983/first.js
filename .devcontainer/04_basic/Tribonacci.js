
function ne(n){
    if(n<=2)
      return n;
}

console.log(ne(2));

function countDown(n) {
  if (n <= 0) return;
  console.log(n);
  countDown(n - 1);
}

countDown(5);

function generatePascalTriangle(row, col) {
  if (col === 0 || col === row) return 1;
  return generatePascalTriangle(row - 1, col - 1) + generatePascalTriangle(row - 1, col);
}

const result = generatePascalTriangle(5, 2);