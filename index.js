









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

const PT6210 = new instrumento("Rosemount","3051G,","10mav20pt001","356233","TG#3","lubricaciondetg","40058945","0","300");
const PT6510 = new instrumento("Rosemount","3051G,","10mav20pt001","35553","TG#3","lubricaciondetg","40058945","0","300");
const PT4531 = new instrumento("Rosemount","3051G,","10mav20pt001","5552521","TG#3","lubricaciondetg","40058945","0","300");
const PT8896 = new instrumento("Rosemount","3051G,","10mav20pt001","25157","TG#3","lubricaciondetg","40058945","0","300");
const PT1520 = new instrumento("Rosemount","3051G,","10mav20pt001","727251","TG#3","lubricaciondetg","40058945","0","300");
const PT2101 = new instrumento("Rosemount","3051G,","10mav20pt001","1257824","TG#3","lubricaciondetg","40058945","0","300");
const PT3255 = new instrumento("Rosemount","3051G,","10mav20pt001","428722","TG#3","lubricaciondetg","40058945","0","300");
const PT1235 = new instrumento("Rosemount","3051G,","10mav20pt001","284284","TG#3","lubricaciondetg","40058945","0","300");
const PT8798 = new instrumento("Rosemount","3051G,","10mav20pt001","28424","TG#3","lubricaciondetg","40058945","0","300");
const PT4585 = new instrumento("Rosemount","3051G,","10mav20pt001","4855757","TG#3","lubricaciondetg","40058945","0","300");
const PT1012 = new instrumento("Rosemount","3051G,","10mav20pt001","75875","TG#3","lubricaciondetg","40058945","0","300");
const PT1513 = new instrumento("Rosemount","3051G,","10mav20pt001","7857875","TG#3","lubricaciondetg","40058945","0","300");
const PT1418 = new instrumento("Rosemount","3051G,","10mav20pt001","45464564","TG#3","lubricaciondetg","40058945","0","300");
const PT9210 = new instrumento("Rosemount","3051G,","10mav20pt001","212370","TG#3","lubricaciondetg","40058945","0","300");
const PT1543 = new instrumento("Rosemount","3051G,","10mav20pt001","35353898","TG#3","lubricaciondetg","40058945","0","300");
const PT1987 = new instrumento("Rosemount","3051G,","10mav20pt001","43563","TG#3","lubricaciondetg","40058945","0","300");

function instrumento(Marca,Modelo,kks,numerodeserie,unidad,equipo,central,orden,rangomin,rangomax){
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.kks = kks;
    this.numerodeserie = numerodeserie;
    this.unidad = unidad;
    this.equipo = equipo;
    this.central = central;
    this.orden = orden;
    this.rangomin = rangomin;
    this.rangomax = rangomax;

    
}
console.log(PT6510);
console.log(PT6210);
console.log(PT4531);
console.log(PT8896);
console.log(PT1520);
console.log(PT2101); 
console.log(PT3255); 
console.log(PT1235); 
console.log(PT8798); 
console.log(PT4585); 
console.log(PT1012); 
console.log(PT1513); 
console.log(PT1418); 
console.log(PT9210); 
console.log(PT1543); 
console.log(PT1987); 



let tagdelinst
 tagdelinst = prompt("Colocar el Tag del instrumento");
  alert("Planilla Lista para Calibrar" + " " + tagdelinst);

  let valorencont1
  let valorencont2
  let valorencont3
  let valorencont4
  let valorencont5
  let valorencont6
  let valorencont7
  let valorencont8
  let valorencont9

valorencont1 = prompt("4mA"); 
alert ("4ma = " + valorencont1)
valorencont2 = prompt("8mA");
alert ("8ma = " + valorencont2) 
valorencont3 = prompt("12mA"); 
alert ("12ma = " + valorencont3)
valorencont4 = prompt("16mA"); 
alert ("16ma = " + valorencont4)
valorencont5 = prompt("20mA") ;
alert ("20ma = " + valorencont5)
valorencont6 = prompt("16mA") ;
alert ("16ma = " + valorencont6)
valorencont7 = prompt("12mA") ;
alert ("12ma = " + valorencont7)
valorencont8 = prompt("8mA") 
alert ("8ma = "  + valorencont8)
valorencont9 = prompt("4mA") ;
alert ("4ma = " + valorencont9)


