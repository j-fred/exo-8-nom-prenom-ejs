// chargement du module express
const express = require('express');
// initialisation du serveur express
const app = express();

const port = process.env.PORT || 3009;

// chemin vers les fichiers static css, js appeler via le front
app.use(express.static('static'));


// utilisation du moteur de rendu ejs
app.set('view engine', 'ejs');


//  route principale qui execute la fonction qui genere l'affichage
app.get('/', function (req, res) {
    name(res);  
});

/**
 * Fonction qui retoune le prenom sur la page index
 * @param {*} res 
 * @param {String} first 
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