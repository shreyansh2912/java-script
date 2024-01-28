const date =  new Date()

console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());

let mydate = new Date(2024,0,27)
let mydate1 = new Date("2024-01-27")//yy-mm-yy 
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());

console.log(typeof date);//object   

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(mydate.getTime());// it help us convert date seconds from 1 jan 1970

console.log(Math.floor(Date.now()/1000));

console.log( mydate.toLocaleDateString('default',{
    weekday: "short",
    weekday:"narrow",
    weekday:"long",
    month: "narrow",
    day:"numeric",
    day:"numeric",
    year:"2-digit"
}));