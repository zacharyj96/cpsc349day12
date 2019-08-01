window.onload = function() {
	fetch('http://localhost:3000/images').then(function(response) {
		return response.json();
	}).then(function(data) {
		console.log(data);
		let list = document.getElementById("list");
		for (let i = 0; i < data.length; i++) {
			let enclosingDiv = document.createElement('div');
			let img = document.createElement('img');
			let caption = document.createElement('div');
			img.src = data[i].src;
			caption.innerHTML = data[i].caption;
			enclosingDiv.appendChild(img);
			enclosingDiv.appendChild(caption);
			list.appendChild(enclosingDiv);		
		}
	});
};