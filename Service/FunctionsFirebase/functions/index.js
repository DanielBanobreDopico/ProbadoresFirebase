const functions = require('firebase-functions');

// Aquí he eliminado los comentarios de introducción del fichero original.

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
exports.startPoint = functions.https.onRequest(app);
/**
 * El método onRequest sustituye al 'listen' de Express.
 */
//app.listen(3000,()=>{
//      console.log('Ya no necesitamos esto. Firebase Functions se encarga')
// }) ;

