const coding = ["cpp", "java", "javscript", "python"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const mycoding = [
    {
        languageName: "javascript",
        languageFile: ".js"
    },
    {
        languageName: "c++",
        languageFile: ".cpp"
    },
    {
        languageName: "python",
        languageFile: ".py"
    },
]
mycoding.forEach( (item) => {
    console.log(item.languageName);
})