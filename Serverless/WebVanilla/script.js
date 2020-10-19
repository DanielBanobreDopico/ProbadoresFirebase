/**
 * Prueba Firebase Auth
 */
/** Desde firebaseAuth.js */
// user : Objeto usuario de FirebaseAuth cuando un usuario ha iniciado sesión o null cuando no.
// login : Función para abrir el diálogo de inicio de sesión de Google.
// logout : Función para cerrar la sesión de usuario.

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


/**
 * Prueba Firebase Storage
 */

/** Desde firebaseStorage.js */
//firebaseStorageRoot : Objeto para acceder a la raiz del almacenamiento de Firebase Storage.

const uploadsFolder = firebaseStorageRoot.child('/webUploads/');

const inputFiles = document.querySelector('#inputFiles');
const submitFiles = document.querySelector('#submitFiles');
const uploadProgress = document.querySelector('#uploadProgress');
const uploadsList = document.querySelector('#uploadsList');

submitFiles.onclick = upload;

var files;
var filesList = [];

async function upload () {
    var upload;
    var localFile = inputFiles.files[0];
    console.log("File to upload:", localFile)
    var remoteFile = uploadsFolder.child(localFile.name);
    upload = remoteFile.put(localFile);
    upload.on('state_changed', 
        snapshot => uploadProgress.value = (snapshot.bytesTransferred / snapshot.totalBytes),
        err => console.error(err),
        () => listFiles()
    )
};

async function listFiles () {
    var files = await uploadsFolder.listAll()
    uploadsList.innerText='';
    files.items.forEach(
        async item => {
                var name = item.name;
                var url = await item.getDownloadURL();
                var listElement = document.createElement('li');
                var link = document.createElement('a');
                link.href=url;
                link.target="_blank"
                link.innerText=name;
                listElement.appendChild(link);
                uploadsList.appendChild(listElement);
            }
    );
};

listFiles();

/**
 * Prueba Firebase Firestore
 */
/** Desde firebaseFirestore.js */
// firebaseDB : Objeto para acceder a la base de datos Firebase Firestore.

const collectionPrints = firebaseDB.collection('prints');

const printsTable = document.querySelector('#printsTable');

async function showPrints() {
    var querySnapshot = await collectionPrints.orderBy('date', 'desc').limit(10).get()
    printsTable.innerText = '';
    querySnapshot.forEach(
        docReference => {
            var doc = docReference.data();
            var dateString = new Date(doc.date).toLocaleString()
            var userAgent = doc.userAgent;
            var tableRow = document.createElement('tr');
            var tableCol1 = document.createElement('td');
            var tableCol2 = document.createElement('td');
            tableCol1.innerText = dateString;
            tableCol2.innerText = userAgent;
            tableRow.appendChild(tableCol1);
            tableRow.appendChild(tableCol2);
            printsTable.appendChild(tableRow);
        }
    );
}

async function registerPrint() {
    var doc = {
        userAgent: navigator.userAgent,
        date: Date.now(),
    }
    await collectionPrints.add(doc);
    showPrints();
}

registerPrint();

