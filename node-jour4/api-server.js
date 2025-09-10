// Bonus Jour 4 – Mini API avec Express
const express = require('express');
const app = express();
const PORT = 3000;

// Exemple de données fictives (mini "base de données")
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API Express 🚀');
});

// Route qui retourne tous les utilisateurs
app.get('/users', (req, res) => {
  res.json(users);
});

// Route qui retourne un utilisateur selon son id
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Utilisateur non trouvé ❌' });
  }
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`API Express démarrée sur http://localhost:${PORT}`);
});
