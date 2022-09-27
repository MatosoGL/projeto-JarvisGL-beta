/*const botaoMenu = document.querySelector('.cabecalho__menu')
    const menu = document.querySelector('.menu-lateral')

    botaoMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-lateral--ativo')
    })*/

    var botaoMenu = document.getElementById('botao');
    var fundoTela = document.getElementById('tela');
    var corDoTexto = document.getElementById('texto');
    var cabecalho = document.getElementById('cabecalho');
    var itemUl = document.getElementById('item');
    var divBefore = document.getElementById('divBefore');
    var navMenu = document.getElementById('nav--Menu');
    var aMenu = document.getElementById('txtMenu');
    var menu = document.getElementById('menu');
    
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
            quadrado: ['quadrado'],
            hexagono: ['hexagono']
        },
        criaBotao: ['fazer botão', 'fazer botao', 'criar botão',
         'criar botao', 'botao', 'botão', 'eu quero um botão', 'eu quero um botao']
    }
    
    var aviso = alert('AVISO! Responda a todas as perguntas do bot em minúsculo e com gramática correta, que o seu pedido seja realizado!');
    var nome = prompt('Olá! Me informe seu nome');
    var pedido = prompt(nome + ', seja bem vindo! O que você deseja?');
    
    
    especificação.cor.push('amarelo', 'violeta', 'vinho', 'marrom', 'salmão',
        'salmao', 'magenta', 'chocolate', 'lima', 'limão', 'limao', 'azul claro',
        'azul escuro', 'azul marinho', 'verde claro', 'verde escuro', 'verde forte',
        'rosa claro', 'rosa escuro', 'rosa shock', 'salmao claro', 'salmão claro',
        'vermelho claro', 'vermelho escuro', 'cinza claro', 'branco');
    
    especificação.corAdd.push('forte');
    
    especificação.texto.push('quero um texto', 'faça um texto', 'faz texto');
    
    especificação.escolhaElement.push('fundo', 'cabecalho', 'cabeçalho', 'botão', 'botao')
    
   
    
    function corMuda(desejo, elemento, funcao, parametro) {
    
        if (desejo === especificação.cor[0]) {
    
            elemento.funcao.parametro = 'blue';
        }
        if (desejo === especificação.cor[1]) {
    
            elemento.funcao.parametro = 'green';
        }
        if (desejo === especificação.cor[2]) {
    
            elemento.funcao.parametro = 'red';
        }
        if (desejo === especificação.cor[3]) {
    
            elemento.funcao.parametro = 'gray';
        }
        if (desejo === especificação.cor[4]) {
    
            elemento.funcao.parametro = 'black';
        }
        if (desejo === especificação.cor[5]) {
    
            elemento.funcao.parametro = 'orange';
        }
        if (desejo === especificação.cor[6]) {
    
            elemento.funcao.parametro = 'hotPink';
        }
        if (desejo === especificação.cor[7]) {
    
            elemento.funcao.parametro = 'indigo';
        }
        if (desejo === especificação.cor[8]) {
    
            elemento.funcao.parametro = 'cyan';
        }
        if (desejo === especificação.cor[9]) {
    
            elemento.funcao.parametro = 'turquoise';
        }
        if (desejo === especificação.cor[10]) {
    
            elemento.funcao.parametro = 'yellow';
        }
        if (desejo === especificação.cor[11]) {
    
            elemento.funcao.parametro = 'slateBlue';
        }
        if (desejo === especificação.cor[12]) {
    
            elemento.funcao.parametro = 'maroon';
        }
        if (desejo === especificação.cor[13]) {
    
            elemento.funcao.parametro = 'saddleBrown';
        }
        if (desejo === especificação.cor[14] || desejo === especificação.cor[15]) {
    
            elemento.funcao.parametro = 'salmon';
        }
        if (desejo === especificação.cor[16]) {
    
            elemento.funcao.parametro = 'magenta';
        }
        if (desejo === especificação.cor[17]) {
    
            elemento.funcao.parametro = 'chocolate';
        }
        if (desejo === especificação.cor[18]
            || desejo === especificação.cor[19]
            || desejo === especificação.cor[20]
            || desejo === especificação.cor[26]) {
    
            elemento.funcao.parametro = 'lime';
        }
        if (desejo === especificação.cor[21]) {
    
            elemento.funcao.parametro = 'dodgerBlue';
        }
        if (desejo === especificação.cor[22]
            || desejo === especificação.cor[23]) {
    
            elemento.funcao.parametro = 'darkBlue';
        }
        if (desejo === especificação.cor[24]) {
    
            elemento.funcao.parametro = 'lightGreen';
        }
        if (desejo === especificação.cor[25]) {
    
            elemento.funcao.parametro = 'darkGreen';
        }
        if (desejo === especificação.cor[27]) {
    
            elemento.funcao.parametro = 'lightPink';
        }
        if (desejo === especificação.cor[28]) {
    
            elemento.funcao.parametro = 'darkPink';
        }
        if (desejo === especificação.cor[29]) {
    
            elemento.funcao.parametro = 'deepPink';
        }
    
        if (desejo === especificação.cor[30]
            || desejo === especificação.cor[31]) {
    
            elemento.funcao.parametro = 'lightSalmon';
        }
        if (desejo === especificação.cor[32]) {
    
            elemento.funcao.parametro = 'tomato';
        }
        if (desejo === especificação.cor[33]) {
    
            elemento.funcao.parametro = 'darkRed';
        }
        if (desejo === especificação.cor[34]) {
    
            elemento.funcao.parametro = 'darkGray';
        }
        if (desejo === especificação.cor[35]) {
            
            elemento.funcao.parametro = 'white';
            
        }
    }
    
    
    function mudaFundo(desejo) {
    
        if (desejo === especificação.mudarCor[0]
            || desejo === especificação.mudarCor[1]
            || desejo === especificação.mudarCor[2]
            || desejo === especificação.mudarCor[3]
            || desejo === especificação.mudarCor[4]
            || desejo === especificação.mudarCor[5]
            || desejo === especificação.mudarCor[6]
            || desejo === especificação.mudarCor[7]
            || desejo === especificação.mudarCor[8]) {
            let escolhaCor = prompt('você deseja mudar a cor de fundo, cabecalho ou do botão?');
    
            if (escolhaCor === especificação.escolhaElement[0]) {
                var corFundo = prompt('qual a cor de fundo desejada?');
    
                corMuda(corFundo, fundoTela);
                if (corFundo === especificação.cor[21] ||
                    corFundo === especificação.cor[22]
                    || corFundo === especificação.cor[23]
                    || corFundo === especificação.cor[0]) {
    
                    botaoMenu.style.backgroundColor = 'turquoise';
                    botaoMenu.style.color = 'blue';
                }
    
                if (corFundo === especificação.cor[7] || corFundo === especificação.cor[6]
                    || corFundo === especificação.cor[27] || corFundo === especificação.cor[28]
                    || corFundo === especificação.cor[29]
                    || corFundo === especificação.cor[2]
                    || corFundo === especificação.cor[3]
                    || corFundo === especificação.cor[33]
                    || corFundo === especificação.cor[4]
                    || corFundo === especificação.cor[5]) {
    
                    botaoMenu.style.backgroundColor = 'white';
                    botaoMenu.style.color = 'black';
                }
            } if(escolhaCor === especificação.escolhaElement[1] 
                || escolhaCor === especificação.escolhaElement[2]) {
                
                    var corFundo = prompt('qual a cor do cabeçalho desejada?');
                    corMuda(corFundo, cabecalho);
                }
                if (escolhaCor === especificação.escolhaElement[3]
                    || escolhaCor === especificação.escolhaElement[4]) {
                
                        corBotao(botaoMenu);
    
            }
        }
    }
    //Oi!! Você me achou! merece um prêmio! você está sendo desafiado para uma partida de mario kart!
    function texto(desejo) {
    
        if (desejo === especificação.texto[0]
            || desejo === especificação.texto[1]
            || desejo === especificação.texto[2]
            || desejo === especificação.texto[3]) {
            let ifTexto = prompt('Qual o texto desejado?');
            let divsoria = document.getElementById('divBefore');
    
            let teste2 = document.createTextNode(ifTexto);
            divsoria.appendChild(teste2);
    
            let corTexto = prompt('qual a cor desejada no texto?');
            colorMuda(corTexto, teste2);
           
        }
    }
    
    function addImg(desejo) {
        
        var img = document.createElement('img');
        if (desejo === especificação.imagem[0] 
            || desejo === especificação.imagem[1] 
            || desejo === especificação.imagem[2] 
            || desejo === especificação.imagem[3]) {
               var selectImg = prompt('Coloque o link da imagem aqui por favor');
               divsoria.appendChild(img);
                img.src = selectImg;
        }
        
    }
    
    function fazBotao(desejo) {
        if (desejo === especificação.criaBotao[0] 
            || desejo === especificação.criaBotao[1] 
            || desejo === especificação.criaBotao[2] 
            || desejo === especificação.criaBotao[3] 
            || desejo === especificação.criaBotao[4] 
            || desejo === especificação.criaBotao[5] 
            || desejo === especificação.criaBotao[6] 
            || desejo === especificação.criaBotao[7]) {
            
                var fazA = document.createElement('a');
                var ifBotao = document.createElement('button');
                
                var txtBotao = prompt('qual texto você deseja adicionar no botão?');
                ifBotao.title = txtBotao;
    
                var desejaLink = prompt('você deseja adicionar um link nesse botão?');
                var linkBotao = prompt('coloque aqui o link desejado como destino deste botão');
    
                if (desejaLink === especificação.afirmacoes[0] 
                    || desejaLink === especificação.afirmacoes[3] 
                    || desejaLink === especificação.afirmacoes[5]) {
                    
                        fazA.href = linkBotao;
                }
                fazA.appendChild(ifBotao);
                ifBotao.id = 'botao';
                divBefore.appendChild(fazA);
                
                
                corBotao(ifBotao);
        }
    }
    
    function corBotao(nomeBotao) {
        
            var corFundoBotao = prompt('qual a cor do botão desejada?');
            corMuda(corFundoBotao, nomeBotao);
                
            var corTextoBotao = prompt('qual cor do texto do botão você deseja?');
            colorMuda(corTextoBotao, nomeBotao);
    }
    
    function criaCirculo(element, x, y, raio, ang1, ang2, variavel) {
        
        //element.fillStyle = variavel;
        corMudaCanvas(variavel, element);
        element.beginPath();
        element.arc(x, y, raio, ang1, ang2 * Math.PI);
        element.fill();
    
       
    }
    
    function criaRetangulo(x, y, largura, altura, variavel, element) {
    
        corMudaCanvas(variavel, element);
        element.fillRect(x, y, largura, altura);
    }
    
    function criaQuadrado(x, y, propriedades, variavel, element) {
    
        corMudaCanvas(variavel, element);
        element.fillRect(x, y, propriedades, propriedades);
    
    }
    
    function criaCanvas(desejo) {
    
        if (desejo === especificação.fazCanvas[0] 
            || desejo === especificação.fazCanvas[1] 
            || desejo === especificação.fazCanvas[2] 
            || desejo === especificação.fazCanvas[3] 
            || desejo === especificação.fazCanvas[4] 
            || desejo === especificação.fazCanvas[5] ) {
            var canvas = document.createElement('canvas');
            var pincel = canvas.getContext('2d');
            divBefore.appendChild(canvas);
    
            var heightCanvas = prompt('qual altura desejada ao seu quadro de desenho?');
            canvas.height = heightCanvas;
            var widthCanvas = prompt('qual largura desejada ao quadro de desenho?');
            canvas.width = widthCanvas;
    
            var qualDesenho = prompt('qual o desenho desejado? coloque apenas a forma desejada!!');
           
            if(qualDesenho === especificação.formatoDesenho.circulo[0] 
            || qualDesenho === especificação.formatoDesenho.circulo[1] 
            || qualDesenho === especificação.formatoDesenho.circulo[2] 
            || qualDesenho === especificação.formatoDesenho.circulo[3] ) {
               
                var corCirculo = prompt('qual será a cor do seu circulo?');
    
                var diametroCirculo = prompt('qual será o diametro do círculo?');
    
                var raioCirculo = prompt('Qual será o raio do círculo?');
    
                var tamanhoCirculo = prompt('qual será o angulo inicial do seu circulo?');
    
                var xCirculo = prompt('defina a posição do angulo final do circulo');
    
                var yCirculo = prompt('defina o "y" (posição vertical) do seu círculo');
    
                criaCirculo(pincel, xCirculo, yCirculo, tamanhoCirculo, raioCirculo, diametroCirculo, corCirculo);
    
            }
            if (qualDesenho === especificação.formatoDesenho.retangulo[0] 
                || qualDesenho === especificação.formatoDesenho.retangulo[1] ) {
                
                var larguraRetangulo = prompt('digite a largura desejada ao seu retângulo');
                
                var alturaRetangulo = prompt('qual será a altura do retângulo?');
    
                var xRetangulo = prompt('defina a posição "X" do seu retângulo');
    
                var yRetangulo = prompt('defina a posição "Y" do seu retângulo');
    
                var corRetangulo = prompt('qual a cor desejada ao retângulo?');
    
                criaRetangulo(xRetangulo, yRetangulo, larguraRetangulo, alturaRetangulo, corRetangulo, pincel);
            }
            if (qualDesenho === especificação.formatoDesenho.quadrado[0]) {
                
                var propriedadeQuadrado = prompt('qual será a proporção em pixels do quadrados?');
    
                var xQuadrado = prompt('defina a posição "X" do seu quadrado');
    
                var yQuadrado = prompt('defina a posição "Y" do seu quadrado');
    
                var corQuadrado = prompt('qual a cor desejada ao quadrado?');
    
                criaQuadrado(xQuadrado, yQuadrado, propriedadeQuadrado, corQuadrado, pincel);
            }
        }
    }
    
    function adicional() {
    
        let pedido2 = prompt('Deseja mais alguma coisa?');
        texto(pedido2);
        mudaFundo(pedido2);
        addImg(pedido2);
        fazBotao(pedido2);
        criaCanvas(pedido2);
        if (pedido2 === especificação.afirmacoes[0]
            || pedido2 === especificação.afirmacoes[3]
            || pedido2 === especificação.afirmacoes[5]) {
            
            let pedido3 = prompt('O que você deseja?');
            texto(pedido3);
            mudaFundo(pedido3);
            addImg(pedido3);
            fazBotao(pedido3);
            criaCanvas(pedido3);
    
            while(pedido2 === especificação.afirmacoes[0]
                || pedido2 === especificação.afirmacoes[3]
                || pedido2 === especificação.afirmacoes[5]){
        
                    adicional();
                    pedido2--;
                }
           }
    }
    
    
    mudaFundo(pedido);
    texto(pedido);
    addImg(pedido);
    fazBotao(pedido);
    criaCanvas(pedido);
    adicional();
    
    

