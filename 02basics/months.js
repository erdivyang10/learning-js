//Display Month name of the year

// const month =['Jan','Feb','Mar','April','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']

// month.forEach(function(monthName,index){
// console.log(`Month Name is ${index+1}--->${monthName}`)
// })

// console.log(month[0])


const monthName = []

monthName.push('January');
monthName.push('February');
monthName.push('March');
monthName.push('April');
monthName.push('May');
monthName.push('June');

//Loop using Foreach 
monthName.forEach(function(month,index){
console.log(`Your ${index+1} Month is ${month}`)
})

//Loop using For
for (let index = 0; index < monthName.length; index++) {
    const element = monthName[index];
    console.log(`Your ${index+1} Month is ${element}`)
    
}