        // const name = 'Paritosh'
        // const age = 27
        // console.log(name + ' is ' + age + ' years old')
        // // Another way to get the same output is using template strings:-
        // const result = `${name} is ${14+13} years old`
        // console.log(result)
        // const greet = () => 'Hello World'
        // const display = `${name} is doing ${greet()}`
        // console.log(display)

        // Spread Operator [...]:
        const a = [1,2,3,4]
        const b = [5,6,7,8]
        // to clone array a into b, we can use map()
        // const b = a.map(val => val)
        // Or we can use the spread operator:
        const c = [...a]
        console.log(c)
        // spread operator eliminates the sq brackets, and spreads the array, creating new array
        const d = [...a,...b]
        console.log(d)
        // if we dont spread b, it will be added as an entire array

        // Spread works on objects as well:
        const x  = {
            name: 'John',
            age: 20,
            car: {
                brand: 'BMW',
                model: 'X5'
            }
        }
        const y = {
            ...x
        }
        x.name = 'Jack'
        x.age = 40
        x.car.brand = 'Mercedes'
        x.car.model = 'C300'

        console.log(y)