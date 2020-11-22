# Storage

async function createBucket() {
    await storage.createBucket(bucketName);
  }

 async function uploadFile() {
    await storage.bucket(bucketName).upload(filename, {
      gzip: true,
    });
    
 async function deleteFile() {
    await storage.bucket(bucketName).file(filename).delete();
  }

  async function makePublic() {
    await storage.bucket(bucketName).file(filename).makePublic();
  }

  async function downloadFile() {
    const options = {
      destination: destFilename,
    };

    await storage.bucket(bucketName).file(srcFilename).download(options);

  }
  
async function getMetadata() {
    const [metadata] = await storage
      .bucket(bucketName)
      .file(filename)
      .getMetadata();

    console.log(`File: ${metadata.name}`);
    console.log(`Bucket: ${metadata.bucket}`);
    console.log(`Storage class: ${metadata.storageClass}`);
    console.log(`Self link: ${metadata.selfLink}`);
    console.log(`ID: ${metadata.id}`);
    console.log(`Size: ${metadata.size}`);
    console.log(`Updated: ${metadata.updated}`);
    console.log(`Generation: ${metadata.generation}`);
    console.log(`Metageneration: ${metadata.metageneration}`);
    console.log(`Etag: ${metadata.etag}`);
    console.log(`Owner: ${metadata.owner}`);
    console.log(`Component count: ${metadata.component_count}`);
    console.log(`Crc32c: ${metadata.crc32c}`);
    console.log(`md5Hash: ${metadata.md5Hash}`);
    console.log(`Cache-control: ${metadata.cacheControl}`);
    console.log(`Content-type: ${metadata.contentType}`);
    console.log(`Content-disposition: ${metadata.contentDisposition}`);
    console.log(`Content-encoding: ${metadata.contentEncoding}`);
    console.log(`Content-language: ${metadata.contentLanguage}`);
    console.log(`Media link: ${metadata.mediaLink}`);
    console.log(`KMS Key Name: ${metadata.kmsKeyName}`);
    console.log(`Temporary Hold: ${metadata.temporaryHold}`);
    console.log(`Event-based hold: ${metadata.eventBasedHold}`);
    console.log(
      `Effective Expiration Time: ${metadata.effectiveExpirationTime}`
    );
    console.log(`Custom Time: ${metadata.customTime}`);
    console.log(`Metadata: ${metadata.metadata}`);
  }
```
