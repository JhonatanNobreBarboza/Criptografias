
/**
 * Criptografias V2.0
 * Autor: Jhonatan Nobre
 * Servidor da aplicação
 */

'use strict';

const express = require('express');
const path = require('node:path');

const app = express();
const PORT = process.env.PORT || 8080;

// Segurança básica
app.disable('x-powered-by');

app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'no-referrer');

    next();
});

// Diretórios públicos permitidos
const diretorios = [
    'javascripts',
    'stylesheets',
    'images',
    'vendor'
];

for (const diretorio of diretorios) {
    app.use(
        `/public/${diretorio}`,
        express.static(
            path.join(__dirname, 'public', diretorio)
        )
    );
}

// Página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Verificação de funcionamento
app.get('/api/health', (req, res) => {
    res.json({
        status: 'online',
        application: 'Criptografias',
        version: '2.0.0',
        uptime: process.uptime()
    });
});

// Tratamento de páginas inexistentes
app.use((req, res) => {
    res.status(404).json({
        error: 'Recurso não encontrado'
    });
});

// Tratamento de erros
app.use((err, req, res, next) => {
    console.error(err);

    if (res.headersSent) {
        return next(err);
    }

    res.status(500).json({
        error: 'Erro interno do servidor'
    });
});

// Inicialização
if (require.main === module) {
    app.listen(PORT, () => {
        console.log('=================================');
        console.log('     CRIPTOGRAFIAS V2.0');
        console.log('=================================');
        console.log('Servidor: ONLINE');
        console.log(`Porta: ${PORT}`);
        console.log(`Acesse: http://localhost:${PORT}`);
        console.log('=================================');
    });
}

module.exports = app;
