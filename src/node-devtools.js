// javascript:(function(){const%20url%20=%20%27http%3A//localhost%3A9229/json%27;if(location.href%20!==%20url)%20return%20location.href%20=%20url;const%20overlay%20=%20document.createElement(%27div%27);overlay.setAttribute(%27style%27%2C%20%60position%3Aabsolute;z-index%3A99999;top%3A0;left%3A0;right%3A0;bottom%3A0;background%3Argba(0%2C0%2C0%2C0.7);color%3A%23ddd;font%3Anormal%2013px%20sans-serif;padding%3A%2010px;%60);const%20address%20=%20document.createElement(%27input%27);address.setAttribute(%27style%27%2C%20%60font%3Anormal%20200px%20sans-serif;border%3Anone;%20background%3A%23000;padding%3A0;%20color%3A%20%23eee;width%3A100%25;%60);overlay.appendChild(address);fetch(url).then(res%20=%3E%20res.json()).then(json%20=%3E%20{address.value%20=%20json[0].devtoolsFrontendUrl;document.body.appendChild(overlay);address.focus();address.setSelectionRange(0%2C%20address.value.length);}).catch(err%20=%3E%20console.error(err));})();
(function(){
	const url = 'http://localhost:9229/json';
	if(location.href !== url) return location.href = url;
	const overlay = document.createElement('div');
	overlay.setAttribute('style', `
		position:absolute;z-index:99999;
		top:0;left:0;right:0;bottom:0;
		background:rgba(0,0,0,0.7);color:#ddd;
		font:normal 13px sans-serif;
		padding: 10px;
	`);
	const address = document.createElement('input');
	address.setAttribute('style', `
		font:normal 200px sans-serif;
		border:none; background:#000;
		padding:0; color: #eee;
		width:100%;
	`);
	overlay.appendChild(address);
	fetch(url)
		.then(res => res.json())
		.then(json => {
			address.value = json[0].devtoolsFrontendUrl;
			document.body.appendChild(overlay);
			address.focus();
			address.setSelectionRange(0, address.value.length);
		})
		.catch(err => console.error(err))
	;
})();