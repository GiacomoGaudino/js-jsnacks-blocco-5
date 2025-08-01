const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi

// stampo con il ciclo for
for (let i = 0; i < names.length; i++) {
  const thisName = names[i];
  console.log(thisName);
}

// stampo con il forEach e funzione estesa
names.forEach(function (name) {
  console.log(name);
})

// stampo con forEach e arrow function
names.forEach(name => {
  console.log(name);
})

// stampo con forEach e arrow function in line
names.forEach(name => console.log(name))



const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi

// stampo con il ciclo for
for (let i = 0; i < people.length; i++) {
  const thisPerson = people[i];
  console.log(thisPerson.name);
}

// stampo con il forEach e la funzione estesa
people.forEach(function (person) {
  console.log(person.name);
})

// stampo con il forEach e l'arrow function
people.forEach(person => {
  console.log(person.name);
})

// stampo con il forEach e l'arrow function in line
people.forEach(person => console.log(person.name))



const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1

// creo una funzione che sommi 1 ad un numero
function addOne(num) {
  return num + 1;
}

// creo variabile d'appoggio e ciclo for per pushare i numeri, aumentati di 1 richiamando la funzione creata prima
const numberAdd1 = [];
for (let i = 0; i < numbers.length; i++) {
  const thisNumber = numbers[i];
  numberAdd1.push(addOne(thisNumber));
}
console.log(numberAdd1);

/* creo variabile d'appoggio e uso forEach e funzione estesa per pushare i numeri, aumentati di 1 richiamando la funzione creata prima
const numberMoreOne = [];
numbers.forEach(function (number) {
  numberMoreOne.push(addOne(number))
})
console.log(numberMoreOne);
*/

/* creo variabile d'appoggio e uso forEach e arrow function per pushare i numeri, aumentati di 1 richiamando la funzione creata prima
const numberMoreOne = [];
numbers.forEach(number =>
  numberMoreOne.push(addOne(number))
)
console.log(numberMoreOne);
*/

// creo una variabile d'appoggio e uso forEach e arrow function in line per puschare i numeri, aumentati di 1 richiamando la funzione prima creata
const numberMoreOne = [];
numbers.forEach(number => numberMoreOne.push(addOne(number)))
console.log(numberMoreOne);



const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori

// creo variabile d'appoggio e uso ciclo for per pushare i nomi degli autori
const authorArray = [];
/*
for (let i = 0; i < posts.length; i++) {
  const thisPosts = posts[i];
  authorArray.push(thisPosts.author)
}
console.log(authorArray);
*/

/* uso il forEach per ciclare e la funzione estesa per pushare il nome degli autori nella variabile d'appoggio
posts.forEach(function (post){
  authorArray.push(post.author)
})
console.log(authorArray);
*/

/* uso il forEach per ciclare e l'arrow function per pushare il nome dell'autore nella variabile d'appoggio
posts.forEach(post => {
  authorArray.push(post.author)
})
console.log(authorArray);
*/

// uso il forEach per ciclare e l'arrow function in line per pushare il nomer dell'autore nella variabile d'appoggio
posts.forEach(post => authorArray.push(post.author))
console.log(authorArray);

/* uso map (con funzione estesa) per pushare i nomi degli autori
const newAuthor = posts.map(function (element) {
  return element.author
})
console.log(newAuthor);
*/

/* uso map (con arrow function) per pushare i nomi degli autori
const newAuthor = posts.map(element => {
  return element.author
})
console.log(newAuthor);
*/

// uso map (arrow function in line) per pushare i nomi degli autori
const newAuthor = posts.map(element => element.author);
console.log(newAuthor);



const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

// creo la variabile d'appoggio e una funzione per verificare se il numero è pari o dispari
const evenNums = []
function isEven(num) {
  if (num % 2 === 0) {
    return true
  }
}

