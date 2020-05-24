[...document.querySelectorAll('.g-product-list li figcaption')].forEach(item => {
  const t = item.innerText;
  const [, qty, weight, unit] = /(\d+)\s+x\s+(\d+\.*\d*)\s+(\w+)/.exec(t) || [null,1,1,'unit'];
  const [, price] = /\$(\d+\.?\d*)/.exec(t);
  const ppu = `$${(price / (qty * weight)).toFixed(2)}<span style="font-size:0.7em">/${unit}</span>`;
  item.querySelector(':scope > div:last-child > span').innerHTML = `$${price} | <span style="opacity: 0.5">${ppu}</span>`;
});
