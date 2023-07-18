// Rest Operator (...rest):
// const greet = (name,age,time) => {
//     console.log(`Hello ${name} you are ${age} years old and it is ${time} o'clock`)
// }

// instead of the above statement, we can use the rest operator which is basically spread operator followed by a variable name:

const greet = (...rest)=>{
    console.log(rest)
}

greet('John', 35, 12)

// we can use 'args' or 'params' in place of 'rest'
// basically maps over the parameters and presents them in array format

// Ternary Operator: '?'

const age = 20
const res = age > 19 ? 'adult' : 'child'
console.log(res)

// The Ternary operator '?' works as an if-else statement. If the statement before '?' is true, print something; else print the statement after ':'