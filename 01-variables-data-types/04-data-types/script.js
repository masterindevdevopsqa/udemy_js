// Strings
const firstName = "Tallapragada"
console.log(firstName)
console.log(typeof firstName); 

// Numbers
const age = 33;
console.log(age, typeof age);
const temp = 99.99
console.log(temp,typeof temp);

//Boolean
const hasKid = true
console.log(hasKid,typeof hasKid)

//null
const aptNumber = null
console.log(aptNumber, typeof null);

//undefiend
let score
const op = score
console.log(op,typeof op)

// Symbol
const id = Symbol('id')
const ops = id
console.log(ops,typeof ops)

//BigInt
const n = 9876543212345678n;
console.log(n,typeof n);

// Reference Types
const num = [1,2,3,4,5]

console.log(num, typeof num);
const person = {
	names : "Anil"
}
console.log(person,typeof person)

function sayHello(){
	console.log('Hello');
}
console.log(sayHello, typeof sayHello)