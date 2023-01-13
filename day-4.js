// let age = prompt('Lütfen yaşınızı yazın')

// let ageResult = age > 18 ? `merhaba yaşınız ${age} ehliyet alabilirsiniz` : `
// merhaba yaşınız ${age} ehliyet almak için  ${18 - age} yaş beklemelisiniz`

// console.log(ageResult)



// let myAge = prompt('benim yaşım')
// let youAge = prompt('senin yaşın')

// let ageResults = myAge > youAge ? `merhaba benim yaşım ${24} senin yaşın ${youAge} ben senden ${myAge - youAge} yaş büyüğüm` : `merhaba sen benden ${ youAge-myAge} yaş büyüksün`
// console.log(ageResults)


// let a = 4
// let b = 3

// let abResult= a>b ? `a b'den büyüktür` :` b adan büyüktür `
// console.log(abResult);


// if ( a>b) {
//     console.log('a b den büyük');
// } else {
//     console.log('b a dan büyük');
// }


// let number = prompt('lütfen bir sayı giriniz')

// if(number % 2 ===0){
//     console.log('tuttuğunuz sayı çift');
// } else {
//     console.log('tuttupunuz sayı tek');
// }

// let notunuz = prompt('lütfen notunuzu yazın')

// if(notunuz >=0 && notunuz <=100){
//     if (notunuz >= 80 && notunuz <= 100){
//         console.log('notunuz AA');
//     } else if (notunuz >= 70 && notunuz <= 89){
//         console.log('notunuz BB');
//     }
//     else if (notunuz >= 60 && notunuz <= 69){
//         console.log('notunuz CC');
//     } else if (notunuz >= 50 && notunuz <= 59){
//         console.log('notunuz D');
//     } else {
//         console.log(' notunuz FF');
//     }
// }


// switch (true) {
//     case notunuz >= 80 && notunuz<=100:
//         console.log('A');
//         break
//     case notunuz >= 70 && notunuz <= 79:
//         console.log('B');
//         break
//     case notunuz >= 60 && notunuz <= 69:
//         console.log('C');
//         break
//     default:
//         console.log('değer girilmedi');
// } 


// let mevsimler = prompt('Lütfen hangi mevsimde olduğunuzu yazın')
// switch (mevsimler) {
//     case 'eylül' || 'ekim' || 'kasım':
//         console.log('Sonbahar')
//         break;
//     case 'aralık' || 'ocak ' || 'şubat':
//         console.log('Kış')
//         break;
//     case 'mart' || 'nisan  ' || 'mayıs ':
//         console.log('İlkbahar')
//         break;
//     case 'haziran' || 'temmuz  ' || 'ağustos ':
//         console.log('yaz')
//         break;
//     default:
//         break;
// }

// if (mevsimler == 'eylül' || mevsimler == 'ekim' || mevsimler == 'Aralık') {
//     console.log('mevsim sonbahar');
// } else if (mevsimler == 'aralık' || mevsimler == 'ocak' || mevsimler == 'subat') {
//     console.log('mevsim Kış');
// }else if (mevsimler == 'mart' || mevsimler == 'nisan ' || mevsimler == 'mayıs ') {
//     console.log('mevsim bahar');
// }else if (mevsimler == 'haziran' || mevsimler == 'temmuz ' || mevsimler == 'agustos ') {
//     console.log('mevsim yaz');
// }


// let days = prompt('lütfen bugünü giriniz')

// if( days=== 'pazar' || days ==='cumartesi'){
//     console.log('hafta sonu');
// } else {
//     console.log('hafta içi');
// }


// let ay = prompt('lütfen hangi ayda olduğunuzu yazın')

// if(ay === 'nisan' ||ay === 'haziran' ||ay === 'eylül'||ay === 'kasım'){
//     console.log('bu ay 30 gündür')
// } else if(ay === 'ocak' ||ay === 'mart' ||ay === 'mayıs'||ay === 'temmuz' ||ay === 'agustos' ||ay === 'ekim' ||ay === 'aralık'){
//     console.log('bu ay 31 gündür')
// } else if(ay === 'subat'){
//     console.log('bu ay 28 gündür')
// } else {
//     alert('boş değer')
// }