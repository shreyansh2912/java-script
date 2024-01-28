
function name() {
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("e");
    console.log("y");
    console.log("y");
    console.log("n");
    console.log("s");
    console.log("h");
}
name()

function add(num1,num2)//parameters
{
    // num3 = num1 + num2
    // console.log(num1 + num2);
    // return num3

    return num1 + num2
}
const result = add(5,4)//argument

console.log(result);


function loginUser(username = "user") {
    if(!username ){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUser("Shreyansh"))

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300));

const user = {
    username:"shreyansh",
    price:100
}

function object(obj) {
    console.log(`username is ${obj.username} and price is ${obj.price}`);
}

// object(user)
object({
    username: "Hello",
    price: 2999
})