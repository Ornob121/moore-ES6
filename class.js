class Student {
    name;
    class;
    id;
    group;
    institute = 'M A Reza College'
    dress = 'blue'
    constructor (name, studentOf, id, group){
        this.name = name;
        this.class = studentOf;
        this.id = id;
        this.group = group;
    }
    submitAssignment(time, name){
        console.log(`${name} Submit your assignment at ${time}`);
    }
    attendAssembly(time, name){
        console.log(`${name} Attend the assembly at ${time}`);
    }

}

const anurag = new Student('Limon Hasan Anurag', 12, 10078, 'Science')
console.log(anurag)
anurag.submitAssignment(12.00, 'Anurag');
anurag.attendAssembly(9.00, 'Anurag');

const fahad = new Student('Fahad Sorder', 12, 100080, 'Science');
console.log(fahad)
fahad.submitAssignment(3.00, 'Fahad')
fahad.attendAssembly(9.00, 'Fahad')