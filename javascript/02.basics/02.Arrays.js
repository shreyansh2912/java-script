const marvels = ["thor","spiderman","Ironman"]
const DC = ["superman","batman","flash"]

// marvels.push(DC)//[ 'thor', 'spiderman', 'Ironman', [ 'superman', 'batman', 'flash' ] ]

console.log(marvels);
// console.log(marvels[3][1]);

const Allheros = marvels.concat(DC)//[ 'thor', 'spiderman', 'Ironman', 'superman', 'batman', 'flash' ]
console.log(Allheros);

const allNewHeros = [...marvels, ...DC]//[ 'thor', 'spiderman', 'Ironman', 'superman', 'batman', 'flash' ]
console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6],7,[8,[9,10]]]
console.log(another_array);
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Shreyansh"))

console.log(Array.from("Shreyansh"));//it convert's string into array

console.log(Array.from({name:"Shreyansh"}));//interesting //[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

