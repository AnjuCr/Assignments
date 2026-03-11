// Assignment -3 (Arrays/Datatypes/Operators)

// 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
// marks [75, 80, 82] Add 10 marks to each students using assignment operators and
// store it into another array, after adding 10 marks identify the average marks of all
// students

// Expected Output:
// Updated Marks:
// Suresh: 85
// Mahesh: 90
// Naresh: 92
// Average Marks: 89.0

let students: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];
let newMarks: number[] = [0,0,0];
let marksSum : number = 0;



console.log(`OLD MARKS FOR THE STUDENTS`)
for(let i:number = 0; i<marks.length; i++)
    console.log(marks[i]);

// Adding marks 10 to each student
console.log("NEW MARKS FOR THE STUDENTS");

for (let i: number = 0; i < marks.length; i++) 
{

    newMarks[i] = marks[i] +10;
    console.log(`${newMarks[i]}`);

}

// Calculating sum of new marks

for (let i: number =0; i<newMarks.length; i++)
{
   marksSum = marksSum+ newMarks[i];
   
}
console.log(`Total Marks = ${marksSum}`);

let avgMarks = marksSum/newMarks.length;
console.log(`The average mark is ${avgMarks}`);
