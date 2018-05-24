let username ='somethingfgfgfgfg'
let password = '1234567'

let userChecker = function(myStrings){
    if ((myStrings.includes(123)) && (myStrings.length >6)) {
        return true
    }
        return false
}
console.log(userChecker(username))


let passChecker = function(pass){
    if ((pass.includes(123)) && (pass.length >6)) {
        return true
    }
        return false
}
console.log(passChecker(password))