
var user;

var firebaseGoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(function(user) {
    if (newUser) {
        user = newuser;
    } else {
        user = null;
    }
});