/* uso il ciclo for e la condizione SE il numero è pari viene pushato nella variabile d'appoggio
for (let i = 0; i < nums.length; i++) {
  const thisNum = nums[i];
  if(isEven(thisNum)){
    evenNums.push(thisNum)
  }
}
console.log(evenNums);
*/

/* uso il forEach e la funzione estesa con la condizione SE il numero è pari viene pushato nella variabile d'appoggio
nums.forEach(function (num){
  if(isEven(num)){
    evenNums.push(num)
  }
})
console.log(evenNums);
*/

// uso il forEach e l'arrow function con la condizione SE il numero è pari viene pushato nella variabile d'appoggio

nums.forEach(num => {
  if (isEven(num)) {
    evenNums.push(num)
  }
})
console.log(evenNums);

/* uso filter con funzione scritta in modo esteso
const evenNumb = nums.filter(function (num) {
  if(isEven(num)){
    return true
  }
})
console.log(evenNumb);
*/

/* filter con arrow function
const evenNumb = nums.filter(num => {
  if (isEven(num)) {
    return true
  }
})
console.log(evenNumb);
*/

// filter con arrow function in line
const evenNumb = nums.filter(isEven);
console.log(evenNumb);


const pencils = [
  { brand: 'Faber-Castell', weight: 8, sizeInCm: 12 },
  { brand: 'Staedtler', weight: 9, sizeInCm: 18 },
  { brand: 'Faber-Castell', weight: 7, sizeInCm: 10 },
  { brand: 'Staedtler', weight: 10, sizeInCm: 16 },
  { brand: 'Faber-Castell', weight: 6, sizeInCm: 14 },
  { brand: 'Derwent', weight: 5, sizeInCm: 20 },
  { brand: 'Derwent', weight: 4, sizeInCm: 11 },
  { brand: 'Staedtler', weight: 6, sizeInCm: 9 },
  { brand: 'Caran d’Ache', weight: 12, sizeInCm: 22 },
  { brand: 'Caran d’Ache', weight: 11, sizeInCm: 13 },
];

// A partire dall'array fornito, crea due array. Uno con le matite lunghe almeno 15cm. L'altro con le restanti.

// creo due variabili d'appoggio e creo una funzione per vedere se la matita è >= a 15cm
const shortPencils = [];
const longPencils = [];
function over15Pencil(size) {
  if (size >= 15) {
    return true;
  }
}

/* uso il ciclo for e la condizione SE la funzione over15 è vera pusha la matita in una variabile d'appoggio, ALTRIMENTI la pusha nell'altra
for (let i = 0; i < pencils.length; i++) {
  const thisPencil = pencils[i];
  if (over15Pencil(thisPencil.sizeInCm)) {
    longPencils.push(thisPencil)
  } else {
    shortPencils.push(thisPencil)
  }
}
console.log(shortPencils);
console.log(longPencils);
*/

/* uso il forEach e la funzione estesa con la condizione SE la funzione over15 è vera pusha la matita in una variabile d'appoggio, ALTRIMENTI la pusha nell'altra
pencils.forEach(function (pensil){
  if(over15Pencil(pensil.sizeInCm)){
    longPencils.push(pensil)
  } else {
    shortPencils.push(pensil)
  }
})
console.log(shortPencils);
console.log(longPencils);
*/

// uso il forEach e l'arrow function con la condizione SE la funzione over15 è vera pusha la matita in una variabile d'appoggio, ALTRIMENTI la pusha nell'altra
pencils.forEach(pensil => {
  if (over15Pencil(pensil.sizeInCm)) {
    longPencils.push(pensil)
  } else {
    shortPencils.push(pensil)
  }
})
console.log(shortPencils);
console.log(longPencils);

/* uso filter e la funzione estesa per creare due array, una con le matite sopra i 15cm, l'altra con le matite sotto i 15cm
const pencilsOver15 = pencils.filter(function (pensil) {
  if (over15Pencil(pensil.sizeInCm)) {
    return true
  }
})
console.log(pencilsOver15);
const pencilsUnder15 = pencils.filter(function (pensil) {
  if (!over15Pencil(pensil.sizeInCm)) {
    return true
  }
})
console.log(pencilsUnder15);
*/

