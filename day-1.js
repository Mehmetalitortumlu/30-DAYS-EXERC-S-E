// Yorumlar kodu daha okunabilir hale getirmeye yardımcı olur

// 30GundeJavaScript eğitimine hoş geldiniz.


/* 
Yorumlar kodu okunabilir yeniden kullanımı kolay ve bilgilendirici bir hale getirir.
*/



//undefined ile null farkı ikisinde boş döner ama tip olarak undefined = undefined , null = object döner

console.log(
    'mehmet',
    true,
    18,
    undefined,
    null
)


//typeof bize veri türünü belirtir
console.log(typeof 'mehmet')
console.log(typeof true)
console.log(typeof 15)
console.log(typeof undefined)
console.log(typeof null)


// burada degeri olmayan değiskenler atadık let ile tanımladığımız için daha sonradan değiştirebiliriz. Ama const değişkenini bu şekilde tanımlayamaz ve daha sonradan değiştiremeyiz. örn const PI= 3.14

let a;
let b;
let c;
let d;

a = 1
b = 2
c = 3
d = 4

console.log(a, b, c, d);

// burada ise değişkene değer atayarak ve virgül kullanarak birden fazla let yazmadan değişken tanımlayabildik.
let name = 'mehmet',
    surname = 'ali',
    isMarried = false,
    country = 'Turkey',
    age = 25


console.log(name, surname, isMarried, country, age);

let myAge = 25
let youAge = 30

console.log('benim yaşım', myAge, 'senin yaşın', youAge)