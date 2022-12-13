const FormulaName=document.getElementById('Formula_Name');
const Formula=document.getElementById('Formula');
const buttonSave=document.getElementById('SaveFormula');
const buttonDelete=document.getElementById('DeleteFormula');
//const Inputs=document.querySelectorAll('.InpN');

/*Formula.addEventListener('change', (event)=>{
    alert("Hola");
});*/
Formula.addEventListener('input', ()=>AddInputs(Formula.value));

/*Inputs.forEach(input=>{
    input.addEventListener('input', ()=>ejem())
});*/

$(document).on("input", ".InpN", ()=>Operation(Formula.value));

buttonSave.addEventListener('click', ()=>SaveFormula(FormulaName.value, Formula.value));

buttonDelete.addEventListener('click', ()=>DeleteFormula());

$('#FormulaList').change(function(){
    SelectFormula();
    AddInputs(Formula.value);
});
/*function ej(){
    alert(Formula.value);
}*/
/*$("#Formula").on("change",function(){
    // aqui va el codigo que requieres hacer cuando se genere algun cambio....
    alert("con jquery");
  });*/