// // Day 8 objeler


// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'React',
//         'Node',
//         'MongoDB',
//         'Python',
//         'D3.js'
//     ],
//     getFullName: function () {
//         return `${this.firstName}${this.lastName}`
//     },
//     'phone number': '+3584545454545'
// }

// console.log(person.getFullName());


// person.yeniFonksiyon = function () {
//     return `${this.city} ${this.age}`
// }

// console.log(person.yeniFonksiyon());


let dog = {}
// console.log(dog);

dog = {
    name: 'dog',
    color: 'black',
    age: 5,
    kabuk: 'dalmaçyalı'
}

// console.log(dog.name, dog.color, dog.age, dog.kabuk)

dog.surname = 'a'
dog.gender = 'male'

dog.metod = function () {
    return `${this.name} ${this.color}`
}

// console.log(dog)
// console.log(dog.metod())


const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },

}



// const result = Object.fromEntries([
//     Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
// ]);

// console.log(result);




// const result = Object.values(users).filter((user) => user.isLoggedIn)
// // console.log(result);



// const result1 = Object.values(users).filter((user) => user.points === 50)
// // console.log(result1);

// const result2 = Object.values(users).filter((user) => user.skills.includes('MongoDB', 'Express', 'Node'))

// console.log(result2);


// const copyUsers = { ...users }

// copyUsers.name = 'Mehmet'

// console.log(copyUsers);
// console.log(users);


console.log(Object.keys(users)) // keyleri alan değer
console.log(Object.values(users)) // valueları alan değer
console.log(Object.entries(users)) // hem key hem value alan değer
