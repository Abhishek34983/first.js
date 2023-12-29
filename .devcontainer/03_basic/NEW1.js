
let arr = [1, 2, 3, 4];

console.log(myFunction())

function checkAge(arr) {
    return arr %2==0;
  };

  function myFunction() {
    return arr.find(checkAge);
  };





