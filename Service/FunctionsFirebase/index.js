const express = require('express');
const cors = require('cors');

var app = express();
app.use(cors());

app.get( '/ping/', function( req, res ) {
    res.send('Pong!') ;
} ) ;

/**
 * Delegamos en el módulo de Firebase Functions la escucha de las llamadas.
 * Para ello importamos el módulo y empleamos el método onRequest.
 */
const functions = require('firebase-functions');
functions.https.onRequest(app);
/**
 * Por supuesto, puedes mover la linea del 'require' al principio de este fichero.
 * El método onRequest sustituye al 'listen' de Express.
 */
// app.listen(3000) ;