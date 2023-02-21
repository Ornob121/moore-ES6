const numbers = [12, 5, 23, 45, 60, 15, 21, 20, 50];
const bigNums = numbers.filter(x => x > 20);
const tiny = numbers.filter(x => x < 20);
const even = numbers.filter(x => x % 2 === 0);
const odd = numbers.filter(x => x % 2 !== 0);
console.log(odd);
console.log(even);
console.log(tiny)
console.log(bigNums);


const products = [
    {id: 1, name:'laptop', price:45000},
    {id: 2, name:'mobile', price:145000},
    {id: 3, name:'watch', price:5000},
    {id: 4, name:'tablet', price:25000},
];

const expansive = products.filter(x => x.price >= 100000);
const cheap = products.filter(x => x.price >= 100);
console.log(cheap)
console.log(expansive);