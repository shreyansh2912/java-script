const myObj = {
    js: 'javascript',
    cpp: 'c++',
    php: 'php',
    rb: 'ruby'
}

for (const key in myObj) {
    console.log(`${key}  Shortcut is for  ${myObj[key]}`);
}

const programing = ["js","rb","py","cpp"]

for (const key in programing) {
    console.log(programing[key]);
}