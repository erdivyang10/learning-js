const cameras = {
    price: 600,
    weight: 2000,
    myDes: function(){
        return `The price of a camera is ${this.price}` //Here in objects arrow functions are not defined this is the limitation
    }
}

console.log(cameras.myDes());