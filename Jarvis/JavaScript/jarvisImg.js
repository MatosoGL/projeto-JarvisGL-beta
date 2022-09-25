

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