
/**
 * Criptografias V2.0
 * Autor: Jhonatan Nobre
 * Algoritmo: Cifra de César
 */

function cifraCesar(mensagem, chave) {
    if (typeof mensagem !== 'string') {
        throw new TypeError('A mensagem deve ser um texto.');
    }

    if (
        !/^[+-]?\d+$/.test(String(chave).trim()) ||
        !Number.isSafeInteger(Number(chave))
    ) {
        throw new Error('Informe uma chave numérica inteira válida.');
    }

    const deslocamento = ((Number(chave) % 26) + 26) % 26;

    return mensagem.replace(/[A-Za-z]/g, letra => {
        const base = letra >= 'A' && letra <= 'Z' ? 65 : 97;

        const codigo = letra.charCodeAt(0) - base;

        return String.fromCharCode(
            base + ((codigo + deslocamento) % 26)
        );
    });
}

function criptografar() {
    try {
        const mensagem = $('#formulario .cripto').val();
        const chave = $('#formulario .chave1').val();

        if (!mensagem.trim()) {
            throw new Error('Digite uma mensagem.');
        }

        const resultado = cifraCesar(mensagem, chave);

        $('#formulario .result').val(resultado);

    } catch (erro) {
        alert(erro.message);
    }
}


function descriptografar() {
    try {
        const mensagem = $('#formulario .result').val();
        const chave = $('#formulario .chave1').val();

        if (!mensagem.trim()) {
            throw new Error('Digite uma mensagem criptografada.');
        }

        if (!/^[+-]?\d+$/.test(chave.trim())) {
            throw new Error('Informe uma chave inteira válida.');
        }

        $('#formulario .cripto').val(
            cifraCesar(mensagem, -Number(chave))
        );

    } catch (erro) {
        alert(erro.message);
    }
}

// Permite executar testes automatizados no Node.js.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cifraCesar };
}
