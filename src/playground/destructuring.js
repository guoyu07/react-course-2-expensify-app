// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: "Little",
//         temp: 45
//     }
// };

//  const {name='Anonymous', age} = person;

//  console.log(`${name} is ${age}`);

// const {temp:temperature, city} = person.location;

//  console.log(`It's ${temperature} in ${city}`);

// challenge
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//const[street, city, state, zip] = address;
const[, city, state] = address;

console.log(`You are in ${address[1]} ${address[2]}`);
console.log(`You are in ${city} ${state}`);

const item = ['coffee (iced)', '$2.00', '$2.20', '$2.75'];
const [itemName,,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);