const countries = [

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

    'Kenya'

]



const webTechs = [

    'HTML',

    'CSS',

    'JavaScript',

    'React',

    'Redux',

    'Node',

    'MongoDB'

]


// boş bir dizi oluşturmak için hem array constructor hem de [] kullanilabilir


// let emptyArray= Array();  // 1 yöntem
// console.log(emptyArray);


// let emptyArray= []
// console.log(emptyArray); // 2 yöntem


// let fiveItem = [1, 2, 3, 4, 5]
// console.log(fiveItem.length); // 5 elemanlı array .lenght ile uzunuluğuna ulaşabiliriz

// console.log(fiveItem[0]); // ilk elamana ulaştık
// console.log(fiveItem[Math.floor(fiveItem.length / 2)]); // ortadaki elemana ulaştık
// console.log(fiveItem.length - 1); // son elemana ulaştık


// let mixedDataTypes= [1 ,'mehmet', true, {isim:'ali'}, [2,'ahmet']] // arrayler birden fazla veri türü depolayabilirler.
// console.log(mixedDataTypes.length)
// console.log(mixedDataTypes[4][0])


// let ıtCompanies = ' Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon'
// ıtCompanies=ıtCompanies.split(',') // split ile string ifademizi diziye çevirebiliyoruz.

// let ıtCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle ', 'Amazon']
// console.log(ıtCompanies[0].toUpperCase())


// if (ıtCompanies.includes('Facebook')) {
//     console.log('Facebook var');
// } else {
//     console.log('not found');
// }


// let o = ıtCompanies.filter(item => item.includes('o'))
// console.log(o); içinde o harfi geçenleri filtreledik ama büyük küçük harf duyarlı o yüzden hepsini toLowerCase() yapabilirdik.

// console.log(ıtCompanies.sort()) // sort sayesinde sıralama yaptık

// console.log(ıtCompanies.reverse()) // diziyi tersine çevirdik

// let slice = ıtCompanies.slice(0, 3)
// console.log(slice); // slice metodu ile diziminiz 0 dan başlayarak 3 elemanı dilimledik ayırdık.

// let slice1 = ıtCompanies.slice(ıtCompanies.length - 3)
// console.log(slice1); // dizidenn son 3 elemanı dilimledik

// let slice2 = ıtCompanies.slice(3, 4)
// console.log(slice2);

// let deleteIt = ıtCompanies.shift() // ilk elemanı sildik
// console.log(deleteIt);
// console.log(ıtCompanies);

// let lastDeleteIt = ıtCompanies.pop() // son elemanı sildik
// console.log(lastDeleteIt);
// console.log(ıtCompanies);


// let allItem = ıtCompanies.slice(ıtCompanies.length)
// console.log(allItem); // tüm elemanları kaldırdık.


// const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']


// if(!(shoppingCart.includes('Meat') && shoppingCart.includes('Sugar'))){
//     shoppingCart.unshift('Meat')
//     shoppingCart.push('Sugar')

// } 

// console.log(shoppingCart);



// let falser= false;

// if(falser === false ){
//     shoppingCart.pop()
// }

// console.log(shoppingCart);

// shoppingCart[2] ='Grean tea'
// console.log(shoppingCart);







let ItCompanies = ["Facebook", "Google", "Microsoft", "Apple", "Oracle", "Amazon"]



for (i = 0; i < ItCompanies.length; i++) {
    if (ItCompanies[i].indexOf('o') != ItCompanies[i].lastIndexOf('o')) {
        console.log(ItCompanies[i])
    }
}