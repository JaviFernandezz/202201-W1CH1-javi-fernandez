

//------------------------------------------------

let pantalla = document.querySelector('.pantalla');
let numbers = document.querySelectorAll('.num');
let operations = document.querySelectorAll('.orange');
let igual = document.querySelector('#igual');
let borrarTodo = document.querySelector('#borrar');
let borrarUltNum = document.querySelector('#return');
let negativo = document.querySelector('#rest');
let sum = document.querySelector('#sum');
let rest = document.querySelector('#rest');
let div = document.querySelector('#div');
let mult = document.querySelector('#mult');

let num1='';
let num2='';
let operacion='';
let operacionPrincipal='';
let result='';

negative(); 


numbers.forEach(numbers=>{      //MOSTRAR NUMS POR PANTALLA
                    

  numbers.addEventListener('click',(e)=>{
    
    if (operacionPrincipal===''){
      if(pantalla.value.length<5){
        num1= num1 + e.target.innerText;
        pantalla.value= num1;
        return num1;
      }

    } else if(num1==='-'){      //MOSTRAR NUM EN NEGATIVO
      
      num1= num1 + e.target.innerText;
      pantalla.value= num1;
      return num1;
     
    } else {   

      if(operacionPrincipal!=''){

        if(pantalla.value.length<5){
        pantalla.value= e.target.innerText;
        num2 = num2 + e.target.innerText;
        pantalla.value=num2;
        return num2;
        }

      }

      else if(num2==='-'){        //MOSTRAR NUM EN NEGATIVO

        num2= num2 + e.target.innerText;
        pantalla.value= num2;
        return num2;
      }

    } 
  })
})


function negative(){                  //PONER NÚMERO EN NEGATIVO
  negativo.addEventListener('click',(e)=>{

    if(operacion!=''){

      num2='-';

    }
  
    if(num1===''){

      num1='-';

    }else if(num1!=''){

      return num1;
    }

  })
}



operations.forEach(operations=>{   
                
  operations.addEventListener('click',(e)=>{  


  pantalla.value='';
  operacion= e.target.innerText;
    
    if(operacion==='-' && num2!=''){        

      return num2;

    } else if(operacion=!'' && num1!='-'){

    operacionPrincipal= e.target.innerText; /*PARA HACER OPERACIÓN CORRECTA
                                            Y NO CONFUNDIR CON EL NÚM. NEGATIVO*/
    } 

    switch (operacionPrincipal) {           //AÑADE CLASE PARA VER EL BOTÓN DEL OPERANDO SELECCIONADO
      case "+":
        sum.style.border = sum.classList.add('orangeclick');
        break;
      case "-":
        rest.style.border = rest.classList.add('orangeclick');
          break;
      case "X":
        mult.style.border = mult.classList.add('orangeclick');
          break;
      case "/":
        div.style.border = div.classList.add('orangeclick');
          break;
      default:
          break;
  }
})
})




igual.addEventListener('click',(e)=>{             //OPERACIONES

  sum.style.border = sum.classList.remove('orangeclick');         //QUITA LA SELECCIÓN DEL BOTÓN OPERANDO
  rest.style.border = rest.classList.remove('orangeclick');
  mult.style.border = mult.classList.remove('orangeclick');
  div.style.border = div.classList.remove('orangeclick');

  switch(operacionPrincipal){
    
    case '+':
      let suma= +num1 + +num2;
      pantalla.value=(Number(suma.toFixed(3)));
      num2='';
     
      break;

    case '-':
      let resta= num1-num2;
      pantalla.value=(Number(resta.toFixed(3)));
      num2='';
     
      break;

    case 'X':
      let mult= num1*num2;
      pantalla.value=(Number(mult.toFixed(3)));
      num2='';
    
      break;      

    case '/':
      let div= num1/num2;
      pantalla.value=(Number(div.toFixed(3)));
      num2='';
    
      break;
  }
  result=pantalla.value;

  if(result!=''){
    num1=result;
  }
 
})


borrarTodo.addEventListener('click',(e)=>{    //BOTÓN AC, BORRA TODO

  pantalla.value='';
  num1='';
  num2='';
  operacion='';

})


borrarUltNum.addEventListener('click',(e)=>{  //BOTÓN FLECHA, BORRA ÚLTIMO NÚM. INTRODUCIDO

  let numero = pantalla.value
  numeroReturn = numero.substring(0,numero.length-1);
  pantalla.value=numeroReturn;
  num1=numeroReturn;
  return num1;
  
})

