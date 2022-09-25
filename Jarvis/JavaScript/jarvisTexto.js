

function texto(desejo) {

    if (desejo === especificação.texto[0]
        || desejo === especificação.texto[1]
        || desejo === especificação.texto[2]
        || desejo === especificação.texto[3]) {
        let ifTexto = prompt('Qual o texto desejado?');
        var divsoria = document.getElementById('divBefore');
        var teste2 = document.createTextNode(ifTexto);
        divsoria.appendChild(teste2);
        let corTexto = prompt('qual a cor desejada no texto?');
        colorMuda(corTexto, teste2);
       
    }
}