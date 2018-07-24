// const person = {
//     name: 'Chris',
//     age: 30,
//     location: {
//       city: 'Koblenz',
//       temp: 25
//     }
// };
//
// // const name = person.name;
// // const age = person.age;
//
// const {name = 'anon', age} = person;
// console.log("my name is " + name + " and im " + age);
//
// const {city, temp: temperature} = person.location;
//
// if(city && temperature) {
//     console.log("it is " + temperature + "° in " + city);
// }
//
//const book = {
//    title: 'Ego is the Enemy',
//    author: 'Ryan Holiday',
//    publisher: {
//        name: 'Penguin'
//    }
//};
//
//const {name: publisherName = 'default'} = book.publisher;
//
//console.log(publisherName);



// const address = ['Muehlengasse', 14, '56073', 'Koblenz'];
//
// const [str, nr, zip, city] = address;
//
// console.log(str, nr, zip, city);






const item = ['Coffee (hot)','2€', '3€', '4€'];

const [drink, , medium, ] = item;

console.log('A medium ' + drink + ' costs: ' + medium);



























