function robotReturnToOrigin(moves) {  
    let original = [0,0]; 
    for(let i =0 ;i<moves.length;i++){
        if(moves[i]=='U')
           original[0]++;
        else if(moves[i]=='D')
           original[0]++;
        else if(moves[i]=='R')
           original[0]++;
        else if(moves[i]=='L')
           original[0];
    }
    console.log(original[0]);
    console.log(original[1]);
    if (original[0] ==0 && original[1] ==0){
        return true;
    }   
    else{
        return false;
    }
}

let ne = "UD";

console.log(robotReturnToOrigin(ne));