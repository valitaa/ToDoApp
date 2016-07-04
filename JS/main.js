var boton, lista, tarea, item, check, trash;
boton = document.getElementById("ADD");
console.log('holaaa');
boton.addEventListener("click",function(){
	tarea = document.getElementById("evento");
	lista = document.createElement("li");
	parrafo = document.createElement("p");
	var textarea = document.getElementById("texto");
	item = document.getElementById("texto").value;

	if (item.length > 0) {
		var t = document.createTextNode(item);
		textarea.value = "";
		check = document.createElement("input");
		check.setAttribute("class", "option");
		check.setAttribute("type", "checkbox");
		check.setAttribute("onclick","borrar(this)");
		lista.appendChild(check);
		lista.appendChild(parrafo);
		parrafo.setAttribute("class","parra");
		parrafo.appendChild(t);
		tarea.appendChild(lista);	
	}

	else{
		alert("Tiene que ingresar una tarea");
	}
})
function borrar(element){
	p = element.parentNode.getElementsByClassName('parra')[0]
	console.log(p);
	if(element.checked == true){
		var strike = p.innerText.strike("");
		p.innerText = "";
		p.innerHTML = strike;
	}
	else{
		check.innerText.remove("");
	}
}