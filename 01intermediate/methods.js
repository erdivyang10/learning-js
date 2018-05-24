//Discussing methods and keywords

let myTodos = {
    day: 'Monday',
    issue_got: 0,
    issue_resolved:0,

    pending_issue: function(num){
    this.issue_got = (this.issue_got + num)
   
    },

    issue_resolved: function(numb){
        this.issue_resolved = (this.issue_resolved + numb)
       
        },

    summary: function(){
        return `You have resolved ${this.issue_resolved} issues today`;
    }     

}

myTodos.issue_resolved(20)

console.log(myTodos.summary())

