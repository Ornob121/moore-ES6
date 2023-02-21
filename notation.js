const student = {
    name: 'Kolim Uddin', 
    age: 15, 
    class: 'Ten', 
    marks: {
        math: 78, 
        physics: 89, 
        chemistry: 65
    }
}

// This one is called dot    (.)    notation
const math = student.marks.math;



// This one is called bracket notation    []
const subject = 'chemistry'
const mark = student['marks']['physics'];
const mark2 = student.marks[subject];
console.log(mark2);



