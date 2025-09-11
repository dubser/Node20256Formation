
const express = require('express');
const app = express();
const PORT = 3000;

// Servir les fichiers du dossier public
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Mini-site disponible sur http://localhost:${PORT}`);
});
