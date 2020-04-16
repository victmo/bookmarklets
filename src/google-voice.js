(() => {
  const handleCall = e => {
    e.preventDefault();
    const phone = e.currentTarget.href.replace(/[()\-\s]/g, '');
    const url = `https://voice.google.com/u/0/calls?a=nc,${encodeURIComponent(phone)}`;
    window.open(url, 'google-voice'); // Features no longer work, optimal window size: 360x576
  }
  [...document.querySelectorAll('a[href*="tel:"]')].forEach(a => a.addEventListener('click', handleCall));
})();
