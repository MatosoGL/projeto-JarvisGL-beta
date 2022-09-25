

const especificação = {
    afirmacoes: ['sim', 'não', 'nao', 'aham', 'talvez', 'claro'],
    mudarCor: ['mudar a cor', 'mude a cor', 'mude cor', 'mudar cor', 'w', 'cor',
        'eu quero mudar a cor', 'eu quero que mude a cor', 'quero mudar a cor'],
    artigo: ['pra', 'para', 'e', 'o', 'com', 'a'],
    cor: ['azul', 'verde', 'vermelho',
        'cinza', 'preto', 'laranja', 'rosa',
        'roxo', 'ciano', 'turquesa'],
    texto: ['texto'],
    corAdd: ['claro', 'escuro', 'marinho', 'shock'],
    imagem: ['imagem', 'quero uma imagem', 'quero imagem', 'faz imagem'],
    escolhaElement: [],
    fazCanvas: ['canvas', 'faz desenho', 'fazer desenho', 'desenho',
     'criar um desenho', 'criar canvas'],
    formatoDesenho: {
        circulo:['circulo', 'círculo', 'bola', 'redondo'],
        retangulo: ['retangulo', 'retângulo'],
        triangulo: ['triangulo', 'triângulo'], 
        quadrado: ['quadrado', 'hexagono']
    },
    criaBotao: ['fazer botão', 'fazer botao', 'criar botão',
     'criar botao', 'botao', 'botão', 'eu quero um botão', 'eu quero um botao']
}

especificação.cor.push('amarelo', 'violeta', 'vinho', 'marrom', 'salmão',
    'salmao', 'magenta', 'chocolate', 'lima', 'limão', 'limao', 'azul claro',
    'azul escuro', 'azul marinho', 'verde claro', 'verde escuro', 'verde forte',
    'rosa claro', 'rosa escuro', 'rosa shock', 'salmao claro', 'salmão claro',
    'vermelho claro', 'vermelho escuro', 'cinza claro', 'branco');

especificação.corAdd.push('forte');

especificação.texto.push('quero um texto', 'faça um texto', 'faz texto');

especificação.escolhaElement.push('fundo', 'cabecalho', 'cabeçalho', 'botão', 'botao');

var botaoMenu = document.getElementById('botao');
var fundoTela = document.getElementById('tela');
var corDoTexto = document.getElementById('texto');
var cabecalho = document.getElementById('cabecalho');
var itemUl = document.getElementById('item');
var divBefore = document.getElementById('divBefore');
var navMenu = document.getElementById('nav--Menu');
var aMenu = document.getElementById('txtMenu');
var menu = document.getElementById('menu');