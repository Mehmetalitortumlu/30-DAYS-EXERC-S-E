// day 11
// Destructing ve spread

//Destructer, dizileri ve nesneleri açmanın ve farklı değişkenlere atamanın bir yoludurDestructer, dizileri ve nesneleri açmanın ve farklı değişkenlere atamanın bir yoludur

const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers
// console.log(numOne, numTwo, numThree); // bu şekilde yapılabilir.


const names = ["Mehmet", "Ali"];
let [firstPerson] = names;
// console.log(firstPerson)


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

let [frontEnd, backend] = fullStack;
// console.log(frontEnd);
// console.log(backend);


// Eğer dizideki değerleri atlanması isteniyorsa virgül(,) işareti kullanmak gerekir. Virgül söz konusu indisteki değeri atlamaya yardımcı olur.

const numbers2 = [1, 2, 3]
let [numOne2, , numThree2] = numbers2
// console.log(numOne2, numThree2);



const names1 = ['Asabeneh', 'Brook', 'David', 'John']
let [, secondPerson, , fourthPerson] = names1 // birinci ve üçüncü değer atlandı

// console.log(secondPerson, fourthPerson)


// Dizideki tüm elemanlara değişken atamak istemiyorsak kalan kısmı spread op ile dizi olarka tutabiliriz.


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3);
console.log(rest); // bu şekilde [4,5,6,7,8,9,10]


const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

for (const [country, city] of countries) {
    console.log(country, city)
}


for (const [first, second, third] of fullStack) {
    console.log(first, second, third)
}


//Objeye Destructuring işlemi yapma

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
// let a=Object.values(rectangle);
// console.log(a.filter(a => a>10));

let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter) // bu sayade rectangle.width demeden direk width ile ulaşabildik.


//Yapılandırma sırasında yeniden adlandırma

const rectangle1 = {
    width: 20,
    height: 10,
    area: 200
}
// let { width: w, height: h, area: a, perimeter: p } = rectangle1

// console.log(w, h, a, p)

//Eğer anahtar nesnede bulunmazsa, değişken tanımsız olarak atanır istersek varsayalıma değer atayailiriz p:50 gibi



const rect = {
    width: 20,
    height: 10
}
const calculatePerimeter = rect => {
    return 2 * (rect.width + rect.height)
}

// console.log(calculatePerimeter(rect))

const calculatePerimeter1 = ({ width, height }) => {
    return 2 * (width + height)
}

console.log(calculatePerimeter1(rect));



//Spread veya Rest Operatörleri
//Bir diziye destructuring işlemi uygulandığında, kalan elemanları dizi olarak almak için yayılma operatörünü (...) kullanırız.Buna ek olarak, dizi öğelerini başka bir diziye yaymak için spread operatörünü kullanırız.


//Diziyi kopyalamak için spread operatörü
const countries1 = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries1;
console.log(gem)
console.log(fra)
console.log(nordicCountries)



const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]
// dizileri bu şekilde kopyalayabiliriz.
// console.log(evenNumbers) 
// console.log(oddNumbers)


const frontEnd1 = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack1 = [...frontEnd1, ...backEnd]
// console.log(fullStack1);


//Nesneyi kopyalamak için spread operatörü
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki'
}

const copiedUser = { ...user, title: 'mehmet' } // hem kopyalama hem değişim yapabiliyoruz.
// console.log(copiedUser)





// Egzersiziler



const constants = [2.72, 3.14, 9.81, 37, 100]
const countries2 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle2 = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

let [e, pi, gravity, bodyTemp, boilingTemp] = constants;
// console.log(e, pi, gravity, bodyTemp, boilingTemp);

let [fin, est, sw, den, nor] = countries2
// console.log(fin, est, sw, den, nor);

let { width: w, height: h, area: a, perimeter: p } = rectangle2
// console.log(w,h,a,p);



let [key1, key2, key3, key4] = users
// console.log(Object.keys(key1, key2, key3, key4));


// for (const user of users) {

//     console.log(users.filter(user => user.skills.length < 2));

// }

// console.log(users.filter(user => user.skills.length < 2));


// const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// let [skills, score, jsScore, reactScore] = student;
// console.log(skills, score, jsScore, reactScore);




// const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ]

// let studentObject = [{ ...student }]

// let [name1, skills3, scores] = students
// console.log(name1, skills3);


const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

let copyStudent={ ...student }
console.log(copyStudent);

student.skills.frontEnd.push({skill:'Bootsrap',level:8})
console.log(student);


student.skills.backEnd.push({skill:'Express',level:9})
console.log(student);

student.skills.dataBase.push({skill:'SQL', level:8})
console.log(student);

student.skills.dataScience.push('SQL')
console.log(student.skills.dataScience);
