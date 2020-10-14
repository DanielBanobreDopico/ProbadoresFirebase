/**
 * Firebase initialization
 */

/**
 * El servicio Storage no está disponible en el módulo firebase 
 * de node en fecha actual (octubre 2020) por lo que la importación
 * de los módulos se hace por CDN en el fichero public/index.html
 */

const firebaseConfig = {
	apiKey: "AIzaSyCg2HPxXgzstIV5WujTNoU3Ijrnbjw28Ks",
	authDomain: "test-f624c.firebaseapp.com",
	databaseURL: "https://test-f624c.firebaseio.com",
	projectId: "test-f624c",
	storageBucket: "test-f624c.appspot.com",
	messagingSenderId: "143577927633",
	appId: "1:143577927633:web:4015b607713074b2ec1af0"
};
firebase.initializeApp(firebaseConfig);

/**
 * Firebase Storage
 */
export const firebaseStorageRoot = firebase.storage().ref();
