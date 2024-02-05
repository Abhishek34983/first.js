const hashmap = new Map();
hashmap.set('apple', 3);
hashmap.set('banana', 5);
hashmap.set('cherry', 2);
hashmap.set('date', 4);
const result = hashmap.get('apple') + hashmap.get('banana') * hashmap.get('cherry');
console.log(result);