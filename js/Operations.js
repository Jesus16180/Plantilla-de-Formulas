function Operation(Formula){
    let numbers=[];
    let ids=[];
    $("#Inputs > div > input[type=\"number\"]").each(function(){
        var para=document.getElementById($(this).attr('id')).value;
      if(para!="")
      {
      numbers.push(para);
      ids.push($(this).attr('id'));
      }
    });
    Formula=Formula.toLowerCase();
    let rf=Formula.indexOf("=");
    rf=Formula.slice(0,rf+1);
    Formula=Formula.replaceAll(rf, "");
    formula_Resolved=Formula;
    for(i=0;i<numbers.length;i++)
    {
        formula_Resolved=formula_Resolved.replaceAll(ids[i],numbers[i]);
    }
    let Result=eval(formula_Resolved);
    let divResult=document.getElementById("Result");
    let labelResult=document.createElement("label");
    divResult.innerHTML="";
    labelResult.textContent=rf+""+Result;
    divResult.appendChild(labelResult);
    if(isNaN(Result)){
        divResult.innerHTML="";
    }
}