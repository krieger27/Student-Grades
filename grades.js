// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

let studentGrades= [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

let a=[];
let b=[];
let c=[];
let d=[];
let f=[];

let worst =Math.min(...studentGrades);
let best =Math.max(...studentGrades);


 for (let i=0; i<studentGrades.length; i++){
    if (studentGrades[i]<= 60) {
        f++;
    } else if (studentGrades[i] <= 70){
        d++;
    } else if (studentGrades[i] <=80){
        c++;
    } else if (studentGrades[i] <=90) {
        b++;
    } else {
        a++;
    }
 };


function Scoresberg (studentGrades){
    console.log("There are " + f + " F's");
    console.log("There are " + d + " D's");
    console.log("There are " + c + " C's");
    console.log("There are " + b + " B's");
    console.log("There are " + a + " A's");
    console.log("The worst grade is " + worst);
    console.log("The best grade is " + best)
}

Scoresberg(studentGrades);
// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log() to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?