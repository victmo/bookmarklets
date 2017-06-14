// javascript:(()=%3E{%24%20=%20(s)%20=%3E%20{%20return%20(c%20%7C%7C%20document).querySelector(s);%20};%24(%27head%27).innerHTML%20%2B=%20%27%3Cmeta%20name=%22viewport%22%20content=%22width=device-width%2C%20initial-scale=1.0%2C%20maximum-scale=1.0%2C%20user-scalable=no%22%20/%3E%27;%24(%27link%27).remove();let%20s%20=%20%27%27;s%20%2B=%20%27body{%20margin%3A0;%20padding%3A40px%2020px;%20font-family%3Asans-serif;%20}%27;s%20%2B=%20%27input{%20font-size%3A%2026px;%20font-weight%3A%20bold;%20border%3A%201px%20solid%20%23ccc;%20width%3A%20100%25;%20padding%3A%2016px;%20border-radius%3A%204px;%20}%27;s%20%2B=%20%27input[type=text]{%20letter-spacing%3A%200.25em;%20margin-bottom%3A%2020px;%20box-shadow%3A%20inset%200%202px%204px%200%20%23eee;%20}%27;s%20%2B=%20%27input[type=submit]{%20background%3A%20%230275d8;%20color%3A%20%23fff;%20}%27;s%20%2B=%20%27label{color%3A%20%23888;}%27;%24(%27style%27).innerHTML%20=%20s;const%20pd%20=%20(n)%20=%3E%20%6000%24{n}%60.substr(-2%2C2);const%20d%20=%20new%20Date();const%20u%20=%20%24(%27input[name=user]%27);const%20p%20=%20%24(%27input[name=password]%27);u.value=%60tig%24{pd(d.getMonth()%2B1)}%24{pd(d.getDate())}%24{pd(d.getFullYear())}%60;p.type=%27text%27;%20p.value=%27%27;%20p.focus();})();
(()=>{
    $ = (s) => { return (c || document).querySelector(s); };
    $('head').innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />';
    $('link').remove();
    let s = '';
    s += 'body{ margin:0; padding:40px 20px; font-family:sans-serif; }';
    s += 'input{ font-size: 26px; font-weight: bold; border: 1px solid #ccc; width: 100%; padding: 16px; border-radius: 4px; }';
    s += 'input[type=text]{ letter-spacing: 0.25em; margin-bottom: 20px; box-shadow: inset 0 2px 4px 0 #eee; }';
    s += 'input[type=submit]{ background: #0275d8; color: #fff; }';
    s += 'label{color: #888;}';
    $('style').innerHTML = s;
    const pd = (n) => `00${n}`.substr(-2,2);
    const d = new Date();
    const u = $('input[name=user]');
    const p = $('input[name=password]');
    u.value=`tig${pd(d.getMonth()+1)}${pd(d.getDate())}${pd(d.getFullYear())}`;
    p.type='text'; p.value=''; p.focus();
})();