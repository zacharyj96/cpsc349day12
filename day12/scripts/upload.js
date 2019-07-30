
let s3Client = new AWS.S3({
  endpoint: 'http://127.0.0.1:9000',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
  accessKeyId: 'YOUR ACCESS KEY',
  secretAccessKey: 'YOUR SECRET KEY'
});

button.addEventListener('click', function (event) {
  s3Client.putObject({
    Bucket: 'images',
    Key: file.name,
    Body: file,
    ContentLength: file.size,
    ContentType: file.type
  }, function (err, data) {
    console.log(err, data);
  });
});
