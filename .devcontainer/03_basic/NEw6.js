

function greeting(day){
    return function(){
    return 'Today is: '+day;
  };
};

let day='Monday';
 console.log(greeting(day)());

 