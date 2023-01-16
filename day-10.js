// Set and map
// set ve map , array ve objeye benziyor . set'in array'den farkı öğelerin benzersiz olması  gerekiyor. Mesela array içinde iki kere mehmet var bunu set metodu ile kullanırsak sadece bir kere mehmet değerini alır.  Map' in object farkı object biz keyleri sadece string olarak verebiliyorken map her türlü değer verebilriiz(bool, number, string vs);


const companies1 = new Set(); // bu şekilde oluşturabiliriz.
// console.log(companies);

// bir array'den set oluşturmak için parametre olarak array'i kullanabiliriz.
let numbers = [1, 3, 3, 5, 6, 7, 7]
let setNumbers = new Set(numbers);
console.log(setNumbers);  // 1,3,5,6,7 çıktısını alırız;


// set tekrarlanan bir nesne olduğu için for ile dönebiliriz.

for (let num of setNumbers) {
    // console.log(num) // bu şekilde elemanları dönebiliyoruz.
}

// eğer biz setNumbers'ı map ile dönmeye çalışırsak hata alırız bu hatayı almamak için [...] spread op. kullanılabilir.

[...setNumbers].map(num => console.log(num)) // 1 3 5 7 


// set'te yeni bir öğe eklemek istiyorsak eğer .add kullanmamız gerekiyor.

setNumbers.add(8) // yeni eleman ekledik
// console.log(setNumbers);


// eğer set'te uzunluğu öğrenmek istiyorsak size kullanmamız gerekiyor.
// console.log(setNumbers.size); // 6


// set'e eleman eklemek için for döngüsü kullanılabilir.

const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfComponies = new Set()
for (const company of companies) {
    setOfComponies.add(company)
}

// console.log(setOfComponies); // bu şekilde kullanımda mevcut


// delete ile bir öğeyi silme işlemi yapılabilir.4


// console.log(setOfComponies.delete('Google'))
// console.log(setOfComponies); // google silindi



// has ise bir öğenin olup olmadığını kontrol eder
// console.log(setOfComponies.has('Google')) // false çünkü google sildik


// clear ise tüm öğeleri siler
setOfComponies.clear()



const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const langSet = new Set(languages)
console.log(langSet);
const counts = []

for (const l of langSet) {
    const filteredLang = languages.filter(lng => lng === l)
    console.log(filteredLang);
    counts.push({ language: l, count: filteredLang.length })
}
console.log(counts);


// iki kümeyi birleştirmek istiyorsak eğer  [...a, ...b]
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]
// burada a ve b yi birleştirme işlemi yaptık ve daha sonra aşağıda set işlemi yaparak benzersiz hale getirdik.

// let C = new Set(c)

// console.log(C)


let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num)) // aynı olanlara ulaşırız b nin başına ! koyarsak farklı olanları alrıız.
let C = new Set(c)

// console.log(C)



// map ise her türlü veri türünü key olarak alabilir objeden farkı bu 

// const map = new Map() // bu şekilde map oluşturabiliyoruz.
// console.log(map);

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const map = new Map(countries)
// console.log(map)
// console.log(map.size)


// map'e değer eklemek istiyorsak eğer countries.set diyoruz.

map.set('Turkey', 'Ankara')
// console.log(map);// bu şeiklde eleman ekleyebilyioruz


// değer almak istiyorsak get metodu kullanılıyor.

// console.log(map.get('Turkey'));// ankara

// bir öğenin olup olmadığını kontrol etmek için has kullanılıyor

// console.log(map.has('Turkey')) // true

//Döngü kullanarak haritadan tüm değerli alabilyioruz

for (const country of map) {
    console.log(country); // array olarak aldık
}



for (const [country, city] of map) {
    console.log(country, city); // string olarak aldık
}


//Set() Ve Map() Egzersizler day 10

let emptySet = new Set();

for (i = 0; i < 10; i++) {
    emptySet.add(i) // parantezleri bu şekilde yaptım [] şekilde olmuyor.
}

// console.log(emptySet);


// console.log(emptySet.delete(5))
// console.log(emptySet); // artık 5 silindi

// console.log(emptySet.clear()) // hepsini temizledik
// console.log(emptySet)


for (let i = 0; i < 6; i++) {
    emptySet.add(i)
}

// console.log([...emptySet]);



const countries1 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]

let setLangues = new Map(countries1)
// console.log(setLangues);
// console.log(setLangues.size);


let a1 = [1, 2, 3, 4, 5]
let b1 = [3, 4, 5, 6]

let A1 = new Set(a1)
let B1 = new Set(b1)

let c1 = a.filter((num) => !B.has(num))
let C1 = new Set(c1)

// console.log(C1)



