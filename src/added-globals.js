// javascript:((w,d)=>{const e=d.createElement('iframe');e.onload=(()=>{const o=Object.keys(e.contentWindow),n=Object.keys(w).filter(e=>-1===o.indexOf(e));e.remove(),console.log(n.reduce((e,o)=>({...e,[o]:w[o]}),{}))}),e.src='about:blank',d.body.appendChild(e)})(window,document)

((w,d) => {
  const f = d.createElement('iframe');
  f.onload = () => {
    const iks = Object.keys(f.contentWindow);
    const uks = Object.keys(w).filter(k => !iks.includes(k));
    f.remove();
    console.log(uks.reduce((o, k) => ({...o, [k]: w[k]}), {}))
  };
  f.src = 'about:blank';
  d.body.appendChild(f);
})(window, document);
