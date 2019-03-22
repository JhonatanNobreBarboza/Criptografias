function vigenere_encrypt() {

    let mensagem = $('#texto').val();
    let mensagemUpper = mensagem.toUpperCase();

    let chave = $('#chave').val();
    let chaveUpper = chave.toUpperCase();
       
        let mensagem_filtrada = alfabeto(mensagemUpper);
        let chave_filtrada = alfabeto(chaveUpper);
    
        let mensagemCriptografada = "";

        let correctedKeyIndex = -1;
        for(let i = 0; i < mensagem_filtrada.length; i++)
        {
            correctedKeyIndex++;

            if(correctedKeyIndex > chave_filtrada.length -1)
            {
                correctedKeyIndex = 0;
            }

            let code = chave_filtrada[correctedKeyIndex].charCodeAt();
            
            mensagemCriptografada += (caesar_one_encrypt(mensagem_filtrada[i], (code - 65)));
        }
        document.getElementById("resultado").value = mensagemCriptografada;
        $("#result").val(mensagemCriptografada)
    
}

function vigenere_decrypt() {

    let mensagem = $("#result").val();
    let chave = $("#chave").val();

    if(chave.length < 1)
    {
        $("#result").val("Chave Inválida")
    }
    else
    {
        
        let mensagemUpper = mensagem.toUpperCase();
        let chaveUpper = chave.toUpperCase();

        let mensagem_filtrada = alfabeto(mensagemUpper);
        let chave_filtrada = alfabeto(chaveUpper);
        
        let mensagemCriptografada = "";
        let correctedKeyIndex = -1;
        for(let i = 0; i < mensagem_filtrada.length; i++)
        {
            correctedKeyIndex++;
            if(correctedKeyIndex > chave_filtrada.length -1)
            {
                correctedKeyIndex = 0;
            }
            let code = chave_filtrada[correctedKeyIndex].charCodeAt();
            mensagemCriptografada += (caesar_one_decrypt(mensagem_filtrada[i], (code - 65)));
        }
        $("#texto").value = mensagemCriptografada;
        $("#result").val(mensagemCriptografada)
    }    
}

function alfabeto(string) {
    
    let final = [];
    for (let i = 0; i < string.length; i++)
    {
        if((string[i]).match(/[A-Z]/))
        {
            final.push(string[i])
        }
    }
    return final;
}

function caesar_one_encrypt(character, currentKey) {
    let code = character.charCodeAt();
    let charNum = ((code - 65  + currentKey) % 26) + 65;
    let c = String.fromCharCode(charNum);
    return c;
}

function caesar_one_decrypt(character, currentKey) {    
    let code = character.charCodeAt();
    let temp = code - 65  - currentKey
     if (temp < 0)
    {
        temp += 26;
    }
    
    let charNum = ((temp) % 26) + 65;
    let c = String.fromCharCode(charNum);
    return c;
}
