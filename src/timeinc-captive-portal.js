// javascript:(()=%3E{const%20pd%20=%20(n)%20=%3E%20%6000%24{n}%60.substr(-2%2C2);const%20d%20=%20new%20Date();document.forms[0].user.value=%60tig%24{pd(d.getMonth()%2B1)}%24{pd(d.getDate())}%24{pd(d.getFullYear())}%60;document.forms[0].password.focus();})();
(()=>{
	const pd = (n) => `00${n}`.substr(-2,2);
	const d = new Date();
	document.forms[0].user.value=`tig${pd(d.getMonth()+1)}${pd(d.getDate())}${pd(d.getFullYear())}`;
	document.forms[0].password.focus();
})();