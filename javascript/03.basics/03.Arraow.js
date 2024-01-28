const user = {
    username: "Shreyansh",
    price: 12,  
    WelcomeMsg: function(){
        console.log(`${this.username} Welcome to website`)
        // console.log(this)
    }
}

// user.WelcomeMsg()
// user.username = "sam"
// user.WelcomeMsg()

console.log(this)


function coffee() {
    let username = "Shreyansh"
    console.log(this.username);
}
coffee()

const chai = function () {
    let username = "Shreyansh"
    console.log(this.username);
}
chai()
const tea = () => {
    console.log(this);
}
tea()


// const addtwo = (num1 , num2) => num1 + num2

// const addtwo = (num1 , num2) => (num1 + num2)

const addtwo = (num1,num2)=> {username:"Shreyansh"}

console.log(addtwo(5,10))  