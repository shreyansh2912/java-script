const coding = ["js","ruby","java","python","cpp","php"]

// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach((item)=>{
//     console.log(item);
// })

function printme(item){
    console.log(item);
}

coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp', 'php' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp', 'php' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp', 'php' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp', 'php' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp', 'php' ]
// php 5 [ 'js', 'ruby', 'java', 'python', 'cpp', 'php' ]

const myCodingLanguage = [
    {
        name: "JavaScript",
        fileExtension: ".js"
    },
    {
        name: "Php",
        fileExtension: ".php"
    },
    {
        name: "c++",
        fileExtension: ".cpp"
    }
]
myCodingLanguage.forEach((item)=>{
    console.log(item.name+` And it's extension is `+ item.fileExtension);
})

