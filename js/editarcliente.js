import {obtenerCliente, editarCliente} from './API.js'; 
import {mostrarAlerta, validar} from './funciones.js'

//Campos del formulario
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const empresaInput = document.querySelector('#empresa');
const telefonoInput = document.querySelector('#telefono');
const idInput = document.querySelector('#id');



(function(){
document.addEventListener('DOMContentLoaded',async() => {
    const parametrosURL = new URLSearchParams(window.location.search);
    const idCliente = parseInt(parametrosURL.get('id'));
    
    const cliente = await obtenerCliente(idCliente);
    mostrarCliente(cliente);

    //Submit al formulario
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

});

function mostrarCliente(cliente){
    const {nombre, empresa, email, telefono, id} = cliente; 

    nombreInput.value = nombre;
    empresaInput.value = empresa;
    emailInput.value = email; 
    telefonoInput.value = telefono;   
    idInput.value = id; 
}
   function validarCliente(e){
    e.preventDefault();
    
    const cliente = {
        nombre: nombreInput.value,
        email: empresaInput.value,
        telefono: emailInput.value,
        empresa: telefonoInput.value,
        id: parseInt(idInput.value)
      }
    

    if(validar(cliente)){
   //mostrar mensaje
   mostrarAlerta('Todos los campos son obligatorios');
   return; 
    }

    //Reecribe el objeto
    editarCliente(cliente);
    
   }

})();