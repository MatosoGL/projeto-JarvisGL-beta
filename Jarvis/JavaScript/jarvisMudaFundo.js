const { corMudaCanvas, colorMuda, corMuda } = require('./jarvisFuncaoMudaCor');
const {especificação} = require('./jarvisEspecificacaoArray');

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

