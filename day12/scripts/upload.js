
let s3Client = new AWS.S3({
  endpoint: 'http://127.0.0.1:9000',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
  accessKeyId: 'X7KFDGOY01SKA79U2OGW',
  secretAccessKey: 'nUmGpsEo7fPdemijoG5L1m7+Cw6ZhoS7B0YPrO0v'
});

let file = document.getElementById("file");

let button = document.getElementsByTagName("button")[0];

button.addEventListener('click', function (event) {
  s3Client.putObject({
    Bucket: 'images',
    Key: file.files[0].name,
    Body: file.files[0],
    ContentLength: file.files[0].size,
    ContentType: file.files[0].type
  }, function (err, data) {
    console.log(err, data);
  });
  let caption = document.getElementById("caption").value;
  let data = {caption: caption, src: "http://localhost:9000/images/" + file.files[0].name};
  fetch('http://localhost:3000/images', {
	  method: 'POST',
	  body: JSON.stringify(data),
	  headers: {
		  'Content-Type': 'application/json'
	  }
  });
});
