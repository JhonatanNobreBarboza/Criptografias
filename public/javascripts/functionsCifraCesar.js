function letraAnterior(s){
    let c = s.charCodeAt(0);
    if (c === 97) {
        return 'z';
    } else if (c >= 98 && c <= 122) {
        return String.fromCharCode(c - 1);
    } else {
        return s;
    }
}

function letraPosterior(s){
    let c = s.charCodeAt(0);
    if (c === 122) {
        return 'a';
    } else if (c >= 97 && c <= 121) {
        return String.fromCharCode(c + 1);
    } else {
        return s;
    }
}

function criptografar(){
    let mensagem = $('.cripto').val().toLowerCase();
    mensagem = mensagem.replace(/[^a-zA-Z]/g, '');
    let key = $('.chave1').val();
    let mensagemCriptografada = "";
    for(let i = 0; i < mensagem.length; i++){
        let novoCaracter = mensagem.charAt(i);
        for(let j = 0; j < key; j++){
            novoCaracter = letraPosterior(novoCaracter);
        }
        mensagemCriptografada += novoCaracter;
    }
    $(".result").val(mensagemCriptografada);
}

function descriptografar(){
    let mensagem = $(".result").val();
    let key = $('.chave2').val();
    let mensagemDescriptografada = "";
    for(let i = 0; i < mensagem.length; i++){
        let novoCaracter = mensagem.charAt(i);
        for(let j = 0; j < key; j++){
            novoCaracter = letraAnterior(novoCaracter);
        }
        mensagemDescriptografada += novoCaracter;
    }
    $(".result").val(mensagemDescriptografada);
}
