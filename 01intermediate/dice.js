let numOne = 22
let numtwo = 7

result = 22/7
// console.log('Long Number is '+ result) //now the result is very big here

// console.log('Short number is  '+ result.toFixed(2))

// console.log('Ceil Value: '+Math.ceil(result)) // to display ceil value like if value is 3.14 then output will be 4

// console.log('Floor Value: '+Math.floor(result)) // to display ceil value like if value is 3.14 then output will be 3

//generate randum number

//  console.log(Math.random()* 5 + 1 )

//now we will create a Dice

let upper = 6
let lower = 1

let myRandom = Math.floor(Math.random() * (upper-lower + 1)) + lower


console.log(myRandom)

