









/*Lecturas del medidor de energia*/
let resultado = 0
function resta(valor1, valor2) {
    resultado = valor2 - valor1;
}
resta(300,500);

console.log(resultado)
/*Precio total del consumo por Kw*/

function multiplicacion(valor1,resultado) {
    total = valor1 * resultado;
    
}
multiplicacion(5.15,resultado);
console.log(total);

alert('Consumo Kw por mes' + "" + resultado)
alert('Precio por Kw' + total)

if (total > 2000)
{
    console.log('el consumo es superior al mes pasado');
} else {
    
    console.log('El consumo es moderado');
}


