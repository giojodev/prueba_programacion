'use strict'


window.addEventListener('load',()=>{
    var formulario=document.querySelector("#formulario");
    


    if(formulario)
    {
        formulario.addEventListener('submit',function(){
            var frase=document.getElementById("frase").value;
            var buscador=document.getElementById("buscador").value;
            var list=document.getElementById("lista");


            var repeticion=cuantasVecesseRepite(frase,buscador);

          list.innerHTML=repeticion;
            
        });

        function cuantasVecesseRepite (frase,buscador){
            
            var indices=[];
            for(var i=0;i<frase.length;i++){
                if(frase[i].toLowerCase()===buscador) indices.push(i);
            }
            return indices.length;
        }
    }
   
    
    
})

