const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

let nomi = "";
people.forEach((nome, index) => { 
    nomi += `'${nome.name}'`;
    if(index < people.length -1){
        nomi += ","
    } 
});

console.log(nomi)