
/**
 * Criptografias V2.0
 * Autor: Jhonatan Nobre
 * Algoritmo: Cifra de Vigenère
 */

function cifraVigenere(mensagem, chave, descriptografar = false) {
    if (typeof mensagem !== 'string') {
        throw new TypeError('A mensagem deve ser um texto.');
    }

    if (typeof chave !== 'string' || !/^[A-Za-z]+$/.test(chave.trim())) {
        throw new Error('A chave deve conter apenas letras de A a Z.');
    }

    const chaveNormalizada = chave.trim().toUpperCase();

    let indiceChave = 0;

    return mensagem.replace(/[A-Za-z]/g, letra => {
        const base = letra >= 'A' && letra <= 'Z' ? 65 : 97;

        const codigo = letra.charCodeAt(0) - base;

        const deslocamento =
            chaveNormalizada.charCodeAt(
                indiceChave % chaveNormalizada.length
            ) - 65;

        indiceChave++;

        const direcao = descriptografar ? -1 : 1;

        return String.fromCharCode(
            base + ((codigo + direcao * deslocamento + 26) % 26)
        );
    });
}

function vigenere_encrypt() {
    try {
        const mensagem = $('#texto').val();
        const chave = $('#chave').val();

        if (!mensagem.trim()) {
            throw new Error('Digite uma mensagem.');
        }

        const resultado = cifraVigenere(mensagem, chave);

        $('#resultado').text(resultado);
        $('#result').val(resultado);

    } catch (erro) {
        alert(erro.message);
    }
}

function vigenere_decrypt() {
    try {
        const mensagem = $('#result').val();
        const chave = $('#chave').val();

        if (!mensagem.trim()) {
            throw new Error('Digite uma mensagem criptografada.');
        }

        const resultado = cifraVigenere(mensagem, chave, true);

        $('#texto').val(resultado);
        $('#resultado').text(resultado);

    } catch (erro) {
        alert(erro.message);
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cifraVigenere };
}
