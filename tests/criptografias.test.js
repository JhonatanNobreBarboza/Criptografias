
const { test } = require('node:test');
const assert = require('node:assert/strict');

const { cifraCesar } = require(
    '../public/javascripts/functionsCifraCesar'
);

const { cifraVigenere } = require(
    '../public/javascripts/functionsCifraVigenare'
);

const {
    transposicaoEncrypt,
    transposicaoDecrypt
} = require(
    '../public/javascripts/functionsTransposicao'
);

// CIFRA DE CÉSAR

test('César: criptografia', () => {
    assert.equal(cifraCesar('ABC', 3), 'DEF');
});

test('César: descriptografia', () => {
    assert.equal(cifraCesar('DEF', -3), 'ABC');
});

test('César: rotação do alfabeto', () => {
    assert.equal(cifraCesar('XYZ', 3), 'ABC');
});

test('César: caracteres especiais', () => {
    assert.equal(cifraCesar('ABC 123!', 3), 'DEF 123!');
});

test('César: chave inválida', () => {
    assert.throws(() => cifraCesar('ABC', 'abc'));
});

test('César: reversibilidade', () => {
    const texto = 'Olá, mundo! 123';
    assert.equal(cifraCesar(cifraCesar(texto, 7), -7), texto);
});

// CIFRA DE VIGENÈRE

test('Vigenère: criptografia', () => {
    assert.equal(
        cifraVigenere('ATTACKATDAWN', 'LEMON'),
        'LXFOPVEFRNHR'
    );
});

test('Vigenère: descriptografia', () => {
    assert.equal(
        cifraVigenere('LXFOPVEFRNHR', 'LEMON', true),
        'ATTACKATDAWN'
    );
});

test('Vigenère: chave vazia', () => {
    assert.throws(() => cifraVigenere('ABC', ''));
});

test('Vigenère: chave inválida', () => {
    assert.throws(() => cifraVigenere('ABC', '123'));
});

test('Vigenère: reversibilidade', () => {
    const texto = 'Olá, mundo! 123';
    const cifrado = cifraVigenere(texto, 'SEGREDO');

    assert.equal(
        cifraVigenere(cifrado, 'SEGREDO', true),
        texto
    );
});

// CIFRA DE TRANSPOSIÇÃO

test('Transposição: criptografia', () => {
    assert.equal(
        transposicaoEncrypt('ABCDE', 'CAB'),
        'BECAD'
    );
});

test('Transposição: descriptografia', () => {
    assert.equal(
        transposicaoDecrypt('BECAD', 'CAB'),
        'ABCDE'
    );
});

test('Transposição: chave com letras repetidas', () => {
    const texto = 'CRIPTOGRAFIA';

    assert.equal(
        transposicaoDecrypt(
            transposicaoEncrypt(texto, 'ARARA'),
            'ARARA'
        ),
        texto
    );
});

test('Transposição: caracteres especiais', () => {
    const texto = 'Olá, mundo! 123 🤖';

    assert.equal(
        transposicaoDecrypt(
            transposicaoEncrypt(texto, 'CHAVE'),
            'CHAVE'
        ),
        texto
    );
});

test('Transposição: chave inválida', () => {
    assert.throws(() => transposicaoEncrypt('ABC', 'A'));
});

test('Transposição: mensagem vazia', () => {
    assert.equal(transposicaoEncrypt('', 'CHAVE'), '');
});

test('Transposição: mensagem menor que a chave', () => {
    assert.equal(
        transposicaoDecrypt(
            transposicaoEncrypt('ABC', 'SEGREDO'),
            'SEGREDO'
        ),
        'ABC'
    );
});
