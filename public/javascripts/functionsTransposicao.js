let mensagem = $('#texto').val();
let mensagemUpper = mensagem.toUpperCase();

let chave = $('#chave').val();
let chaveUpper = chave.toUpperCase();

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let fullalphabet = alphabet + alphabet + alphabet;


function cifraSubstituicao(msg, key){
    key = (key % alphabet.length);
    let result = '';

    for(i=0; i<msg.length; i++){
        let letter = msg[i];
        let upper = (letter == letter.toUpperCase());
        letter = letter.toLowerCase();

        let index = alphabet.indexOf(letter);
        if(index == -1){
            result += letter;
        } else {
            index = ((index + key) + alphabet.length);
            let nextLetter = fullalphabet[index];
            if(upper) nextLetter = nextLetter.toUpperCase();
            result += nextLetter;
        }
    }

    $('#result').val(result);
}


function cifraTransposicao(msg, key, tipo) {
    let result = '';

    if(tipo == 0)
        result = transposicaoEncrypt(msg, key);
    else
        result = transposicaoDecrypt(msg, key);

    $('#result').val(result);
}

function transposicaoEncrypt(msg, key) {
    let klen = key.length;

    let colLength = msg.length / klen;

    let result = "";
    k = 0;
    for (i = 0; i < klen; i++) {
        while (k < 26) {
            t = key.indexOf(alphabet.charAt(k));
            arrkw = key.split("");
            arrkw[t] = "_";
            key = arrkw.join("");
            if (t >= 0) break;
            else k++;
        }
        for (j = 0; j < colLength; j++) {
            result += msg.charAt(j * klen + t);
        }
    }
    return result;
}

function transposicaoDecrypt(msg, key) {
    let klen = key.length;
    if (klen <= 1) {
        alert("A key deve ter pelo menos dois caracteres");
        return;
    }
    if (msg.length % klen != 0) {
        alert("O msg cifrado não foi preenchido, o result pode estar incorreto (key incorreta?).");
    }

    // Primeiro colocamos o msg em colunas com base no tamanho da key
    let cols = new Array(klen);
    let colLength = msg.length / klen;
    for (i = 0; i < klen; i++) cols[i] = msg.substr(i * colLength, colLength);

    // Agora, reorganizamos as colunas para que elas fiquem no estado de desembaralhamento
    let newcols = new Array(klen);
    j = 0;
    i = 0;
    while (j < klen) {
        t = key.indexOf(alphabet.charAt(i));
        if (t >= 0) {
            newcols[t] = cols[j++];
            arrkw = key.split("");
            arrkw[t] = "_";
            key = arrkw.join("");
        } else i++;
    }

    // Agora leia as colunas em linha
    let result = "";
    for (i = 0; i < colLength; i++) {
        for (j = 0; j < klen; j++) {
            result += newcols[j].charAt(i);
        }
    }
    return result;
}

function minusculo(value) {
    return value.toLowerCase().replace(/[^a-z]/g, "");
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

$(document).ready(function() {
    $('#btn_encript').click(function(){
        let msg = minusculo($("#txt_encript").val());
        let key = $("#txt_key_encript").val();

        if($("input[name='algoritmo']:checked").val() == 0) {
            if(isNumber(key))
                cifraSubstituicao(msg, key);
            else
                alert("A key precisa ser um número para o algoritmo de substituição!");
        }
        else {
            cifraTransposicao(msg, minusculo(key), 0);
        }
    });

    $('#btn_decript').click(function(){
        let msg = minusculo($("#txt_decript").val());
        let key = $("#txt_key_decript").val();

        if($("input[name='algoritmo']:checked").val() == 0) {
            if(isNumber(key))
                cifraSubstituicao(msg, (key * -1));
            else
                alert("A key precisa ser um número para o algoritmo de substituição!");
        }
        else {
            cifraTransposicao(msg, minusculo(key), 1);
        }
    });
});