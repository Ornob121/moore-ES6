const user = [
    {
        id: 2001, 
        name: 'abul', 
        job: 'killing'
    }
];
console.log(user[0].job);

const data = {
    count : 5000, 
    data: [
        {id:1, name: 'babul', job: 'leader'}, 
        {id:2, name:'dabul', job: 'pati-leader'}
    ]
};
const firstJob = data.data[1].job;


const user2 = {
    id: 5001, 
    name: 'Nicola Tesla', 
    address: {
        street:{
            first: '35/A Kochukhet',
            second: 'first floor', 
            third: 'right lane'
        }, 
        postOffice: 'Cantonment', 
        city: 'Dhaka' 
    }
}

const userFloor = user2.address?.stret?.second;
console.log(userFloor)