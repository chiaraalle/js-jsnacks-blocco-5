const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

let namesString = "";
names.forEach((name, index) => { 
    namesString += `'${name}'`;
    if(index < names.length -1){
        namesString += ","
    } 
});

console.log(namesString)