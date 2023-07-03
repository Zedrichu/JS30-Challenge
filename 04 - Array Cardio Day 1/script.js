// Get your shorts on - this is an array workout!
// ### Array Cardio Day 1

// Data to work with
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filtered = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log("Inventors born in the 1500's:");
console.log(filtered);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const mapped = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log("Array of inventor full names:");
console.log(mapped);

// Array.prototype.sort()
// 3. Sort the inventors by birthday, oldest to youngest
const sorted = inventors.sort( (inv1, inv2) => inv1.year - inv2.year ); // inv1.year > inv2.year ? 1 : -1
console.log("Inventors sorted by year of birth:");
console.log(sorted);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const reduced = inventors.reduce((acc, inventor) => acc + (inventor.passed - inventor.year), 0);
console.log("All together inventors have lived:");
console.log(reduced + " years");

// 5. Sort the inventors by years lived
const sortedLived = inventors.sort( (inv1, inv2) => (inv2.passed - inv2.year) - (inv1.passed - inv1.year));
console.log("Inventors sorted by amount of years lived:");
console.log(sortedLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mv-category');
// const links = [...category.querySelectorAll('a')]; //Alternatively use Array.from(<links>)
// const de = links
//     .map(link => link.textContent)
//     .filter(street => street.includes('de'))
// console.log("List of specific Parisian boulevards:")    
// console.log(de)

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort( (name1, name2) =>  {
    const [last1, first1] = name1.split(', ')
    const [last2, first2] = name2.split(', ')
    return last1 > last2 ? 1 : -1
});
console.log("Alphabetically sorted list of people names:")
console.log(alpha)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const transportation = data.reduce( (acc, item) => {
    if (!acc[item]) {
        acc[item] = 0;
    }
    acc[item]++;
    return acc;
}, {});
console.log("Aggregated data by type of transportation:")
console.log(transportation)