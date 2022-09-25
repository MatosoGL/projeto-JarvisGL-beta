
function criaCirculo(element, x, y, tamanho, raio, diametro, variavel) {
    
    //element.fillStyle = variavel;
    corMudaCanvas(variavel, element);
	element.beginPath();
	element.arc(x, y, tamanho, raio, diametro * Math.PI);
	element.fill();

   
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

            var tamanhoCirculo = prompt('qual será o tamanho? (em pixels) "não precisa escrever px"')

            var xCirculo = prompt('defina a posição do "x" (posição horizontal) do círculo');

            var yCirculo = prompt('defina o "y" (posição vertical) do seu círculo');

            criaCirculo(pincel, xCirculo, yCirculo, tamanhoCirculo, raioCirculo, diametroCirculo, corCirculo);

        }
        if (qualDesenho === especificação.formatoDesenho.retangulo[0] 
            || qualDesenho === especificação.formatoDesenho.retangulo[1] ) {
            
            var larguraRetangulo = prompt('digite a largura desejada ao seu retângulo');
        }
    }
}