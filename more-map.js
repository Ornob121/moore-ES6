const numbers = [12, 65, 87,44];

const divide = numbers.map(x => x / 2);
console.log(divide);


const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Hardy', 'Tom'];


const firstThree = friends.map(x => x.slice(0, 4));


const nameLength = friends.map(x => x.length);
console.log(nameLength);


const products = [
    {id: 1, name:'laptop', price:45000},
    {id: 2, name:'mobile', price:145000},
    {id: 3, name:'watch', price:5000},
    {id: 4, name:'tablet', price:25000},
];

const productsName = products.map(x => x.name );
console.log(productsName);