// javascript:(()=%3E{const%20size%20=%20250;const%20padding%20=%2010;const%20data%20=%20document.location.href;const%20endpoint%20=%20%60https%3A//api.qrserver.com/v1/create-qr-code/?size=%24{%20size%20}x%24{%20size%20}%26data=%24{%20escape(data)%20}%60;const%20features%20=%20[%60innerWidth=%24{%20size%20%2B%20padding%20%2A%202%20}%60%2C%60innerHeight=%24{%20size%20%2B%20padding%20%2A%202%20}%60%2C%60top=%24{%20window.screenTop%20%2B%2070%20}%60%2C%60left=%24{%20window.screenLeft%20%2B%2030%20}%60%2C%27menubar=no%27%2C%27location=no%27%2C%27resizable=no%27%2C%27scrollbars=no%27%2C%27status=no%27%2C];const%20newWin%20=%20window.open(endpoint%2C%20%27qr%27%2C%20features.join(%27%2C%27));})();
(()=>{
	const size = 250;
	const padding = 10;
	const data = document.location.href;
	const endpoint = `https://api.qrserver.com/v1/create-qr-code/?size=${ size }x${ size }&data=${ escape(data) }`;
	const features = [
		`innerWidth=${ size + padding * 2 }`,
		`innerHeight=${ size + padding * 2 }`,
		`top=${ window.screenTop + 70 }`,
		`left=${ window.screenLeft + 30 }`,
		'menubar=no',
		'location=no',
		'resizable=no',
		'scrollbars=no',
		'status=no',
	];
	const newWin = window.open(endpoint, 'qr', features.join(','));
})();
