const http = require('http');
const fs = require('fs');
const path = require('path');

const serveur = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    // Page principale
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Interactivité avec des données triées</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Afficher et Trier des Personnes</h1>
        <img src="/Mark_foto3.jpg" alt="Photo de Mark" style="width:200px;border-radius:10px;">
        <button id="loadButton">Charger les personnes</button>
        <button id="sortAgeButton" disabled>Trier par âge</button>
        <button id="sortNameButton" disabled>Trier par nom</button>
        <div id="data"></div>
        <script src="/script.js"></script>
      </body>
      </html>
    `);
  } else if (req.url === '/style.css' && req.method === 'GET') {
    // Servir le fichier CSS
    const cssPath = path.join(__dirname, 'style.css');
    fs.readFile(cssPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erreur lors du chargement du fichier CSS.');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  } else if (req.url === '/script.js' && req.method === 'GET') {
    // Servir le fichier JavaScript
    const jsPath = path.join(__dirname, 'script.js');
    fs.readFile(jsPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erreur lors du chargement du fichier JavaScript.');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(data);
    });
  } else if (req.url === '/Mark_foto3.jpg' && req.method === 'GET') {
    // Servir la photo
    const imgPath = path.join(__dirname, 'Mark_foto3.jpg');
    fs.readFile(imgPath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erreur lors du chargement de la photo.');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(data);
    });
  } else if (req.url === '/data' && req.method === 'GET') {
    // Charger les données depuis le fichier JSON
    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erreur lors de la lecture des données.');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  } else {
    // Route inconnue
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page non trouvée');
  }
});

serveur.listen(3000, () => {
  console.log('Serveur démarré ! Accède à http://localhost:3000');
});
