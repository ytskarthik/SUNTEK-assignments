/*Assignment 1: User Profile Manager
----------------------------------
Scenario : You are managing a logged-in user’s profile in a web application.

Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

Tasks:
    
Read and print the user’s name and email
Add a new property lastLogin: "2026-01-01"
Update role from "student" to "admin"
Delete the isActive property
Use Object.keys() to list all remaining fields*/

const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
// Read and print the user’s name and email
console.log("Name:", user.name);
console.log("Email:", user.email);
// Add a new property lastLogin: "2026-01-01"
user.lastLoggedIn="2026-01-06";
// Update role from "student" to "admin"
user.role="admin"
// Delete the isActive property
delete user.isActive;
// Use Object.keys() to list all remaining fields
console.log(Object.keys(user));