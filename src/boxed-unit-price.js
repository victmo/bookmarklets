[...document.querySelectorAll('.g-product-list li figcaption')].forEach(item => {
  const t = item.innerText;
  /*
    0: "3 x 10.5 oz"
    1: "3 x "
    2: "3"
    3: " x "
    4: "10.5"
    5: "oz"
  */
  const [,,qty = 1,,weight,unit] = /((\d+)(\s+x\s+))?(\d+\.*\d*)\s+(\w+)\n/.exec(t) || [,,1,,1,'unit'];
  const [, price] = /\$(\d+\.?\d*)/.exec(t);
  const ppu = `$${(price / (qty * weight)).toFixed(2)}<span style="font-size:0.7em">/${unit === 'Ct' ? 'unit' : unit}</span>`;
  item.querySelector(':scope > div:last-child > span').innerHTML = `$${price} | <span style="opacity: 0.5">${ppu}</span>`;
});

// https://jscompress.com/
