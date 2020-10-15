const firebaseGoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

var user;

firebase.auth().onAuthStateChanged(
	newUser => {
		if (newUser) {
			user = newUser;
		} else {
			user = null;
		}
	}
);

async function login () {
	var result = await firebase.auth().signInWithPopup(firebaseGoogleAuthProvider)
	user = result.user;
	console.log('User arrives:', user)
	return user
}

async function logout () {
	await firebase.auth().signOut()
	user = null;
	console.log('User leaves')
}