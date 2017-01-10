// javascript:(function(){var%20time%20=%20(/time%5C.com%5C/(%5Cd%2B)%5C/[a-zA-Z0-9]%2B[-a-zA-Z0-9]%2A/).exec(location.href);if(time)%20location.href%20=%20%27http%3A//time.com/wp-json/ti-api/v1/posts/%27%20%2B%20time[1]%20%2B%20%27?_embed%27;var%20fortune%20=%20(/fortune%5C.com%5C/%5Cd%2B%5C/%5Cd%2B%5C/%5Cd%2B%5C/([a-zA-Z0-9]%2B[-a-zA-Z0-9]%2A)/).exec(location.href);if(fortune)%20location.href%20=%20%27http%3A//fortune.com/wp-json/ti-api/v1/posts/%27%20%2B%20fortune[1]%20%2B%20%27?_embed%27;if((/(realsimple.com%7Ctravelandleisure.com%7Ccoastalliving.com%7Chealth.com%7Cfoodandwine.com%7Csouthernliving.com)/).test(location.hostname)){location.href%20%2B=%20%27/pronto-json%27;}if((/(si.com)/).test(location.hostname)){location.href%20=%20%27https%3A//time%3Azdne37cdmf4j%40content.api.si.com/v2/documents?format=pronto%26path=%27%20%2B%20location.pathname;}if((/(ew.com%7Cpeople.com)/).test(location.hostname)){location.href%20=%20%27http%3A//%27%20%2B%20location.hostname%20%2B%20%27/wp-json/pronto/v1/posts/%27%20%2B%20utag_data.content_id;}if((/(instyle.com)/).test(location.hostname)){location.href%20=%20%27http%3A//www.instyle.com/node/%27%20%2B%20utag_data.content_id%20%2B%20%27/pronto-json%27;}if((/(extracrispy.com)/).test(location.hostname)){location.href%20=%20%27http%3A//extra-crispy-cms-prod.us-west-2.elasticbeanstalk.com/v2/article/%27%20%2B%20utag_data.content_id%20%2B%20%27/json%27;}if((/(motto.time.com)/).test(location.hostname)){location.href%20=%20%27http%3A//time.com/api/v2/post/%27%20%2B%20utag_data.content_id;}if(location.hostname%20===%20%27localhost%27)%20location.href%20=%20(%27http%3A//localhost%3A3000/api/posts%27%20%2B%20location.pathname).replace(/%5C/%24/%2C%20%27%27);if(location.hostname%20===%20%27tfk-qa.time.com%27)%20location.href%20=%20(%27http%3A//tfk-qa.time.com/api/posts%27%20%2B%20location.pathname).replace(/%5C/%24/%2C%20%27%27);})();
(function(){

	var time = (/time\.com\/(\d+)\/[a-zA-Z0-9]+[-a-zA-Z0-9]*/).exec(location.href);
	if(time) location.href = 'http://time.com/wp-json/ti-api/v1/posts/' + time[1] + '?_embed';

	var fortune = (/fortune\.com\/\d+\/\d+\/\d+\/([a-zA-Z0-9]+[-a-zA-Z0-9]*)/).exec(location.href);
	if(fortune) location.href = 'http://fortune.com/wp-json/ti-api/v1/posts/' + fortune[1] + '?_embed';

	if(
		(/(realsimple.com|travelandleisure.com|coastalliving.com|health.com|foodandwine.com|southernliving.com)/)
		.test(location.hostname) 
	){
		location.href += '/pronto-json';
	}


	if(
		(/(si.com)/)
		.test(location.hostname)
	){
		location.href = 'https://time:zdne37cdmf4j@content.api.si.com/v2/documents?format=pronto&path=' + location.pathname;
	}


	if(
		(/(ew.com|people.com)/)
		.test(location.hostname)
	){
		location.href = 'http://' + location.hostname + '/wp-json/pronto/v1/posts/' + utag_data.content_id;
	}


	if(
		(/(instyle.com)/)
		.test(location.hostname)
	){
		location.href = 'http://www.instyle.com/node/' + utag_data.content_id + '/pronto-json';
	}


	if(
		(/(extracrispy.com)/)
		.test(location.hostname)
	){
		location.href = 'http://extra-crispy-cms-prod.us-west-2.elasticbeanstalk.com/v2/article/' + utag_data.content_id + '/json';
	}


	if(
		(/(motto.time.com)/)
		.test(location.hostname) 
	){
		location.href = 'http://time.com/api/v2/post/' + utag_data.content_id;
	}


	if(location.hostname === 'localhost') location.href = ('http://localhost:3000/api/posts' + location.pathname).replace(/\/$/, '');
	if(location.hostname === 'tfk-qa.time.com') location.href = ('http://tfk-qa.time.com/api/posts' + location.pathname).replace(/\/$/, '');

})();