<script>
	import {firebaseStorageRoot} from './firebase';

	var uploadsFolder = firebaseStorageRoot.child('/uploads/');

	var files;
	var filesList = [];
	var uploadProgress = 0;

	async function upload () {
		var upload;
		var localFile = files[0];
		console.log("File to upload:", localFile)
		var remoteFile = uploadsFolder.child(localFile.name);
		upload = remoteFile.put(localFile);
		upload.on('state_changed', 
			snapshot => uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes),
			err => console.error(err),
			() => listFiles()
		)

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
				filesList = [...filesList, file];
			}
		);
	};

	listFiles();

</script>

<main>
	<h1>Uploads</h1>
	<input type="file" bind:files={files} placeholder="Select a file for upload...">
	<button on:click={upload}>Upload</button>
	<progress value={uploadProgress}></progress>
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