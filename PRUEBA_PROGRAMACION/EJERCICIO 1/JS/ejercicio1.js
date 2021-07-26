'use strict'
window.addEventListener('load',function(){
    
    
    var array=this.document.querySelector("#array");
    const Parbalanceado=function(par){
        const stack=[];
        for(let single of par){
            if(single=='('){
                stack.push(single);
            }
            if(single==')'){
                if(stack.length==0){
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length===0;
    }
    var resultado=this.prompt("Ingrese el dato a validar",'()');
    let validcion=Parbalanceado(resultado);
    if(validcion==false){
        array.innerHTML="Par ingresado incorrecto";
    }else{
        array.innerHTML="Par ingresado correcto";
    }
   
}
)
