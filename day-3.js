// Days-3
// egzersizler 

/* let firstName = 'Mehmet'
let lastName = 'Ali'
let country = 'Turkey'
let city = 'Istanbul'
let age = 25
let isMarried = false
let year = new Date()

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

console.log('10 ' === 10) //false tipleri aynı değil

console.log(parseInt('9.8') === 10) // false 9 10 eşit değil


console.log(5 < 7)  // true
console.log(true === true)  // true
console.log(5 != true) // true

console.log(false === true) // false
console.log(5 === '5') // false
console.log(3 < 2) // false


console.log('d', 'Python'.length != 'jargon'.length) // false

let dragon = 'dragon'
let python = 'python'
console.log(!(dragon.includes('on') && python.includes('on')))


// console.log(year.getFullYear())
// console.log(year.getMonth() + 1)
// console.log(year)
// console.log(year.getHours())
// console.log(year.getMinutes())
// console.log(year.getTime())


// egzersiz level 2

// let yükselik = prompt('lütfen üçgenin alanını yazınız')
// let taban = prompt('lütfen üçgenin tabanını yazınız')

// let alan = 0.5 * yükselik * taban
// console.log(alan)


// let a= prompt('a kenarı')
// let b= prompt('b kenarı')
// let c= prompt('c kenarı')

// let cevre= Number(a) +Number(b) + Number(c)

// console.log(cevre)

// let uzunluk = prompt('uzunluk')
// let genislik = prompt('genislik')
// let alan = 2 * (Number(uzunluk) + Number(genislik)) 
// console.log(alan);

// const yarıCap= Math.PI
// const r = prompt('lütfen r yazın')
// let alan = yarıCap * r*r
let çevre = 2* yarıCap * r
// console.log(alan,çevre);


// const saat = prompt('saatlik ücret')
// const hafalıkToplam = prompt('haftalık çalışma saati')

// let result = saat * hafalıkToplam
// console.log(result)


let name = 'mehmet'

console.log('isiminizin uzunluğu', name.length > 7 ? 'isminiz 7 den büyük' : '7 den uzun değil')

let surname = 'ALi'

console.log(`benim adım ${firstName} soyadım ${lastName} ${firstName.length > surname.length ? 'isminiz soy isimden  uzun' : 'soy ismini z uzun'} `)


let myAge = 25
let youAge = 15

console.log(myAge>youAge ? `I am ${myAge} years old older than you` : `${youAge} benden büyük`)

// let ehliyet =prompt('lütfen yaşınızı yazın')

// console.log(ehliyet>=18 ? `merhaba yaşınız ${ehliyet} alabilirsiniz` :`${ehliyet} yaşında ehliyet alamassnız yaşnıız en az 18 olmalı`)

const kacSaniye= prompt('kaç yaşınasın')
let deneme =31556926
console.log(kacSaniye *deneme )


*/

let tarih = new Date()

let yıl = tarih.getFullYear()

let ay = tarih.getMonth()
let gün = tarih.getDay()
let saat = tarih.getHours()
let saniye = tarih.getSeconds()


document.write(yıl ,"-", ay ,"-", gün,'-',saat ,':' ,saniye)

