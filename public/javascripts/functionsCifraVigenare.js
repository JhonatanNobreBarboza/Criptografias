function vigenere_encrypt() {
    const mensagem = $('#texto').val().toUpperCase();
    const chave = $('#chave').val().toUpperCase();
    
    if (!mensagem) {
      alert("Por favor, digite uma mensagem.");
      return;
    }
    
    const mensagem_filtrada = alfabeto(mensagem);
    const chave_filtrada = alfabeto(chave);
    let mensagemCriptografada = "";
  
    let correctedKeyIndex = -1;
    for (let i = 0; i < mensagem_filtrada.length; i++) {
      correctedKeyIndex++;
  
      if (correctedKeyIndex > chave_filtrada.length - 1) {
        correctedKeyIndex = 0;
      }
  
      const code = chave_filtrada[correctedKeyIndex].charCodeAt();
      mensagemCriptografada += caesar_one_encrypt(mensagem_filtrada[i], (code - 65));
    }
  
    document.getElementById("resultado").textContent = mensagemCriptografada;
    $("#result").val(mensagemCriptografada);
  }
  
  function vigenere_decrypt() {
    const mensagemCriptografada = $("#result").val().toUpperCase();
    const chave = $("#chave").val().toUpperCase();
    
    if (!mensagemCriptografada) {
      alert("Por favor, digite uma mensagem criptografada.");
      return;
    }
  
    if (chave.length < 1) {
      $("#result").val("Chave Inválida");
      return;
    }
  
    const mensagem_filtrada = alfabeto(mensagemCriptografada);
    const chave_filtrada = alfabeto(chave);
    let mensagemDescriptografada = "";
  
    let correctedKeyIndex = -1;
    for (let i = 0; i < mensagem_filtrada.length; i++) {
      correctedKeyIndex++;
  
      if (correctedKeyIndex > chave_filtrada.length - 1) {
        correctedKeyIndex = 0;
      }
  
      const code = chave_filtrada[correctedKeyIndex].charCodeAt();
      mensagemDescriptografada += caesar_one_decrypt(mensagem_filtrada[i], (code - 65));
    }
  
    $("#texto").val(mensagemDescriptografada);
    $("#result").val(mensagemCriptografada);
  }
  
  function alfabeto(string) {
    const final = [];
    for (let i = 0; i < string.length; i++) {
      if (string[i].match(/[A-Z]/)) {
        final.push(string[i]);
      }
    }
    return final;
  }
  
  function caesar_one_decrypt(character, currentKey) {    
    const code = character.charCodeAt();
    let temp = code - 65  - currentKey
    if (temp < 0)
    {
        temp += 26;
    }
    
    const charNum = ((temp) % 26) + 65;
    const c = String.fromCharCode(charNum);
    return c;
}
