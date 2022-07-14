const readline = require('readline');
const fs = require('fs');
var valor = "";
var arValor = [];
var media = 0;
var diasMed = [];
var maiorVal = 0;
var menorVal = 0;

function somaMedia (element){
    media += element;
}

function maiorMed (element,index){
    if (element > media){
        diasMed.push(index+1);
    }
}

function menorMed (element){
    if (element != 0 && element < menorVal){
        menorVal = element;
    }
}

async function processLineByLine(){
    const fileStream = fs.createReadStream('./dados.json');

    const rl = readline.createInterface({
        input: fileStream
    })

    for await (const line of rl){
        if (line.includes("valor")) {
            valor = line.trim(); 
            arValor.push(Number(valor.substring(8, valor.length)));
        } 
    }

    // Media
    arValor.forEach(somaMedia);
    media = media / arValor.length;
    arValor.forEach(maiorMed);
    console.log(`Os dias em que o valor de faturamento foi superior a média mensal: ${diasMed} totalizando ${diasMed.length} dias.`)

    // Maior
    maiorVal = Math.max(...arValor);
    console.log(`O dia de maior faturamento foi de R$${maiorVal}, e foi dia ${(arValor.indexOf(maiorVal)+1)}.`);

    // Menor
    menorVal = maiorVal;
    arValor.forEach(menorMed);
    console.log(`O dia de menor faturamento foi de R$${menorVal}, e foi dia ${(arValor.indexOf(menorVal)+1)}`);


    //console.log(arValor)

    /*  Percorrer os arrays e retornar o dia e o valor do:
            - menor valor de faturamento ocorrido em um dia do mes
            - maior valor de faturamento ocorrido em um dia do mes
            - numero de dias no mes em que o valor de faturamento diario foi superior a media mensal
    */
}

processLineByLine();
