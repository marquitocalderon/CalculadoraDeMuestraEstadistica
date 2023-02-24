console.log("toy conectado")

const txtCombox= document.getElementById("selector")
const txtDesviacion= document.getElementById("desviacion")
const txtError=document.getElementById("error")
const txtPoblacion=document.getElementById("poblacion")
const pResultado1=document.getElementById("resultado1")
const pResultado2=document.getElementById("resultado2")
const btnCalcular=document.getElementById("calcular")
const btnLimpiar =document.getElementById("limpiar");
const formulario =document.getElementById("formulario");

btnLimpiar.addEventListener("click", function() {
  formulario.reset();
  pResultado1.innerText="La Respuesta Original Saldra Aqui!"
  pResultado2.innerText="La Respuesta Redondeado Saldra Aqui!"
});



btnCalcular.addEventListener('click', calcular)
function calcular(){
    console.log('apreto')
    let vCombox= txtCombox.value
    let v= parseFloat(txtDesviacion.value)
    let d= parseFloat(txtError.value)
    let h= parseFloat(txtPoblacion.value)

  if((vCombox ==="uno" || vCombox ==="dos" || vCombox ==="tres" || vCombox ==="cuatro"|| vCombox ==="cinco" || vCombox ==="seis" || vCombox ==="siete" || vCombox ==="ocho") && !isNaN(v) && !isNaN(d)&& !isNaN(h))
       {
        let z, n , r1, r2;
        switch(vCombox){
        case "uno":
        z=(3)*(3);
        
        break;
         case "dos":
        z=(2.58)*(2.58);
        
        break;
         case "tres":
        z=(2.33)*(2.33);
        
        break;
         case "cuatro":
        z=(2.05)*(2.05);
       
        break;
         case "cinco":
        z=(1.96)*(1.96);
        
        break;
         case "seis":
        z=(1.645)*(1.645);
        
        break;
          case "siete":
        z=(1.28)*(1.28);
        
        break;
         case "ocho":
        z=(0.674)*(0.674);
        break;           
        }
        n=(h*z*v*v)/((h-1)*d*d+(z*v*v));
        let final = n.toFixed(3);

        pResultado1.innerText="EL RESULTADO ORIGINAL ES: " + final;
        r1=parseInt(n);
        r2=n-r1;
        if(r2 > 0){   
      pResultado2.innerText="EL RESULTADO REDONDEADO ES: " + (r1+1); 
        }
        else{
            pResultado1.innerText="EL RESULTADO ORIGINAL ES:    " + n;
            pResultado2.innerText="EL RESULTADO REDONDEADO ES:   " + n; 
        } 
    }
    else{
pResultado1.innerText ="Lo siento no puedo calcular"
pResultado2.innerText ="Si no ingresa valores de numeros o deja vacio los campos"
    }
}


//segundo cuadro 
const txtCombox1= document.getElementById("selector1")
const txtDesviacion1= document.getElementById("desviacion1")
const txtError1=document.getElementById("error1")
const pResultado10=document.getElementById("resultado10")
const pResultado20=document.getElementById("resultado20")
const btnCalcular1=document.getElementById("calcular1")
const btnLimpiar1 =document.getElementById("limpiar1");
const formulario1 =document.getElementById("formulario1");

btnCalcular1.addEventListener('click', calcular1)
btnLimpiar1.addEventListener("click", function() {
  formulario1.reset();
  pResultado10.innerText="La Respuesta Original Saldra Aqui!"
  pResultado20.innerText="La Respuesta Redondeado Saldra Aqui!"
});

function calcular1(){
    console.log('apreto')
    let vCombox= txtCombox1.value
    let v= parseFloat(txtDesviacion1.value)
    let d= parseFloat(txtError1.value)
    

  if((vCombox ==="uno" || vCombox ==="dos" || vCombox ==="tres" || vCombox ==="cuatro"|| vCombox ==="cinco" || vCombox ==="seis" || vCombox ==="siete" || vCombox ==="ocho") && !isNaN(v) && !isNaN(d))
       {
        let z, n , r1, r2;
        switch(vCombox){
        case "uno":
        z=(3)*(3);
        
        break;
         case "dos":
        z=(2.58)*(2.58);
        
        break;
         case "tres":
        z=(2.33)*(2.33);
        
        break;
         case "cuatro":
        z=(2.05)*(2.05);
       
        break;
         case "cinco":
        z=(1.96)*(1.96);
        
        break;
         case "seis":
        z=(1.645)*(1.645);
        
        break;
          case "siete":
        z=(1.28)*(1.28);
        
        break;
         case "ocho":
        z=(0.674)*(0.674);
        break;           
        }
        n=(z*v*v)/(d*d);
        let final = n.toFixed(3);
        pResultado10.innerText="EL RESULTADO ORIGINAL ES: " + final;
        r1=parseInt(n);
        r2=n-r1;
        if(r2 > 0){   
      pResultado20.innerText="EL RESULTADO REDONDEADO ES: " + (r1+1); 
        }
        else{
            pResultado10.innerText="EL RESULTADO ORIGINAL ES:    " + n;
            pResultado20.innerText="EL RESULTADO REDONDEADO ES:   " + n; 
        } 
    } 
    else{
pResultado1.innerText ="Lo siento no puedo calcular"
pResultado2.innerText ="Si no ingresa valores de numeros o deja vacio los campos"
    }
}


