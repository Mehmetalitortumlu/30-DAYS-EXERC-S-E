// // Day 6 Döngüler


// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ]

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']



// for (i = 0; i < 10; i++) {
//     // console.log(i);
// }  // bu döngü 0 ile 9 arası sayıları bizim için döner.


// for (i = 10; i > 0; i--) {
//     // console.log(i);
// } // bu döngü ise 10 dan 1 e kadar olan sayıları döner.


// let i = 0

// while (i < 10) {
//     console.log(i);
//     i++
// }  // for döngüsüne alternatif olarak while döngüsü de kullanılabilir

// console.log(`
// #
// ##
// ###
// ####
// #####
// ######
// `)

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let kareler = []

// for (i = 0; i < numbers.length; i++) {
//     kareler.push(numbers[i] ** 2)
// }
// console.log(kareler);


// for (i = 0; i <= 10; i++) {
//     console.log(`
//  ${i} * ${i} = ${i * i}
//  ${i} * ${i} *${i} = ${i * i * i}
//  `)
// }


// for (i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i); // çift sayıları alır
//     }
//     else if (i % 2 == 1) {
//         console.log(i) // tek sayıları alır çünkü i nin 2 ye bölümünden kalan 1 ise dedim.
//     }
// }


// let number = 11
// let counter = 0
// for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//         counter++
//         break
//     }
// }


// console.log(counter > 0 ? 'Asal degil' : 'Asal')

// let newNumber = prompt('sayı giriniz')

// for (var i = 2; i < newNumber; i++) {
//     if (newNumber % i === 0) return false;
//     return newNumber > 1
// }

// console.log(newNumber(5));




// for (var sayi = 2; sayi < 100; sayi++) {
//     for (var bolum = 2; bolum < sayi; bolum++) {
//         if (sayi % bolum === 0)
//             break;
//     }
//     if (sayi === bolum)
//         console.log(sayi);

// }

// let toplam = 0
// for (i = 0; i <= 100; i++) {
//     toplam+=i
// }

// console.log(toplam);


// let teksayılar = 0

// for (i=0; i<=100; i++){
//     if(i%2 ==1){
//         teksayılar+=i

//     }
// }
// console.log(teksayılar);

// let çiftsayılar = 0

// for (i=0; i<=100; i++){
//     if(i%2 ==0){
//         çiftsayılar+=i

//     }
// }
// console.log(çiftsayılar);



//egzersiz 2 

// rastgele ıd oluşturma


// function makeid(length) {
//     var results = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;

//     for (let i = 0; i < length; i++) {
//         results += characters.charAt(Math.floor(Math.random() * charactersLength))
//     }
//     return results
// }

// console.log(makeid(1));



// function rgba() {
//     let a = Math.floor(Math.random() * 255)
//     let b = Math.floor(Math.random() * 255)
//     let c = Math.floor(Math.random() * 255)
//     console.log(`rgba(${a},${b},${c})`)
// }
// rgba()


// let country = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// let newArr = [] // rastgele yukarıdaki diziyi almamızı sağladı.
// for (i = 0; i < country.length; i++) {

//     newArr.push(country[Math.floor(Math.random() * country.length)])
// }
// console.log(newArr);   


// let newArr = []

// for (i = 0; i < country.length; i++) {
//     newArr.push(`${countries[i].length}`)
// } 

// console.log(newArr);



// let newArr = []

// for (i = 0; i < country.length; i++) {
//     newArr.push([`${country[i]}--- ${country[i].slice(0, 3).toUpperCase()} ---${country[i].length} `])

//    let a= [
//     country[i],
//     country[i].slice(0, 3).toUpperCase(),
//     country[i].length
//    ]
//    console.log(a);

// }


// console.log(newArr);


// const country = [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
// ]

// let newArray = []
// for (i = 0; i < country.length; i++) {

//     if (country[i][0].includes('land')) {
//         newArray.push(country[i])

//     }
// }
// console.log(newArray)



// let ai= []

// for (i=0; i<country.length; i++) {
//     if (country[i][0].includes('ia')){
//         ai.push(country[i])
//     }
// }

// console.log(ai);


// let newArr = []

// for (i = 0; i < country.length; i++) {
//     console.log(country[i][0].length)
// }
// console.log(country[4]);

// var lnght = '';
// let longest;

// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].length > lnght) {
//         var lnght = countries[i].length;
//         longest = countries[i];
//     }
// }
// console.log(longest);


// let copyCountries = countries // avaiod mutation

// let copyCount = [...countries] // kopyalama işlemi


// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ]

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']


// console.log(webTechs.sort())
// console.log(mernStack.sort())




const country = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]



// for (i = 0; i < country.length; i++) {
//     if (country[i].length === 5) {
//         console.log(country[i]);
//     }
// }

let a = []
for (i = 0; i < country.length; i++) {
    if (country[i].includes('land')) {
        a.push(country[i])
        
    }
}
console.log(a);