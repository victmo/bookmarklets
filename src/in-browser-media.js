// javascript:(()%20=%3E%20{const%20mediaurl%20=%20prompt(%27Enter%20your%20PDF%20url%27);if(mediaUrl){const%20nw%20=%20window.open();if(nw){let%20embed%20=%20%60%3Cembed%20src=%22%24{%20mediaurl%20}%22%20width=%22100%25%22%20height=%22100%25%22%20/%3E%60;const%20ext%20=%20mediaUrl.split(/%5C%23%7C%5C?/)[0].split(%27.%27).pop().trim();if((/%5E(jpe?g%7Cgif%7Cpng%7Csvg)%24/).test(ext))%20embed%20=%20%60%3Cimg%20src=%22%24{%20mediaurl%20}%22%20/%3E%60;if((/%5E(mp4%7Cmov%7Cwebm%7Cavi)%24/).test(ext))%20embed%20=%20%60%3Cvideo%20src=%22%24{%20mediaurl%20}%22%20controls%20/%3E%60;if((/%5E(mp3%7Cwav%7Cogg%7Cflac)%24/).test(ext))%20embed%20=%20%60%3Caudio%20src=%22%24{%20mediaurl%20}%22%20controls%20/%3E%60;nw.document.body.innerHTML%20=%20%60%3Cstyle%3Ebody{background%3A%23000;margin%3A0;padding%3A0;}%3C/style%3E%24{%20embed%20}%60;nw.focus();}}})();
(() => {
  const mediaurl = prompt('Enter your PDF url');
  if(mediaUrl){
    const nw = window.open();
  if(nw){
      let embed = `<embed src="${ mediaurl }" width="100%" height="100%" />`;
      const ext = mediaUrl.split(/\#|\?/)[0].split('.').pop().trim();
      if((/^(jpe?g|gif|png|svg)$/).test(ext)) embed = `<img src="${ mediaurl }" />`;
      if((/^(mp4|mov|webm|avi)$/).test(ext)) embed = `<video src="${ mediaurl }" controls />`;
      if((/^(mp3|wav|ogg|flac)$/).test(ext)) embed = `<audio src="${ mediaurl }" controls />`;
      nw.document.body.innerHTML = `
        <style>body{background:#000;margin:0;padding:0;}</style>
        ${ embed }
      `;
      nw.focus();
    }
  }
})();