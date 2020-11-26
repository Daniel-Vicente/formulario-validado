
function alerta(){


var form  = document.getElementById('form');




let name= document.getElementById("nombre").value;
let old= document.getElementById("old").value;
let email= document.getElementById("email").value;

//funcion para mantener los valores en los inputs...*************
const content=(event)=> event.preventDefault()

if(name==="" || /[0-9]+/.test(name)){
	alert("Ingrese un nombre valido");
}else{
	if(old===""){
  		alert("Ingrese una edad valida");
  	}else{
  		if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  		{
  			alert("OK");
  		}else{
  			alert("Ingrese un Email valido");
  		}
  		
  	}	
}
}

input.addEventListener('invalid', function(event){
    event.preventDefault();
    if ( ! event.target.validity.valid ) {
        elem.textContent   = 'Username should only contain lowercase letters e.g. john';
        elem.className     = 'error';
        elem.style.display = 'block';
 
        input.className    = 'invalid animated shake';
    }
});



