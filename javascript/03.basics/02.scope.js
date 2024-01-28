
let a = 100

if (true){
    let a = 10
    // const b = 20
    var c = 30
    console.log(a);
}


console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username = "Shreyansh"

    function two() {
        const website = "instagram"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

// ------------------------------------------- interesting -----------------------------

addOne(5)

function addOne(num){
    return num + 1
}

const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(5))




const number = addOne(5)

console.log(number);