let infected = ["Anil","Zombie","Pulkit","Chinmay"];

function zombieAttack(infected){
    let next_infected = infected.indexOf("Zombie");
    return infected[next_infected+1];

}

console.log(zombieAttack(infected));