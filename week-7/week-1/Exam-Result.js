/*Assignment 2: Exam Result Summary
---------------------------------
Scenario : Marks are stored subject-wise for a student.

Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

Tasks:
    
Calculate total marks
Calculate average marks
Find the highest scoring subject
Add a new subject computer: 90*/

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
//Calculate total marks
function totalMarks(){
  let total=0;
  for(let v in marks){
    total+=marks[v];
  }
  return total;
}
console.log(totalMarks());
//Calculate average marks
function averageMarks(){
  let total=totalMarks();
  let count=Object.keys(marks).length;
  return total/count;
}
console.log(averageMarks());
//Find the highest scoring subject
function highestScoringSubject(){
  let highestSubject="";
  let highestMarks=0;
  for(let v in marks){
    if(marks[v]>highestMarks){
      highestMarks=marks[v];
      highestSubject=v;
    }
  }
  return highestSubject;
}
console.log(highestScoringSubject());
//Add a new subject computer: 90
marks["computer"]=90;
console.log(marks);