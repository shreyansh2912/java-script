// const instaUser = new Object()
const instaUser = {}

instaUser.id = "1"
instaUser.name = "max"
instaUser.isloggedin = false

console.log(instaUser);

const newUser ={
    id: "2",
    fullname:{
        name: "virat",
        surname:"kohli"
    }
} 
console.log(newUser.fullname);

const obj1 = {a:"1",b:"2",c:"3"}
const obj2 = {d:"4",e:"5",f:"6"}
// const obj3 = {obj1,obj2}

const newobj = Object.assign({},obj1,obj2)
console.log(newobj === obj1);//false

console.log(newobj);

// -------------------------------------------------------------------------------------

const newobj2 = Object.assign(obj1,obj2)//it's store's combined object in first obj
console.log(newobj2);
console.log(obj1);

console.log(newobj2 === obj1);//true

// ----------- Spead oprator

const obj4 = {...obj1,...obj2}
console.log(obj4);

// -------------------------------------------------------------------------------------

const users = [
    {
        id:1,
        name:"rohit",
        surname:"sharma",
        age:""
    },
    {
        id:1,
        name:"rohit",
        surname:"sharma",
        age:""
    },
    {
        id:1,
        name:"rohit",
        surname:"sharma",
        age:""
    },
    {
        id:1,
        name:"rohit",
        surname:"sharma",
        age:""
    },
    {
        id:1,
        name:"rohit",
        surname:"sharma",
        age:""
    }
]

users[1].name
console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));//[ [ 'id', '1' ], [ 'name', 'max' ], [ 'isloggedin', false ] ]  

console.log(instaUser.hasOwnProperty('isloggedin'));//true


// ------------------------------------  New  -----------------------------------

const course = {
    courseName : "php",
    price:"999",
    courseInsector:"Shreyansh"
}
// console.log(course.courseInsector);

const {courseInsector:instructor} = course //this is the second why to access the value from obj
// console.log(courseInsector);
console.log(instructor);


// const navbar = ({company}) => {
//     console.log(company);
// }

// navbar(company = "Shreyansh")   



[
    {},
    {},
    {}
]

