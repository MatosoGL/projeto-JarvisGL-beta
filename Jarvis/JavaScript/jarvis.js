const { mudaFundo } = require('./jarvisMudaFundo');
const { corMudaCanvas, colorMuda, corMuda } = require('./jarvisFuncaoMudaCor');
const {adicional} = require('./jarvisAdicional');


var aviso = alert('AVISO! Responda a todas as perguntas do bot em minúsculo e com gramática correta, que o seu pedido seja realizado!');
var nome = prompt('Olá! Me informe seu nome');
var pedido = prompt(nome + ', seja bem vindo! O que você deseja?');

mudaFundo(pedido);
/*texto(pedido);
addImg(pedido);
fazBotao(pedido);
criaCanvas(pedido);
adicional();*/

