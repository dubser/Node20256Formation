const fs = require('fs');
// Écriture dans un fichier
fs.writeFileSync('message.txt', 'Bonjour depuis Node.js !');

// Lecture du fichier
const data = fs.readFileSync('message.txt', 'utf8');
console.log('Contenu du fichier :', data);
