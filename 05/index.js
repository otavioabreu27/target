var arPalavras = ['Lorem', 'Ipsum', 'Dolor'];
var arAux = [];


function inverterPalavra (element){
    var string = "";
    arAux = element.split("");
    var cont = arAux.length-1;

    while (cont >= 0){
        string = string + arAux[cont];
        cont -= 1;
    }
    console.log(string);
}

arPalavras.forEach(inverterPalavra);