//tercer cuadro 
const txtCombox3= document.getElementById("selector3")
const txtpostiva3= document.getElementById("positiva")
const txtnegativa3=document.getElementById("negativa")
const txterror3=document.getElementById("error3")
const txtpoblacion3=document.getElementById("poblacion3")
const pResultado30=document.getElementById("resultado30")
const pResultado40=document.getElementById("resultado40")
const btnCalcular3=document.getElementById("calcular3")
const btnLimpiar3 =document.getElementById("limpiar3");
const formulario3 =document.getElementById("formulario3");

btnLimpiar3.addEventListener("click", function() {
  formulario3.reset();
  pResultado30.innerText="La Respuesta Original Saldra Aqui!"
  pResultado40.innerText="La Respuesta Redondeado Saldra Aqui!"
});

btnCalcular3.addEventListener('click', calcular3)
function calcular3(){
    console.log('apreto')
    let vCombox= txtCombox3.value
    let p= parseFloat(txtpostiva3.value)
    let q= parseFloat(txtnegativa3.value)
    let d= parseFloat(txterror3.value)
    let h= parseFloat(txtpoblacion3.value)
    

  if((vCombox ==="uno" || vCombox ==="dos" || vCombox ==="tres" || vCombox ==="cuatro"|| vCombox ==="cinco" || vCombox ==="seis" || vCombox ==="siete" || vCombox ==="ocho") && !isNaN(p) && !isNaN(q) && !isNaN(d) && !isNaN(h))
       {
        let z, n , r1, r2;
        switch(vCombox){
        case "uno":
        z=(3)*(3);
        
        break;
         case "dos":
        z=(2.58)*(2.58);
        
        break;
         case "tres":
        z=(2.33)*(2.33);
        
        break;
         case "cuatro":
        z=(2.05)*(2.05);
       
        break;
         case "cinco":
        z=(1.96)*(1.96);
        
        break;
         case "seis":
        z=(1.645)*(1.645);
        
        break;
          case "siete":
        z=(1.28)*(1.28);
        
        break;
         case "ocho":
        z=(0.674)*(0.674);
        break;           
        }
        n=(h*z*p*q)/(((d*d)*(h-1))+(z*p*q));
        let final = n.toFixed(3);
        pResultado30.innerText="EL RESULTADO ORIGINAL ES: " + final;
        r1=parseInt(n);
        r2=n-r1;
        if(r2 > 0){   
      pResultado40.innerText="EL RESULTADO REDONDEADO ES: " + (r1+1); 
        }
        else{
            pResultado30.innerText="EL RESULTADO ORIGINAL ES:    " + n;
            pResultado40.innerText="EL RESULTADO REDONDEADO ES:   " + n; 
        } 
    } 
    else{
pResultado30.innerText ="Lo siento no puedo calcular"
pResultado40.innerText ="Si no ingresa valores de numeros o deja vacio los campos"
    }
}


const txtCombox4= document.getElementById("selector4")
const txtpostiva4= document.getElementById("positiva4")
const txtnegativa4=document.getElementById("negativa4")
const txterror4=document.getElementById("error4")
const pResultado50=document.getElementById("resultado50")
const pResultado60=document.getElementById("resultado60")
const btnCalcularr=document.getElementById("calcular40")
const btnLimpiar4 =document.getElementById("limpiar4");
const formulario4 =document.getElementById("formulario4");

btnLimpiar4.addEventListener('click', function() {
  formulario4.reset();
  pResultado50.innerText="La Respuesta Original Saldra Aqui!"
  pResultado60.innerText="La Respuesta Redondeado Saldra Aqui!"
});


btnCalcularr.addEventListener('click', ultimo)
function ultimo(){
    console.log('apreto')
    let vCombox= txtCombox4.value
    let p= parseFloat(txtpostiva4.value)
    let q= parseFloat(txtnegativa4.value)
    let d= parseFloat(txterror4.value)

  if((vCombox ==="uno" || vCombox ==="dos" || vCombox ==="tres" || vCombox ==="cuatro"|| vCombox ==="cinco" || vCombox ==="seis" || vCombox ==="siete" || vCombox ==="ocho") && !isNaN(p) && !isNaN(q)  && !isNaN(d))
       {
        let z, n , r1, r2;
        switch(vCombox){
        case "uno":
        z=(3)*(3);
        
        break;
         case "dos":
        z=(2.58)*(2.58);
        
        break;
         case "tres":
        z=(2.33)*(2.33);
        
        break;
         case "cuatro":
        z=(2.05)*(2.05);
       
        break;
         case "cinco":
        z=(1.96)*(1.96);
        
        break;
         case "seis":
        z=(1.645)*(1.645);
        
        break;
          case "siete":
        z=(1.28)*(1.28);
        
        break;
         case "ocho":
        z=(0.674)*(0.674);
        break;           
        }
        n=(z*p*q)/(d*d);
        let final = n.toFixed(3);

        pResultado50.innerText="EL RESULTADO ORIGINAL ES: " + final;
        r1=parseInt(n);
        r2=n-r1;
        if(r2 > 0){   
      pResultado60.innerText="EL RESULTADO REDONDEADO ES: " + (r1+1); 
        }
        else{
            pResultado50.innerText="EL RESULTADO ORIGINAL ES:    " + n;
            pResultado60.innerText="EL RESULTADO REDONDEADO ES:   " + n; 
        } 
    }
    else{
pResultado50.innerText ="Lo siento no puedo calcular"
pResultado60.innerText ="Si no ingresa valores de numeros o deja vacio los campos"
    }
}