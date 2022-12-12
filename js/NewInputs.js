function AddInputs(Formula){
    var cadena = "hello world!";
    var result = /^hello/.test(cadena);
    //alert(result);
    let ex=new RegExp('[a-z]')
    /*if(!ex.test(Formula)){
        alert(Formula);
    }*/
    let divInputs=document.getElementById("Inputs");
    divInputs.innerHTML="";
    Formula=Formula.toLowerCase();
    let rf=Formula.indexOf("=");
    rf=Formula.slice(0,rf+1);
    Formula=Formula.replaceAll(rf, "");
    for(i=0;i<Formula.length;i++){
        if(ex.test(Formula[i])){
            const leter=Formula[i];
            let input=document.createElement("input");
            var number_p=document.createElement("p");
            let divcol=document.createElement("div");
            number_p.textContent=leter.toUpperCase();
            input.type = "number";
            input.className = "InpN";
            input.id = leter;
            input.name = leter;
            input.onchange=function(){operacion();};
            divcol.className="col";
            divcol.id="columna";
            divcol.appendChild(number_p);
            divcol.appendChild(input);
            divInputs.appendChild(divcol);

        }
    }
}