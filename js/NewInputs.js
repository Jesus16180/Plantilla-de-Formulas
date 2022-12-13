function AddInputs(Formula){
    let divInputs=document.getElementById("Inputs");
    let LettersExp=new RegExp('[a-z]');
    divInputs.innerHTML="";
    Formula=Formula.toLowerCase();
    let rf=Formula.indexOf("=");
    rf=Formula.slice(0,rf+1);
    Formula=Formula.replaceAll(rf, "");
    for(i=0;i<Formula.length;i++){
        if(LettersExp.test(Formula[i])){
            const letter=Formula[i];
            let input=document.createElement("input");
            let number_p=document.createElement("p");
            let divcol=document.createElement("div");
            number_p.textContent=letter.toUpperCase();
            input.type = "number";
            input.className = "InpN";
            input.id = letter;
            input.name = letter;
            divcol.className="col";
            divcol.id="columna";
            divcol.appendChild(number_p);
            divcol.appendChild(input);
            divInputs.appendChild(divcol);
        }
    }
    let divResult=document.getElementById("Result");
    divResult.innerHTML="";
}

function SaveFormula(Formula_Name, Formula){
    let SelectFormulas=document.getElementById('FormulaList');
    let option=document.createElement('option');
    option.id="";
    option.value=Formula_Name+'|'+Formula;
    option.text=Formula_Name+" "+Formula;
    SelectFormulas.appendChild(option);
}

function SelectFormula(){
    let SelectFormulas=document.getElementById("FormulaList");
    formulasComp=$("#FormulaList option:selected").val();
    formulasComp=formulasComp.split('|');
    $("#Formula_Name").val(formulasComp[0]);
    $("#Formula").val(formulasComp[1]);
}

function DeleteFormula(){
    $("#FormulaList option:selected").remove();
}

function CleanInputFormula(){

}
function CleanInputs(){

}