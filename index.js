









/* /*Lecturas del medidor de energia*/
  //  let resultado = 0
  //  function resta(valor1, valor2) {
  //  resultado = valor2 - valor1;
  //  }   
   // resta(300,500);

//console.log(resultado)
/*Precio total del consumo por Kw*/

//function multiplicacion(valor1,resultado) {
 //   total = valor1 * resultado;
    
//}
//multiplicacion(5.15,resultado);
//console.log(total);

///alert('Consumo Kw por mes' + "" + resultado)
//alert('Precio total por Kw' + total)

//if (total > 2000)
//{
//    console.log('el consumo es superior al mes pasado');
//} else {
    
//    console.log('El consumo es moderado');
//} 

const PT6210 = new instrumento("Rosemount","3051G,","10mav20pt001","356233","TG#3","lubricaciondetg");
const PT6510 = new instrumento("Rosemount","3051G,","10mav20pt001","35553","TG#3","lubricaciondetg");
const PT4531 = new instrumento("Rosemount","3051G,","10mav20pt001","5552521","TG#3","lubricaciondetg");
const PT8896 = new instrumento("Rosemount","3051G,","10mav20pt001","25157","TG#3","lubricaciondetg");
const PT1520 = new instrumento("Rosemount","3051G,","10mav20pt001","727251","TG#3","lubricaciondetg");
const PT2101 = new instrumento("Rosemount","3051G,","10mav20pt001","1257824","TG#3","lubricaciondetg");
const PT3255 = new instrumento("Rosemount","3051G,","10mav20pt001","428722","TG#3","lubricaciondetg");
const PT1235 = new instrumento("Rosemount","3051G,","10mav20pt001","284284","TG#3","lubricaciondetg");
const PT8798 = new instrumento("Rosemount","3051G,","10mav20pt001","28424","TG#3","lubricaciondetg");
const PT4585 = new instrumento("Rosemount","3051G,","10mav20pt001","4855757","TG#3","lubricaciondetg");
const PT1012 = new instrumento("Rosemount","3051G,","10mav20pt001","75875","TG#3","lubricaciondetg");
const PT1513 = new instrumento("Rosemount","3051G,","10mav20pt001","7857875","TG#3","lubricaciondetg");
const PT1418 = new instrumento("Rosemount","3051G,","10mav20pt001","45464564","TG#3","lubricaciondetg");
const PT9210 = new instrumento("Rosemount","3051G,","10mav20pt001","212370","TG#3","lubricaciondetg");
const PT1543 = new instrumento("Rosemount","3051G,","10mav20pt001","35353898","TG#3","lubricaciondetg");
const PT1987 = new instrumento("Rosemount","3051G,","10mav20pt001","43563","TG#3","lubricaciondetg");

function instrumento(Marca,Modelo,kks,numerodeserie,sector,equipo,central,plandemant,orden){
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.kks = kks;
    this.numerodeserie = numerodeserie;
    this.sector = sector;
    this.equipo = equipo;
    this.central = central;
    this.plandemant = plandemant;
    this.orden = orden;

    
}
console.log(instrumento);

let tagdelinst
 tagdelinst = prompt("Colocar el Tag del instrumento");
  alert("Planilla Lista para Calibrar" + " " + tagdelinst);

let datos

