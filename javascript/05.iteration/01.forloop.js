//for loop

for (let i = 0; i <= 10; i++) {
    const element = i; 
    console.log(element)
    if( i == 5 ){
        console.log(`It's ${i}`);
    }
}

for (let i = 0; i <= 10;  i++) {
    console.log(`\n you are loop no. = ${i} \n`);

    for(let j = 0; j <=10; j++ ){
        // console.log(`you are in inner loop ${j}`);
        console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = ["flash", "batman", "Superman"]

for(index = 0; index < myArray.length; index++){
    const array = myArray[index]
    console.log(array);
}

// brack and countinue

for (let index = 1; index <= 20; index++){

    // if(index == 5){
    //     console.log(`Detected 5`);
    //     break
    // }
    if(index == 10){
        console.log(`Detected 10`);
        continue
    }
    console.log(`value of i is ${index}`)//when 10 is coming the loop is skip th value 10
}



