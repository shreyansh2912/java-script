
const User = true

if(User){
    console.log(`Hello ${User}`);
}

const number = 12

if(number === 11){
    console.log("number = 11")
}
else if(true){
     console.log("inside elseif"); 
}
else{
    console.log("inside else");
}

const userloggedin =true
const debitcard = true

if(userloggedin && debitcard && false ){
    console.log(`He can buy product`);
}
else if(userloggedin || debitcard || false){    
    console.log(`He can buy product`);
}
else{
    console.log(`please login`);
}

