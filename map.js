const numbers = [2, 8, 4, 6, 3];
const output = [];
for(const number of numbers){
    const doubled = number * 2;
    output.push(doubled);
}
console.log(output);

const makeDouble = numbers.map(x => x * 3);
console.log(makeDouble);

function makeTriple (num){
    return num * 3;
};

const triple = numbers.map(makeTriple);
console.log(triple)