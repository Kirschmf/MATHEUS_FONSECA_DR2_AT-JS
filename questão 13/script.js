function reaisParaCentavos(valor) {
    return Math.round(valor * 100);
  }
  
  const resA = reaisParaCentavos(2.5);
  console.log(resA);
  
  const resB = reaisParaCentavos(3);
  console.log(resB);
  