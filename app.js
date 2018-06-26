// chargement du module express
const express = require('express');
// initialisation du serveur express
const app = express();

const port = process.env.PORT || 3009;

// chemin vers les fichiers static css, js appeler via le front
app.use(express.static('static'));


// utilisation du moteur de rendu ejs
app.set('view engine', 'ejs');


//  route principale qui affichera le nom et le prenom sur la page index via ejs
app.get('/', function (req, res) {
    name(res);  
});

/**
 * fonction qui retoune le nom et prenom en parametre
 * @param {string} first 
 * @param {string} last 
 */
function name(res,first="Jean-Fred") {
    res.render('index', {
        name: first
    });
}


// start the server
app.listen(port,  function () {
    console.log('Démarrage du serveur sur =>  http://localhost:' + port);
});