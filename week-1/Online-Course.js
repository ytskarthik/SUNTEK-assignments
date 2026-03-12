/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"

*/
const courses = ["javascript", "react", "node", "mongodb", "express"];
//1. filter() courses with name length > 5
const longCourses=courses.filter(course=>course.length>5);
console.log(longCourses);
//2. map() to convert course names to uppercase
const upperCaseCourses=courses.map(course=>course.toUpperCase());
console.log(upperCaseCourses);  
//3. reduce() to generate a single string: "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
const courseString=courses.reduce((acc,course)=>acc+" | "+course);
console.log(courseString.toUpperCase());
//4. find() the course "react"
const findReact=courses.find(course=>course==="react");
console.log(findReact);
//5. findIndex() of "node"
const indexOfNode=courses.findIndex(course=>course==="node");
console.log(indexOfNode);