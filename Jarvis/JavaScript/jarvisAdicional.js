

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

