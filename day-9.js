class Person {
    constructor(a, b) {
        this.a = a,
            this.b = b
    }
}



const person1 = new Person('mehmet', 'ali')
// console.log(person1);




// let numbers = [1, 2, 3, 4, 5]
// let sum = 0
// numbers.forEach(num => sum += num)
// console.log(sum);


// const arrSum = (array) => {
//     let sum = 0;
//     array.forEach(num => sum += num)
//     return sum
// }

// console.log(arrSum(numbers));

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num ** 2))


const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']


// countries.forEach((country,index) => console.log(`${index}=>${country.toUpperCase()} `))


const numbersSquare = numbers.map(num => num * num)
// console.log(numbersSquare);


const upperCountry = countries.map((country, i) => `${country.toUpperCase()}`)
// console.log(upperCountry);

const filter = countries.filter((country) => {
    if (country.length === 7) {
     console.log(country.toUpperCase());
    } else {
        console.log(country.toLowerCase());
    }
})
// console.log(filter);


const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]


let scoreFilter = scores.filter((item)=> item.score>=85 )
// console.log(scoreFilter);



const sum1 = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum1)