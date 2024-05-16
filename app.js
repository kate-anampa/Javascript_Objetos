// OBJETOS

const personName = 'Juan';
const personLastName = 'Perez';
const personAge = 30;
const personJobTitle= 'Full Stack Developer';


const person = {

    name: 'Juan',
    lastName: 'Perez',
    age:30,
    jobTitle : 'Full Stack Developer',
    account: {
        name: 'Interbank',
        number: 'CCI',
    },
};

console.log(person.name);
//console.log(person.lastName);


console.log(person['name']);

// DESTRUCTURING

const {
    name,
    lastName,
    account: {number},
    
}=person;

console.log(name);
console.log(lastName);
console.log(number);