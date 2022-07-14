var arEstadoFatura = ['SP – R$67.836,43','RJ – R$36.678,66',
'MG – R$29.229,88', 'ES – R$27.165,48', 'Outros – R$19.849,53'];
var fatura = [];
var fatTotal = 0;
var aux = "";


function trataFatura (element){
    aux = element.substring((element.indexOf("$")+1), element.lenght);
    aux = aux.replace(".","");
    aux = aux.replace(",",".");
    aux = Number(aux);
    fatura.push(aux);
}

function faturaTotal (element){
    fatTotal = fatTotal+element
}

arEstadoFatura.forEach(trataFatura);
fatura.forEach(faturaTotal);
aux = 0;

console.log("Representatividade do faturamento mensal por estado:")
while (aux <= 4){
    console.log(`Faturamento de ${arEstadoFatura[aux].substring(0, ((arEstadoFatura[aux].indexOf("–"))+1))} ${(100*fatura[aux])/fatTotal}%`);
    aux += 1;
}