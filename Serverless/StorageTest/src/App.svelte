<script>
	import {firebaseStorageRoot} from './firebase';

	var uploadsFolder = firebaseStorageRoot.child('/uploads/');

	var files;
	var filesList = [];

	async function upload () {
		var localFile = files[0];
		console.log("File to upload:", localFile)
		var remoteFile = uploadsFolder.child(localFile.name);
		remoteFile.put(localFile)
			.then(
				snap => {
					console.log('File upladed:', remoteFile);
					listFiles();
				}
			);
	};

	async function listFiles () {
		filesList = [];
		var files = await uploadsFolder.listAll()
		files.items.forEach(
			async item => {
				var file = {
					name: item.name,
					url: await item.getDownloadURL(),
				}
				console.log(file)
				filesList = [...filesList, file];
				console.log(filesList)
			}
		);
	};

	listFiles();

</script>

<main>
	<h1>Uploads</h1>

	<input type="file" bind:files={files} placeholder="Select a file for upload...">
	<button on:click={upload}>Upload</button>

	<div id="files">
		<ul>
		{#each filesList as item}
			<li>
				<a href={item.url}><p>{item.name}</p></a>
			</li>
		{/each}
		</ul>
	</div>

	<code>
		<p>Recursos:</p> 
		<ul>
			<li>https://firebase.google.com/docs/storage/web/upload-files?hl=es</li>
			<li>https://firebase.google.com/docs/web/setup#apps-de-node.js</li>
			<li>https://firebase.google.com/docs/firestore/quickstart </li>
			<li>https://fireship.io/lessons/svelte-v3-overview-firebase/</li>
		</ul>
	</code>
</main>

<style>

</style>