<script>
	import {firebaseStorage} from './firebase';
	var storageRaiz = firebaseStorage.ref();
	var imgFolder = storageRaiz.child('/img/');

	var files;
	var filesList = [];

	async function upload () {
		var img = imgFolder.child('');
		img.put(files[0])
			.then(
				snap => {
					console.log('File upladed:', file);
					listFiles();
				}
			);
	};

	async function listFiles () {
		listRef.listAll().then(
			res => {
				var newFileList = [];
				res.items.forEach(
					item => {
						newFileList.push(item);
					}
				);
				filesList = [...newFileList];
			}
		)
	};
</script>

<main>
	<h1>Uploads</h1>

	<input type="file" bind:files={files} placeholder="Select a file for upload...">
	<button on:click={upload}>Upload</button>

	<div id="files">
		<ul>
		{#each filesList as file}
			<li>{file.name}</li>
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
	#book {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
	.entry {
		display: flex;
		align-items: center;
		padding: 20px;
		max-width: 400px;
	}
	.entry > div {
		margin: 20px;
	}
	.entry > div > q {
		font-style: italic;
		font-size: xx-large;
	}
	.entry > div > p {
		font-size: xx-small;
	}
</style>