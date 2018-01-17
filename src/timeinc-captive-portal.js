// javascript:(()=%3E{%24%20=%20(s%2C%20c)%20=%3E%20{%20return%20(c%20%7C%7C%20document).querySelector(s);%20};%24(%27head%27).innerHTML%20%2B=%20%27%3Cmeta%20name=%22viewport%22%20content=%22width=device-width%2C%20initial-scale=1.0%2C%20maximum-scale=1.0%2C%20user-scalable=no%22%20/%3E%27;%24(%27link%27).remove();const%20s%20=%20%60body{%20margin%3A0;%20padding%3A40px%2020px;%20font-family%3Asans-serif;%20}input{%20font-size%3A%2030px;%20font-weight%3A%20bold;%20border%3A%201px%20solid%20%23ccc;%20width%3A%20100%25;%20padding%3A%2016px;%20border-radius%3A%204px;%20box-sizing%3A%20border-box;%20}input[type=text]{%20letter-spacing%3A%200.35em;%20margin-bottom%3A%2020px;%20box-shadow%3A%20inset%200%202px%204px%200%20%23eee;%20}input[type=submit]{%20background%3A%20%230275d8;%20color%3A%20%23fff;%20-webkit-appearance%3A%20none;%20}label{color%3A%20%23888;}%23registeredhdr%2C%20%23logo{%20display%3A%20none;%20}%60;%24(%27style%27).innerHTML%20=%20s;const%20pd%20=%20(n)%20=%3E%20%6000%24{n}%60.substr(-2%2C2);const%20d%20=%20new%20Date();const%20u%20=%20%24(%27input[name=user]%27);const%20p%20=%20%24(%27input[name=password]%27);const%20parsePwd%20=%20()%20=%3E%20{const%20v%20=%20p.value;const%20m%20=%20v.match(/%5C%7C%5Cs%60([a-z0-9]{6})/);const%20r%20=%20m%20?%20m[1]%20%3A%20v;p.value%20=%20r.toLowerCase().trim();};u.value=%60tig%24{pd(d.getMonth()%2B1)}%24{pd(d.getDate())}%24{pd(d.getFullYear())}%60;p.type=%27text%27;%20p.value=%27%27;%20p.focus();p.addEventListener(%27change%27%2C%20parsePwd%2C%20false);p.addEventListener(%27keyup%27%2C%20parsePwd%2C%20false);setInterval(parsePwd%2C%201000);})();
(()=>{
  $ = (s, c) => { return (c || document).querySelector(s); };
  $('head').innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />';
  $('link').remove();
  const s = `
    body{ margin:0; padding:40px 20px; font-family:sans-serif; }
    input{ font-size: 30px; font-weight: bold; border: 1px solid #ccc; width: 100%; padding: 16px; border-radius: 4px; box-sizing: border-box; }
    input[type=text]{ letter-spacing: 0.35em; margin-bottom: 20px; box-shadow: inset 0 2px 4px 0 #eee; }
    input[type=submit]{ background: #0275d8; color: #fff; -webkit-appearance: none; }
    label{color: #888;}
    #registeredhdr, #logo{ display: none; }
  `;
  $('style').innerHTML = s;
  const pd = (n) => `00${n}`.substr(-2,2);
  const d = new Date();
  const u = $('input[name=user]');
  const p = $('input[name=password]');
  const parsePwd = () => {
    const v = p.value;
    const m = v.match(/\|\s`([a-z0-9]{6})/);
    const r = m ? m[1] : v;
    p.value = r.toLowerCase().trim();
  };
  u.value=`tig${pd(d.getMonth()+1)}${pd(d.getDate())}${pd(d.getFullYear())}`;
  p.type='text'; p.value=''; p.focus();
  p.addEventListener('change', parsePwd, false);
  p.addEventListener('keyup', parsePwd, false);
  setInterval(parsePwd, 1000);
})();