/* uso filter e l'arrow function per creare due array, una con le matite sopra i 15cm, l'altra con le matite sotto i 15cm
const pencilsOver15 = pencils.filter(pensil => {
  if (over15Pencil(pensil.sizeInCm)) {
    return true
  }
})
console.log(pencilsOver15);

const pencilsUnder15 = pencils.filter(pensil => {
  if (!over15Pencil(pensil.sizeInCm)) {
    return true
  }
})
console.log(pencilsUnder15);
*/

// uso filter e l'arrow function in line per creare due array, una con le matite sopra i 15cm, l'altra con le matite sotto i 15cm
const pencilsOver15 = pencils.filter(pensil => over15Pencil(pensil.sizeInCm));
console.log(pencilsOver15);

const pencilsUnder15 = pencils.filter(pensil => !over15Pencil(pensil.sizeInCm));
console.log(pencilsUnder15);


const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2

// uso il ciclo for e verifico la condizione SE l'id dello studente è 2, lo stampo in console
for (let i = 0; i < students.length; i++) {
  const thisStudent = students[i];
  if (thisStudent.id === 2) {
    console.log(thisStudent);
  }
}

/* uso forEach e la funzione estesa per stampare lo studente con l'id 2
students.forEach(function (student){
  if(student.id === 2){
    console.log(student);
  }
})
*/

/* uso il forEach e l'arrow function per stampare lo studente con l'id 2
students.forEach(student => {
  if (student.id === 2) {
    console.log(student);
  }
})
*/

// uso il forEach e l'arrow function in line per stampare lo studente con l'id 2
students.forEach(student => student.id === 2 && console.log(student))

/* uso find e la funzione estesa per trovare lo studente con l'id 2
const id2 = students.find(function (student){
  return student.id === 2
});
console.log(id2);
*/

/* uso find e l'arrow function per trovare lo studente con l'id 2
const id2 = students.find(student => {
  return student.id === 2
});
console.log(id2);
*/

// uso find e l'arrow function in line per trovare lo studente con l'id 2
const id2 = students.find(student => student.id === 2);
console.log(id2);



const students_2 = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    classroom: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    classroom: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    classroom: '5B'
  },
];

// Recuperare la classe dello studente Marco Lanci

// uso il ciclo for e verifico la condizione SE il nome dello studente è Marco Lanci, stampo la classe in console
for (let i = 0; i < students_2.length; i++) {
  const thisStudent = students_2[i];
  if (thisStudent.name === "Marco Lanci") {
    console.log(thisStudent.classroom);
  }
}

/* uso il forEach e la funzione estesa per stampare in console la classe dello studente Marco Lanci
students_2.forEach(function (student){
  if (student.name === "Marco Lanci"){
    console.log(student.classroom);
  }
})
*/

/* uso il forEach e l'arrow function per stampare in console la classe dello studente Marco Lanci
students_2.forEach(student => {
  if (student.name === "Marco Lanci") {
    console.log(student.classroom);
  }
})
*/

// uso il forEach e l'arrow function in line per stampare in console la classe dello studente Marco Lanci
students_2.forEach(student => student.name === "Marco Lanci" && console.log(student.classroom))

/* uso find con funzione estesa per trovare lo studente e poi stampo in console la sua classe
const studentFinder = students_2.find(function (student){
  return student.name === "Marco Lanci";
})
console.log(studentFinder.classroom);
*/

// uso find e l'arrow function per trovare lo studente e poi stampo in console la sua classe
const studentFinder = students_2.find(student => {
  return student.name === "Marco Lanci";
})
console.log(studentFinder.classroom);

// uso find e l'arrow function in line per trovare lo studente e poi stampo in console la sua classe
const classFinder = students_2.find(student => student.name === "Marco Lanci" && console.log(student.classroom))



