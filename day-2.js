//Gün 2 egzersizleri

let challenge = '30 Days Of JavaScript'

console.log(challenge)


// lengt bize dizinin uzunluğunu verir
console.log(challenge.length)

// diziyi büyük harf yapmak için toUpperCase()

console.log(challenge.toUpperCase())

// diziyi küçük hatf yapmak için ise toLowerCase()

console.log(challenge.toLowerCase())

// substring ise diziyi dilimlemeye(bölmeye ) yarar.

console.log(challenge.substring(2, 7))

console.log(challenge.substring(3, 21)) // 3 den başla 21 e kadar dilimle dedik. // Days Of JavaScript


//includes içeriyorsa demektir içeriyorsa true(1) içermiyorsa false (0)

console.log(challenge.includes('Of')) // true 0
console.log(challenge.includes('ahmet')) // false -1 


// split ise bölmek anlamına gelir hem bizim string ifademizi böler hem de array haline getirir.

console.log(challenge.split(','))


let a = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(a.split(', '))

// replace yer değiştirme işine yarar

console.log(challenge.replace('JavaScript', 'Python'))


// chartAt ile index numarsını yazarak o numarada ki kelimeyi alabiliriz.
console.log(challenge.charAt(15)) // S

// charCodeAt ise bize karakter kodunu verir ASCII

console.log(challenge.charCodeAt('J')) // 51


// indexOf ise bize içeren ilk değerin index numarasını döner. Birden fazla değer varsa eğer alamayiz. Çünkü ilk değeri döner.

console.log(challenge.indexOf('a')) // 4

// lastIndexOf ise bize son değerin index numarısını döner.

console.log(challenge.lastIndexOf('a')) // 14



let cümle = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır.'

console.log(cümle.indexOf('çünkü')) // bize çünkü kelimesinin ilk geçtiği değeri döner

console.log(cümle.lastIndexOf('çünkü')) // bize çünkü kelimesinin son döndüğü yeri verir.

console.log(cümle.search('çünkü')) // bize çünkü kelimesnin geçtiği ilk yeri döner

// trim ise bizim baştaki ve sonda ki boşlukları silmemizi sağlar

console.log(challenge.trim()) //  JavaScript   


//startWith ise bize dizinin  belirtilen değerle başlayıp başlamadığını kontrol eder.

console.log(challenge.startsWith('30')) // true

// endWitdh ise bize dizinin belirtilen değerler bitip bitmediğini gösterir
console.log(challenge.endsWith('JavaScript')) // true


// Match ise tüm a ları bulmayı sağlar

console.log(challenge.match('a'))

let dize1 = '30 Days Of'
let dize2 = ' JavaScript'

console.log(dize1.concat(dize2))

console.log(challenge.repeat(2))



// Egzersiz Seviye 2

console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// == sadece değerlere bakar === hem değer hem veri tipine bakar
console.log('10' === 10) //false veri tipleri farklı 

// yukarıdaki veri tiplerini eşitlemek için parseInt, toString, parseFloat veya Number kullanılabilir

console.log(parseInt('10') === 10) // true

let python = 'python'
let jargon = 'jargon'

console.log(python.includes('on') && jargon.includes('on')) //true

let cümle3 = 'Umarım bu kurs jargonla dolu değildir'

console.log(cümle3.includes('jargon')) // jargon içerdiği için true

//Math.random bize rastgele bir sayı üretir.

console.log(Math.floor(Math.random() * 100)) // rastgele 0-100 sayı üretir
let elli = 50

const js = 'JavaScript'
console.log(js[4])

console.log(`
1 1 1 1 
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
`)


// console.log(cümle.indexOf('çünkü çünkü'))
// console.log(cümle.indexOf('bir')) // burada kelimelerin geçtiği yeri indexOf ile buldum bana kolaylık sağladı
console.log(cümle.substring(37, 49))



console.log(Number('9.8') === 10)

let cümle4 = 'Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.'


console.log(cümle4.toLowerCase().match('aşk'))

let cümle5 = 'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.'

console.log(cümle5.indexOf('5000'))
let ay = parseInt(cümle5.substring(16, 20))

console.log(cümle5.indexOf('10000'))
let yıl = Number(cümle5.substring(34, 39))

console.log(cümle5.indexOf('15000'))
let kurs = Number(cümle5.substring(60, 65))

let total = ay + yıl + kurs
console.log(total)

