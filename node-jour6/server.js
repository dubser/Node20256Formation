const express = require('express');
const app = express();
const PORT = 3000;

// Servir les fichiers statiques
app.use(express.static('public'));

// Données fictives pour l’API
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];

// Route API → JSON
app.get('/api/users', (req, res) => {
res.json(users);
//res.json([ { id: 1, name: 'Alice', age: 25 }]  ) ;
});

app.listen(PORT, () => {
  console.log(`Serveur en ligne sur http://localhost:${PORT}`);
});
