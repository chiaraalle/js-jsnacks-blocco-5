const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'
let namesString = "";
names.forEach((element) => namesString += "'"+element+"'");
/*
names.forEach(myFunction);
function myFunction(item) {
   namesString += "'"+item+"'"
}*/

console.log(namesString)