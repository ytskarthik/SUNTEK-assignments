let dob = "2000-05-15"; // Date of birth in YYYY-MM-DD format

// Convert dob string to a Date object
let birthDate = new Date(dob);

// Get today's date
let today = new Date();

// Calculate age in years
let age = today.getFullYear() - birthDate.getFullYear();

// Adjust age if birthday hasn't occurred yet this year
let monthDifference = today.getMonth() - birthDate.getMonth();
let dayDifference = today.getDate() - birthDate.getDate();

if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
}

console.log("Exact age is:", age, "years");
