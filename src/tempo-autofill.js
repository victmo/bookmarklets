// javascript:(()=%3E{window.victmo%20=%20window.victmo%20%7C%7C%20{};const%20setValue%20=%20(s%2Cv)%20=%3E%20{const%20els%20=%20[...document.querySelectorAll(s)];els.filter(el%20=%3E%20typeof%20el.value%20===%20%27string%27).forEach(el%20=%3E%20el.value%20=%20v);};const%20autofill%20=%20()%20=%3E%20{setValue(%27select[id%24=_CapitalProjectName_]%27%2C%20%27APE-BI-Unified%20Template%27);setValue(%27select[id%24=_KTLOAdmin%5C%5C(ifapplicable%5C%5C)_]%27%2C%20%27Project%27);setValue(%27select[id%24=_CapitalActivity_]%27%2C%20%27Design%20and%20Development%20-%20CAPITAL%20%27);};if(window.victmo.tempoIntervalId)%20clearInterval(window.victmo.tempoIntervalId);window.victmo.tempoIntervalId%20=%20setInterval(autofill%2C%203000);})();
(()=>{
	window.victmo = window.victmo || {};
	const setValue = (s,v) => {
		const els = [...document.querySelectorAll(s)];
		els.filter(el => typeof el.value === 'string').forEach(el => el.value = v);
	};
	const autofill = () => {
		setValue('select[id$=_CapitalProjectName_]', 'APE-BI-Unified Template');
		setValue('select[id$=_KTLOAdmin\\(ifapplicable\\)_]', 'Project');
		setValue('select[id$=_CapitalActivity_]', 'Design and Development - CAPITAL ');
	};
	if(window.victmo.tempoIntervalId) clearInterval(window.victmo.tempoIntervalId);
	window.victmo.tempoIntervalId = setInterval(autofill, 3000);
})();