const numbers = [12, 5, 23, 45, 60, 15, 21, 20, 50];


const products = [
    {id: 1, name:'laptop', price:30000},
    {id: 2, name:'mobile', price:145000},
    {id: 3, name:'watch', price:5000},
    {id: 4, name:'tablet', price:25000},
];

const cheap = products.find(x => x.price < 40000);
console.log(cheap);