// Jour 4 – Serveur avec Express.js

const express = require('express');
const app = express();
const PORT = 3000;

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d’accueil avec Express 🚀');
});

// Route "about"
app.get('/about', (req, res) => {
  res.send('À propos : serveur construit avec Express.js 💻');
});

// Route "contact"
app.get('/contact', (req, res) => {
  res.send('Contactez-nous à contact@example.com 📧');
});

// Gestion d’erreurs 404
app.use((req, res) => {
  res.status(404).send('Erreur 404 : page introuvable ❌');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});

