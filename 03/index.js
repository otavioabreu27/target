const readline = require('readline');
const fs = require('fs');
var dia = "";
var valor = "";
var arDia = [];
var arValor = [];

async function processLineByLine(){
    const fileStream = fs.createReadStream('./dados.json');

    const rl = readline.createInterface({
        input: fileStream
    })

    for await (const line of rl){
        if (line.includes("dia")) {
            dia = line.trim();
            arDia.push(Number(dia.substring(6, dia.length-1)));
        } else if (line.includes("valor")) {
            valor = line.trim(); 
            arValor.push(Number(valor.substring(8, valor.length)));
        }
    }
    console.log(arDia);
    console.log(arValor)

    /*  Percorrer os arrays e retornar o dia e o valor do:
            - menor valor de faturamento ocorrido em um dia do mes
            - maior valor de faturamento ocorrido em um dia do mes
            - numero de dias no mes em que o valor de faturamento diario foi superior a media mensal
    */
}
processLineByLine();