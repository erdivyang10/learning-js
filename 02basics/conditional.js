//Perform logical operation for an ecommerce sites
//&& AND I like pizza and coke

let isVerified = false
let isLoggedin = false
let isPayment = false
let isGuest = false

if ( isVerified && isLoggedin && isPayment){
    console.log("Greeting You can access our paid service")
}

else if(isVerified || isGuest){
    console.log(" You can access our FREE Preview")
}
else{
    console.log('You are not permitted to acces our content till verification. Please verified your email')
}