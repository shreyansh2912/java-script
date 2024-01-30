const userEmail = []

if(userEmail){
    console.log("Got user email");
}

//falsy value

//false,0,-0, Bigint 0n, "",null,undefined,NaN

// thruthy value

// "0" , 'false' , "false", " ", [] , {}, function(){}
//which is not falsy value is becomes thruthy value

if(userEmail.length === 0){
        console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// false == 0   ---->true    false === 0 ---->false
// false == ''   ---->true   false === ' ---->false
//0 == ''  -----> true       0 == ''  ----> false

if(false == 0){
    console.log(`false == 0 is true`)
}
if(false == ''){
    console.log(`false == '' is true`)
}
if(0 == ''){
    console.log(`0 == '' is true`)
}

//Nullish Coalescing Operator (??): null undefined

let value 
// value = 5 ?? 11
value = null??15
value = undefined ?? 15
value = null ?? 15 ?? 30
value = ''?? 500
value = [] ?? 500

console.log(value);
// terniary Operator

let Quantity = 50
Quantity >= 100 ? console.log(`more than 100`): console.log(`less than 100`);
