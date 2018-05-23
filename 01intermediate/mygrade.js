//display percentage and grades of student

let myGrade = function(currentMarks,totalMarks){
        let myPercent =(currentMarks/totalMarks)*100;
        let myGrade = '';

      if (myPercent >=90) 
      {
        myGrade = 'A'    
      } 
      else if (myPercent>=75){
          myGrade = 'B'
      }
      else if (myPercent>=60){
          myGrade = 'C'
      }
      else if (myPercent >= 50){
          myGrade = 'D'
      }
      else {
          myGrade ='F'
      }

      return `Your Percentage is ${myPercent} and Grade is ${myGrade}`

    }

    let total = myGrade(92,150)

    console.log(total)
