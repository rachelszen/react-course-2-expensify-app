//
// Object Destructuring
//

// const person = {
//     name: 'Rachel',
//     age: 22,
//     location: {
//         city: 'Rio de Janeiro',
//         temp: 20
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const  {city, temp: temperature} = person.location;
// if (temperature && city) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Harry Potter',
//     author: 'JK Rowling',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'self-published'} = book.publisher;
// console.log(publisherName);

//
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York', , country='USA'] = address;
console.log(`You are in ${city} ${state} ${country}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medium] = item;
console.log(`A medium ${itemName} costs ${medium}`);