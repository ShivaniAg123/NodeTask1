const data=require("fs")
data.writeFileSync("hello.txt","Hello Node.js")
// const readData=data.readFileSync("hello.txt","utf-8")
// console.log(readData)
data.appendFileSync("hello.txt"," Practice Makes man perfect")

const readData=data.readFileSync("hello.txt","utf-8")
console.log(readData)