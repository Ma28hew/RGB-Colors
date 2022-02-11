// Landing Page

// Prompt User for Data
let username = prompt("What is your name?")
let focus1 = prompt("What is your main focus for today")

// Output Data into the page
document.getElementById("nameSpan").innerHTML = username;
document.getElementById("focusP").innerHTML = focus1;