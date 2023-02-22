// Problem number one.
const oddNumbers = [1, 3, 5, 7, 9, 11];
// first using for loop.
function makeEven (oddNumbers){
    const evenNumbers =[];
    for (let i = 0; i < oddNumbers.length; i ++){
        let element = oddNumbers[i];
        element += 1;
        evenNumbers.push(element);
    }
    return evenNumbers;
}
const even = makeEven(oddNumbers);
// console.log(even);

const evens = oddNumbers.map(number => number + 1);
// console.log(evens);



// this is problem two
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = numbers.filter(number => number % 10 === 0);
// console.log(divisibleBy10);



// THis is problem three
const divisibleBy10OnlyOne = numbers.find(number => number % 10 === 0);
// console.log(divisibleBy10OnlyOne);




// This is problem five

const numbers2 = [1, 9, 17, 22];
function add(numbers ){
    let sum = 0;
    for(const number of numbers){
        sum = sum + number;
    }
    return sum;
}

const adds = add(numbers2);
// console.log(adds);

const sum = numbers2.reduce((previousValue, currentValue) => previousValue + currentValue
, 0)

// console.log(sum)


// problem six

const student = {
    name: 'Fredie', 
    age: 26
}

// console.log(student[age])


// Another problem

let data = {
    location: [
        {
            city:'hydrabad'
        }
    ]
};
// console.log(data['location'][0]['city'])


// Another problem

const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  };


  const {email} = user;     
  console.log(email)

console.log(Object.values(user.address));

const {city} = user.address;
console.log(city);

const {lat} = user.address.geo;
console.log(lat)

const {name} = user.company;

console.log(name);