
 








/*const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) =>{
  e.preventdefault()
  const data = {
    username: username.value,
    password: password.value
  }
  console.log(data)
})*/

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



/*let tagdelinst
 tagdelinst = prompt("Colocar el Tag del instrumento");
  alert("Planilla Lista para Calibrar" + " " + tagdelinst);
*/

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

valorencont2 = prompt("8mA") ;

valorencont3 = prompt("12mA"); 

valorencont4 = prompt("16mA"); 

valorencont5 = prompt("20mA") ;

valorencont6 = prompt("16mA") ;

valorencont7 = prompt("12mA") ;

valorencont8 = prompt("8mA") ;

valorencont9 = prompt("4mA") ;

error1 = (((valorencont1-4)/20)*100);
console.log(error1);
error2 = (((valorencont2-8)/20)*100);
console.log(error2);
error3 = (((valorencont3-12)/20)*100);
console.log(error3);
error4 = (((valorencont4-16)/20)*100);
console.log(error4);
error5 = (((valorencont5-20)/20)*100);
console.log(error5);
error6 = (((valorencont6-16)/20)*100);
console.log(error6);
error7 = (((valorencont7-12)/20)*100);
console.log(error7);
error8 = (((valorencont8-8)/20)*100);
console.log(error8);
error9 = (((valorencont9-4)/20)*100);
console.log(error9);
 
criteriodeaceptacion = (error1+error2+error3+error4+error5+error6+error7+error8+error9)/9;
console.log("Valor del error es:" + criteriodeaceptacion + "%");


if(criteriodeaceptacion < 1){
  alert("Aceptable");
} else{
  alert("Fuera de criterio");
} ;





