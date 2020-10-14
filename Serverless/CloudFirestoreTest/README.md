# Recursos

## Documentación de la que tiré
* https://firebase.google.com/docs/auth/web/start
* https://firebase.google.com/docs/web/setup#apps-de-node.js
* https://firebase.google.com/docs/firestore/quickstart
* https://fireship.io/lessons/svelte-v3-overview-firebase/

## Sobre los objetos 'snapshot' de Firestore
Firestore nos porporciona acceso a un tipo de objeto que nos permite mantener nuestra aplicación permanentemente actualizada respecto al contenido de las colecciones de Firestore mediante el evento `onSnapshot`.

Cuando usamos el método `onSnapshot` de una colección o una consulta, el evento recive un `querySnapshot` ([doc](https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot)). Este objeto es el contenido de la colección (o la consulta) actualizada. Podemo recorrer los elementos de la consulta mediante el método `forEach`. Cada uno de los elementos que contiene es un `queryDocumentSnapshot` ([doc](https://firebase.google.com/docs/reference/js/firebase.firestore.QueryDocumentSnapshot)). Estos objetos proporcionan una referencia a los documentos correspondientes mediante su propiedad `.ref` de modo que resulta sencillo realizar operaciones con cada uno de los documentos a partir de `queryDocumentSnapshot.ref` ([doc](https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference)).

Cada referencia de documento nos permite acceder a su propio evento `onSnapshot` que disparará un handler que recibirá un `documentSnapshot` ([doc](https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot)) muy similar al `queryDocumentSnapshot`.

## Subcolecciones

Cada documento de Firestore puede a su vez disponer de multiples subcolecciones que permiten almacenar 'subdocumentos' de diferentes tipos pertenecientes al documento principal.

Esto nos puede permitit crear fácilmente estructuras en arbol de documentos de diferentes tipos.

Las referencias a documentos disponen de un método `.collection` que nos permite crear o consultar colecciones sobre un documento. Por ejemplo:
```nodejs
var asignaturas = alumnoSnapshot.ref.collection('asignaturas')
```
nos proporcionaría acceso a la colección 'asignaturas' propia de un alumno específico, creandola de ser necesario. 