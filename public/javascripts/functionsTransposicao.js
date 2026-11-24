
/**
 * Criptografias V2.0
 * Autor: Jhonatan Nobre
 * Algoritmo: Transposição Colunar
 */

function validarChaveTransposicao(chave) {
    if (
        typeof chave !== 'string' ||
        !/^[A-Za-z]{2,}$/.test(chave.trim())
    ) {
        throw new Error(
            'A chave deve conter pelo menos duas letras de A a Z.'
        );
    }

    return chave.trim().toUpperCase();
}

function ordenarColunas(chave) {
    return Array.from(chave, (letra, indice) => ({
        letra,
        indice
    }))
    .sort((a, b) =>
        a.letra.charCodeAt(0) - b.letra.charCodeAt(0) ||
        a.indice - b.indice
    )
    .map(item => item.indice);
}

function transposicaoEncrypt(mensagem, chave) {
    chave = validarChaveTransposicao(chave);

    const caracteres = Array.from(mensagem);
    const totalColunas = chave.length;
    const ordem = ordenarColunas(chave);

    const resultado = [];

    for (const coluna of ordem) {
        for (
            let i = coluna;
            i < caracteres.length;
            i += totalColunas
        ) {
            resultado.push(caracteres[i]);
        }
    }

    return resultado.join('');
}

function transposicaoDecrypt(mensagem, chave) {
    chave = validarChaveTransposicao(chave);

    const caracteres = Array.from(mensagem);
    const totalColunas = chave.length;
    const ordem = ordenarColunas(chave);

    const linhas = Math.floor(
        caracteres.length / totalColunas
    );

    const resto = caracteres.length % totalColunas;

    const colunas = Array.from(
        { length: totalColunas },
        () => []
    );

    let posicao = 0;

    for (const coluna of ordem) {
        const tamanho = linhas + (coluna < resto ? 1 : 0);

        colunas[coluna] = caracteres.slice(
            posicao,
            posicao + tamanho
        );

        posicao += tamanho;
    }

    const resultado = [];

    for (let linha = 0; linha < Math.ceil(
        caracteres.length / totalColunas
    ); linha++) {
        for (let coluna = 0; coluna < totalColunas; coluna++) {
            if (linha < colunas[coluna].length) {
                resultado.push(colunas[coluna][linha]);
            }
        }
    }

    return resultado.join('');
}

// Compatibilidade com a interface original.

function cifraSubstituicao(mensagem, chave) {
    $('#result').val(cifraCesar(mensagem, chave));
}

function cifraTransposicao(mensagem, chave, tipo) {
    const resultado = Number(tipo) === 0
        ? transposicaoEncrypt(mensagem, chave)
        : transposicaoDecrypt(mensagem, chave);

    $('#result').val(resultado);
}

function executarCifraTransposicao(descriptografar) {
    try {
        const mensagem = descriptografar
            ? $('#txt_decript').val()
            : $('#txt_encript').val();

        const chave = descriptografar
            ? $('#txt_key_decript').val()
            : $('#txt_key_encript').val();

        const algoritmo = $(
            "input[name='algoritmo']:checked"
        ).val();

        if (!mensagem || !mensagem.trim()) {
            throw new Error('Digite uma mensagem.');
        }

        if (algoritmo === '0') {
            const chaveTexto = String(chave).trim();

            if (!/^[+-]?\d+$/.test(chaveTexto)) {
                throw new Error('Informe uma chave inteira.');
            }

            cifraSubstituicao(
                mensagem,
                descriptografar ? -Number(chave) : Number(chave)
            );

        } else {
            cifraTransposicao(
                mensagem,
                chave,
                descriptografar ? 1 : 0
            );
        }

    } catch (erro) {
        alert(erro.message);
    }
}

if (typeof window !== 'undefined' &&
    typeof $ === 'function') {

    $(document).ready(function () {
        $('#btn_encript').click(function () {
            executarCifraTransposicao(false);
        });

        $('#btn_decript').click(function () {
            executarCifraTransposicao(true);
        });
    });
}

// Exportação para testes automatizados.

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validarChaveTransposicao,
        ordenarColunas,
        transposicaoEncrypt,
        transposicaoDecrypt
    };
}

// Integração da cifra de transposição com a interface
function executarTransposicaoModal(decifrar = false) {
    try {
        const entrada = document.getElementById('trans-texto');
        const resultado = document.getElementById('trans-resultado');
        const chave = document.getElementById('trans-chave').value;

        const mensagem = decifrar
            ? resultado.value
            : entrada.value;

        if (!mensagem.trim()) {
            throw new Error('Digite uma mensagem.');
        }

        if (decifrar) {
            entrada.value = transposicaoDecrypt(mensagem, chave);
        } else {
            resultado.value = transposicaoEncrypt(mensagem, chave);
        }

    } catch (erro) {
        alert(erro.message);
    }
}
