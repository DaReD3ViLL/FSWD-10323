// // Iterating over an object:

// const a = {
//     name: 'John',
//     age: 20,
//     car: {
//         brand: 'BMW',
//         model: 'X5'
//     }
// }

// for (let key in a){
//     console.log(key,a[key])
// }


// Types of Cloning in JS:
// Deep Clone: Clones all Keys&Objects, even nested Keys&Objects
// Shallow Clone: Clones only the direct Keys&Objects


// Destructuring an object in JS
// const{keys} = obj

const a = {
    name: 'John',
    age: 20,
    car: {
        brand: 'BMW',
        model: 'X5'
    }
}
// const name = a.name
// const age = a.age
// const car = a.car

// Instead of doing the above 3 steps, we can simply do:
const {name,age,car} = a
console.log(name,age,car)


// Destructuring arrays:
const arr = ['John', 'Jane', 'Jack']
const [name1,name2,name3] = arr

console.log(name1,name2,name3)

// Destructuring is like declaring a new variable and assigning a value
// Array destructuring uses indices of array,
// Object destructuring uses actual keys from the object.


