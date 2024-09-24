function comparaStringCaseInsensitive(strA, strB) {
    return strA.toLowerCase() === strB.toLowerCase();
  }
  const teste1 = comparaStringCaseInsensitive("tEste", "Teste");
  console.log(teste1);
  const teste2 = comparaStringCaseInsensitive("JavaScript", "javascript");
  console.log(teste2);
  const teste3 = comparaStringCaseInsensitive("Hello", "world");
  console.log(teste3);
  