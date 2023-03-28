/*let valor1;
let valor2;
let resultado;



Valor1 = parseInt(prompt('Ingrese lectura del medidor'));
Valor2 = parseInt(prompt('Ingrese lectura actual'));


function resta2valores(Valor1, valor2, operacion) 
 switch (operacion) { 
    case "-":
            return valor2 - valor1;

    default:
        break;
 }


console.log(resta(200, 500, "-"));



alert('Consumo Kw por mes ' + resultado)*/

/*Valor1 = parseInt(prompt('Ingrese lectura del medidor'));
Valor2 = parseInt(prompt('Ingrese lectura actual'));

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
            return 0;
    }
}
console.log(calculadora(200, 50, "-"));




alert('Consumo Kw por mes' + );*/

Valor1 = parseInt(prompt('Ingrese lectura del medidor'));
Valor2 = parseInt(prompt('Ingrese lectura actual'));

let resultado = 0
function resta(valor1, valor2) {
    resultado = valor2 - valor1;
}
resta(200,50);

console.log(resultado)

alert('Consumo Kw por mes' + resultado);