

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
            var textoBotao = document.createTextNode(txtBotao);
            ifBotao.title = textoBotao;

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