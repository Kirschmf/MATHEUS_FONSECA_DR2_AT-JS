function imprimeRetangulo(largura, altura) {
    let linha = 0; 
    while (linha < altura) {
      const retanguloLinha = '*'.repeat(largura);
      console.log(retanguloLinha);
      linha += 1; 
    }
  }
    imprimeRetangulo(5, 3);
  imprimeRetangulo(10, 2);
  imprimeRetangulo(4, 4);
  