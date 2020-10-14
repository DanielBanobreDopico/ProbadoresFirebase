<script>
	import {firestoreDb} from './firebase';
	import ColeccionTareas from './ColeccionTareas.svelte';

	var colTareas = firestoreDb.collection('tareas');

</script>

<main>
	<h1>Otra app de tareas</h1>

	<ColeccionTareas coleccion={colTareas}/>

	<code>
		<p>Recursos:</p> 
		<ul>
			<li>https://firebase.google.com/docs/auth/web/start</li>
			<li>https://firebase.google.com/docs/web/setup#apps-de-node.js</li>
			<li>https://firebase.google.com/docs/firestore/quickstart </li>
			<li>https://fireship.io/lessons/svelte-v3-overview-firebase/</li>
		</ul>
	</code>
</main>

<style>
</style>