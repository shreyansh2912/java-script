const name = "Shreyansh"
const repoCount = 12

// console.log(name + repoCount + "value" )

console.log(`HEllo mt name is ${name} and my repo is ${repoCount} `);

const gameName = new String("Hello World ")
const gameName2 = new String("Hello World")

// const regex = /[a-z]/g
const regex1 = /[A-Z]/g
const regex2 = /H(e)(ld(\d?))/g;

const found = gameName.match(regex1);
const found1 = [...gameName.matchAll(regex2)];

console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length);
console.log(gameName.toUpperCase());

// ------------------------------------------------------------------------------------------

console.log(gameName.anchor("img/hello.jpg"))
console.log(gameName.at(4))
console.log(gameName.at(4))
console.log(gameName.big())
console.log(gameName.bold())
console.log(gameName.bold())
console.log(gameName.charAt(1));
console.log(gameName.charCodeAt(5));//it gives characters ascii value
console.log(gameName.codePointAt(5))
console.log(gameName.concat(" this is Shreyansh"))
console.log(gameName.constructor("no"))
console.log(gameName.endsWith("@gmail.com"))//Boolean ans
console.log(gameName.fixed())
console.log(gameName.fontcolor("red"))
console.log(gameName.fontsize("20px"))
console.log(gameName.includes("H"))
console.log(gameName.indexOf('h'));
console.log(gameName.isWellFormed());
console.log(gameName.italics());
console.log(gameName.italics());
console.log(gameName.lastIndexOf("l"));
console.log(gameName.link("img/h"));
console.log(gameName.localeCompare(gameName2));
console.log(gameName.match(gameName2));
console.log(found1[0]);

const num = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const num1 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(num === num1);  //false

const numNFC = num.normalize('NFC')
const num1NFC = num1.normalize('NFC')

console.log(num1NFC === num1NFC);//true


console.log(gameName.padEnd("15","d"))//Hello Worlddddd
console.log(gameName.padStart("15","d"));

console.log(gameName.repeat("3"));//Hello World Hello World Hello World

const line = `Hello my name is Shreyansh shah.Shreyansh `

console.log(line.replace("Shreyansh","krunal"));//Hello my name is krunal.Shreyansh
console.log(line.replaceAll("Shreyansh","krunal"));//Hello my name is krunal.krunal

console.log(line.search("m"));//6

console.log(line.slice(-2));//h

console.log(line.small());//<small>Hello my name is Shreyansh shah.Shreyansh </small>

console.log(line.split(" "));//[ 'Hello', 'my', 'name', 'is', 'Shreyansh', 'shah.Shreyansh', '' ]

console.log(line.startsWith("H"));//true

console.log(line.substr(6,2));//my
console.log(line.substring(6,8));//my

console.log(line.toLocaleLowerCase());//hello my name is shreyansh shah.shreyansh
console.log(line.toLocaleUpperCase());//HELLO MY NAME IS SHREYANSH SHAH.SHREYANSH

console.log(line.toLowerCase());//hello my name is shreyansh shah.shreyansh
console.log(line.toUpperCase());//HELLO MY NAME IS SHREYANSH SHAH.SHREYANSH

const strings = [
    // Lone leading surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone trailing surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
  ];

  for (const str of strings) {
    console.log(str.toWellFormed());
  }
  //ab�
  //ab�c
  //�ab
  //c�ab
  //abc
  //ab😄c

  const line2 = "   hello     "
console.log(line2.trim());//trim removes extra spaces from start and end

console.log(line2.trimStart())//hello
console.log(line2.trimEnd())//   hello
console.log(line2.valueOf());//It shows the value of variable