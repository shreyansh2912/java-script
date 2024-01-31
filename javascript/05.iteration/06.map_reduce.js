// const coding = ["js","php","rust","python","cpp"]

// const values =coding.forEach((item)=>{
//     //  console.log(item)
//     return item
// })

// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9,10]

let newNums = myNums.filter((num)=>(num > 4))
console.log(newNums);

///////////////////////////////////////////////////

let newNums2 = myNums.filter((num)=>{
    return num > 4
})
console.log(newNums2);


const MynewNum = []

myNums.forEach((num)=>{
    if (num > 4) {
      MynewNum.push(num)
    }
})
console.log(MynewNum);