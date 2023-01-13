// // funksiyonlar day 7



// function a() {
//     console.log('parametre almayan fonksiyon');
// }
// a()


// function topla() {
//     let num = 2
//     let square = num * num
//     console.log(square);
// }

// topla()  // bu şekilde içinde değişkenler oluşturmak yerine parametreler geçebilirsiz hem daha dinamik oluyor.


// function toplamak(num) {
//     let square = num * num
//     return square
//     // parametre aldık ve dışarı aktardık.
// }

// console.log(toplamak(5, 5))


// function areaOfCircle(r) {
//     let area = Math.PI * r * r
//     return area
// }

// console.log(areaOfCircle(5));



// // function sumArrayValues(arr) {
// //     let sum = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         sum += arr[i]
// //     }
// //     return sum;
// // }

// // const numbers = [1, 2, 3, 4, 5]

// // console.log(sumArrayValues(numbers)); // numbers dizisini parametre olarak fonksiyona gönderdik 



// // function toplabakalım(sayıDizisi) {
// //     let sum = 0
// //     for (i = 0; i < sayıDizisi.length; i++) {
// //         sum += sayıDizisi[i]
// //     }
// //     return sum
// // }

// // console.log(toplabakalım(numbers))


// const changeToUpperCase = arr => {
//     const newArr = []
//     for (const element of arr) {
//         newArr.push(element.toUpperCase())
//     }
//     return newArr;
// }

// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// console.log(changeToUpperCase(countries))



// const sumAllNums = (...arg) => {
//     let sum = 0;
//     for (const element of arg) {
//         sum += element
//     }
//     return sum
// }

// console.log(sumAllNums(1,2,3,4,5));


// function calculateAge(birthYear, currentYear = 2023) {
//     let age = currentYear - birthYear
//     return age
//   }

//   console.log('Age: ', calculateAge(1998))



//   function weightOfObject(mass, gravity = 9.81) {
//     let weight = mass * gravity + ' N' // değer önce dize olarak değiştirilmelidir
//     return weight
//   }

//   console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 Dünya yüzeyinde yerçekimi
//   console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // Ay yüzeyinde yerçekimi




//   let deneme =(mass,gravity=9.81)  => {
//     let weight = mass * gravity + ' N' // değer önce dize olarak değiştirilmelidir
//     return weight
//   }

//   console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 Dünya yüzeyinde yerçekimi
//   console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // Ay yüzeyinde yerçekimi


// Egzersizler


// function fullName(name,surname){
// console.log(`Merhaba ben ${name}-${surname}`)
// }

// fullName('Mehmet','Ali')



// function fullName(name,surname){
//     let fullName=`Merhaba ben ${name}-${surname}`
//     return fullName;
//     }

//     console.log(fullName('Mehmet','Ali'));


// function addNumbers(num1, num2) {
//   let sum = num1 + num2;
//   return sum
// }


//     console.log(addNumbers(8,5));


// function dikdörtgen(uzunluk, genişlik) {
//     let alan = uzunluk * genişlik
//     return alan
// }

// console.log(dikdörtgen(5,5));


// function dikdörtgenCevre(uzunluk, genişlik) {
//     let cevre = 2 * (uzunluk + genişlik)
//     return cevre;
// }

// console.log(dikdörtgenCevre(5,7));



// function dikdörtgenPrizmaHacmi(uzunluk, genişlik, yükselik) {
//     let hacim = uzunluk * genişlik * yükselik
//     return hacim;
// }

// console.log(dikdörtgenPrizmaHacmi(5,5,5));


// function daireAlanı(r) {
//     let PI = Math.PI
//     let alan = PI * r * r
//     return alan
// }

// console.log(daireAlanı(5));


// function daireCevre(r) {
//     let PI = Math.PI
//     let cevre = 2 * PI * r
//     return cevre;
// }


// console.log(daireCevre(5));


// function maddeYogunlugu(kütle, hacim) {
//     let yogunluk = kütle / hacim;
//     return yogunluk
// }


// console.log(maddeYogunlugu(5,3));




// function hızHesapla(V, t) { // V= hız t = zaman
//     let hız = V * t
//     return hız;
// }

// console.log(hızHesapla(20, 3));


// function maddeAgirligi(kütle, yercekimi) {
//     let agırlık = kütle * yercekimi
//     return agırlık;
// }

// console.log(maddeAgirligi(11,5))



// function sıcaklık(oC) {
//     let of = (oC * 9 / 5) + 32
//     return of
// }


// console.log(sıcaklık(5));


// function vucutKitleIndex(kg, boy) {
//     let sonuc = kg / (boy * boy) // boy m2 cinsinden
//     if (sonuc <= 18.5) {
//         console.log(`Merhaba vucut kitle indexsiniz ${sonuc}  <18.5 altında lütfen kilo almaya çalışın. `)
//     } else if (sonuc >= 18.5 && sonuc <= 24) {
//         console.log(`Merhaba vucut kitle indexsiniz ${sonuc}  ağırlığınız normal. `)
//     } else if (sonuc >= 25 && sonuc <= 29) {
//         console.log(`Merhaba vucut kitle indexsiniz ${sonuc}  ağırlığınız aşırı kilolu .. `)
//     } else if (sonuc >= 30) {
//         console.log(`Merhaba vucut kitle indexsiniz ${sonuc}  ağırlığınız obez  `)
//     }
//     return sonuc
// }


// console.log(vucutKitleIndex(130, 1.81));


// function cheachSeason(ay) {
//     if(ay === 'ocak' || ay=== 'şubat' ){
//         console.log('Kış');
//     } else if(ay === 'mart' || ay=== 'nisan' ){
//         console.log('İlkBahar');
//     }
// }

// cheachSeason(cheachSeason("mart"))



// function findMax(a, b, c) {
//     if (a >= b && a >= c) {
//         console.log('en büyük sayı ', 'A:', a)
//     } else if (b >= a && b >= c) {
//         console.log('en büyük sayı ', "B:", b)
//     }
//     else if (c >= a && c >= b) {
//         console.log('en büyük sayı ', "C:", c)
//     }
// }

// findMax(15,25,5)



// function diziToplamı(arr) {
//     let sum = 0
//     for (const element of arr) {
//         sum += element
//     }
//     return sum
// }

// let numbers = [15,20,35]
// console.log(diziToplamı(numbers))



function showDateTime() {
    let time= new Date()
    return time;
}


console.log(showDateTime());