/** Desde firebaseAuth.js */
// user : Objeto usuario de FirebaseAuth cuando un usuario ha iniciado sesión o null cuando no.
// login : Función para abrir el diálogo de inicio de sesión de Google.
// logout : Función para cerrar la sesión de usuario.

/** Desde firebaseFirestore.js */
// firebaseDB : Objeto para acceder a la base de datos Firebase Firestore.

/** Desde firebaseStorage.js */
//firebaseStorage : Objeto para acceder al almacenamiento de Firebase Storage.

const sessionButton = document.querySelector('#sessionButton');
sessionButton.addEventListener("click",toggleSession);

function toggleSession () {
    if (user) {
        logout();
        sessionButton.innerHTML='Login'
    } else {
        login()
            .then(
                () => {
                    sessionButton.innerHTML=`Logout ${user.displayName}`;
                }
            )
    }
}

