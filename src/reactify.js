// javascript:(function(){var%20host%20=%20%27http%3A//tfk-qa.time.com/%27;if(location.hostname%20===%20%27tfk-qa.time.com%27){location.href%20=%20location.href.replace(%27tfk-qa.time.com%27%2C%20%27localhost%3A3000%27);return;}var%20path%20=%20location.pathname;if((/(people.com%7Cew.com%7Cinstyle.com%7Cextracrispy.com%7Cmotto.time.com)/).test(location.hostname)){path%20=%20%27/%27%20%2B%20utag_data.content_id;}location.href%20=%20(host%20%2B%20location.hostname.replace(/(www%5C.%7C%5C.com)/g%2C%20%27%27)%20%2B%20path);})();
(function(){
	var host = 'http://tfk-qa.time.com/';
	
	if(location.hostname === 'tfk-qa.time.com'){
		location.href = location.href.replace('tfk-qa.time.com', 'localhost:3000');
		return;
	}

	var path = location.pathname;
	if(
		(/(people.com|ew.com|instyle.com|extracrispy.com|motto.time.com)/)
		.test(location.hostname)
	){
		path = '/' + utag_data.content_id;
	}

	location.href = (host + location.hostname.replace(/(www\.|\.com)/g, '') + path);
})();
