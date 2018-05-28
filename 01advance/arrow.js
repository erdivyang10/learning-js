// const sayHello = function(name){
//     return "Hey there " + name + "!";
// }

// console.log(sayHello("Divyang"))

//Using an arrow function
const sayHello = (name) => `Hey there ${name} !`;
console.log(sayHello("Divyang"));


const todos = [{ title: 'Buy Bread',
                 isDone: true,    
                } , 
                { title: 'Go to Gym',
                 isDone: true,
                }, 
                {title: 'Create Tutorials',
                isDone: true,
                },
                {title: 'Create Videos',
                isDone: false,  
                },
                {title: 'Check GDPR',
                    isDone: false,
                },
                {title: 'Add Google Maps',
                    isDone: false,
                }]

              //now pickup only todos which are completed

// const thingsDone = todos.filter(function(todo){
//     return todo.isDone === false;
// })
// console.log(thingsDone);

//notdone
const thingsNotDone = todos.filter(todo => !todo.isDone)
thingsNotDone.forEach(thing => console.log(thing.title))

//apply arrow functions here

// const thingsDone = todos.filter((todo)=> todo.isDone === true)
// console.log(thingsDone);