// javascript:function%20getFaIcon(node%20=%20%240%20%7C%7C%20document.body){const%20svg%20=%20((node%20%26%26%20node.tagName%20===%20%27svg%27)%20?%20node%20%3A%20document.querySelector(%27svg%27%2C%20node));const%20icon%20=%20svg.cloneNode(true);const%20name%20=%20icon.dataset.icon.split(%27-%27).map(w%20=%3E%20w[0].toUpperCase()%20%2B%20w.substring(1)).join(%27%27)%20%2B%20%27Icon%27;const%20className%20=%20%27icon-%27%20%2B%20icon.dataset.icon;const%20h%20=%2016;const%20w%20=%20Math.round(icon.viewBox.baseVal.width%20/%20icon.viewBox.baseVal.height%20%2A%20h);const%20attrBucket%20=%20{}%2C%20validAttrs%20=%20[%27viewBox%27%2C%20%27xmlns%27%2C%20%27aria-hidden%27];icon.getAttributeNames().forEach(attr%20=%3E%20{if%20(validAttrs.includes(attr))%20attrBucket[attr]%20=%20icon.getAttribute(attr);icon.removeAttribute(attr);});[...icon.querySelectorAll(%27path%27)].forEach(p%20=%3E%20p.removeAttribute(%27class%27));icon.setAttribute(%27height%27%2C%20h);icon.setAttribute(%27width%27%2C%20w);console.log(attrBucket);validAttrs.forEach(attr%20=%3E%20icon.setAttribute(attr%2C%20attrBucket[attr]));const%20component%20=%20%60export%20const%20%24{name}%20=%20({height%20=%20%24{h}%2C%20width%20=%20%24{w}})%20=%3E%20(%5Cn%20%3Csvg%20height={height}%20width={width}%20className=%22%24{className}%22%20viewBox=%22%24{icon.getAttribute(%27viewBox%27)}%22%20aria-hidden=%22true%22%20xmlns=%22http%3A//www.w3.org/2000/svg%22%3E%24{icon.innerHTML}%3C/svg%3E%5Cn);%60;return%20{node%3A%20icon%2C%20component%2C%20xml%3A%20%27%3C?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%27};}(()%20=%3E%20{const%20icon%20=%20getFaIcon(document.querySelector(%27.fa-9x%27));console.log(icon.xml);console.log(icon.node);console.log(icon.component);})();

function getFaIcon(node = $0 || document.body){
  const svg = ((node && node.tagName === 'svg') ? node : document.querySelector('svg', node));
  const icon = svg.cloneNode(true);
  const name = icon.dataset.icon.split('-').map(w => w[0].toUpperCase() + w.substring(1)).join('') + 'Icon';
  const className = 'icon-' + icon.dataset.icon;
  const h = 16;
  const w = Math.round(icon.viewBox.baseVal.width / icon.viewBox.baseVal.height * h);
  const  attrBucket = {}, validAttrs = ['viewBox', 'xmlns', 'aria-hidden'];
  icon.getAttributeNames().forEach(attr => {
    if (validAttrs.includes(attr)) attrBucket[attr] = icon.getAttribute(attr);
    icon.removeAttribute(attr);
  });
  [...icon.querySelectorAll('path')].forEach(p => p.removeAttribute('class'));
  icon.setAttribute('height', h);
  icon.setAttribute('width', w);
  console.log(attrBucket);
  validAttrs.forEach(attr => icon.setAttribute(attr, attrBucket[attr]));
  const component = `export const ${name} = ({height = ${h}, width = ${w}}) => (\n    <svg height={height} width={width} className="${className}" viewBox="${icon.getAttribute('viewBox')}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${icon.innerHTML}</svg>\n);`;
  return {node: icon, component, xml: '<?xml version="1.0" encoding="UTF-8"?>'};
}


(() => {
  const icon = getFaIcon(document.querySelector('.fa-9x'));
  console.log(icon.xml);
  console.log(icon.node);
  console.log(icon.component);
})();
