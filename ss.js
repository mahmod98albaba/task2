'use strict';
calculateGrade();
function calculateGrade() {

    let username = prompt('please enter your name');
    console.log(username);
    let mark = prompt("Enter the mark:");

    if (mark >= 0 && mark <= 49) {
        alert("Failed! Grade: F");
    } else if (mark >= 50 && mark <= 60) {
        alert("Pass! Grade: d");
    }
    else if (mark >= 61 && mark <= 70) {
        alert("Pass! Grade: c");
    }
    else if (mark >= 71 && mark <= 80) {
        alert("Pass! Grade: b");
    }
    else if (mark >= 81 && mark <= 90) {
        alert("Pass! Grade: A");
    }
    else if (mark >= 91 && mark <= 100) {
        alert("Pass! Grade: A+");
    }

    else {
        alert("Please enter a valid mark between 0 and 100.");
        calculateGrade(); // Ask the user to re-enter the valid mark
    }
}