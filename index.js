// JS EXERCISES

// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
// 22) Create an object with properties such name, surname, email
// 23) Delete Email from the previously created object
// 24) Create an array with 10 strings in it
// 25) Print in the console every string in the previous array
// 26) Create an array with 100 random numbers in it
// 27) Wrote a function to get the MAX and the MIN from the previously created array
// 28) Create an array of arrays, in which every array has 10 random numbers
// 29) Create a function that gets 2 arrays and returns the longest one
// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
let x = "John"
let y = "Deo"
console.log(x,y)
let person ={
    name: "Hafiz",
    surname: "Ali",
    email: "ali.hfph@gmail.com"
}
delete person.email

let string1To10 = ["1","2","3","4","5","6","7","8","9","10"]
let valueof10arrays = string1To10.values()
for (let value of valueof10arrays){
    console.log(value)
}
console.log(Math.floor(Math.random() * 100))


var arrRand = [];
    while(arrRand.length < 11){
        var random = Math.floor(Math.random() * 10) + 1;
        if(arrRand.indexOf(random) === -1) arrRand.push(random);
    }
    console.log(arrRand);


    const array1 = [1,2,3,4]
    let arraylenght1 =  array1.length
    const array2 = [1,2,5,7,8,]
    let arraylenght2 = array2.length
    function maximumarrays(x,y) {
    if (x !== y) {      
        return console.log(Math.max(x,y))
    }}
    maximumarrays(arraylenght2,arraylenght1)


function sumofHeighes(x,y) {
    if (x!==y){

    }
    
}   

// _______________


