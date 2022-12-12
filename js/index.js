const Formula=document.getElementById("Formula");

/*Formula.addEventListener('change', (event)=>{
    alert("Hola");
});*/
Formula.addEventListener('input', ()=>AddInputs(Formula.value));
/*function ej(){
    alert(Formula.value);
}*/
/*$("#Formula").on("change",function(){
    // aqui va el codigo que requieres hacer cuando se genere algun cambio....
    alert("con jquery");
  });*/