class Common {
    name;
    group;
    dress;
    institute = 'M A Reza College'
    constructor(name, group, dress){
        this.name = name;
        this.group = group;
        this.dress = dress;
    }
    attendAssembly(time){
        console.log(`${this.name} Attend the assembly at ${time}`);
    }
}


class Student extends Common{
    class;
    id;
    constructor (name, studentOf, id, group, dress){
        super(name, group, dress);
        this.class = studentOf;
        this.id = id;
    }
    submitAssignment(time, name){
        console.log(`${name} Submit your assignment at ${time}`);
    }
}


class Teacher extends Common{
    class;
    id;
    constructor (name, teacherOf, id, group, dress){
        super(name, group, dress)
        this.class = teacherOf;
        this.id = id;
    }
    checkStudent(){
        console.log(`${this.name} you have to watch over students`)
    }

}


class Peon extends Common{
    id;
    constructor (name, id, group, dress){
        super(name, group, dress)
        this.id = id;
    }
    
    closeGate( time){
        console.log(`${this.name} close the gate after ${time}`)
    }

};


const ornob = new Student ('Shadman Tahmid Ornob', 12, 10079, 'Science')
ornob.attendAssembly(9);
console.log(ornob);
const peon = new Peon('Suvas', '002', 'none');
console.log(peon)