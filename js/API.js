const url = 'http://localhost:4000/clientes';

// Cuando se crea un nuevo cliente
export const nuevoCliente = async (cliente) =>{

    try{
          // Generar un ID entero basado en el timestamp
          cliente.id = Date.now(); // Esto genera un número entero único

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(cliente),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    window.location.href = 'index.html';
    }catch{
        console.log(error);
    }
}

// Obtiene todos los clientes
export const obtenerClientes = async () => {
    try{
     const resultado = await fetch(url);
     const clientes = await resultado.json();


     return clientes;
    } catch (error){
        console.log(error);
    }
}
// Elimina un Cliente..
export const eliminarCliente = async id => {
    console.log('eliminar', typeof id)// STRING
    try{
        await fetch(`${url}/${encodeURIComponent(id)}`,{
         method: 'DELETE',
        });


     }catch(error){
     console.log(error);
     }
}




// Obtiene un cliente por su ID
export const obtenerCliente = async id =>{
    try {
         const resultado = await fetch(`${url}/${id}`)
         const cliente = await resultado.json();
         return cliente;
        // await fetch(`${url}/${id}`,{
        //     method: 'UPDATE'
        //    })

    }catch(error){
        console.log(error);
    }
}

// Actualiza un registro
export const editarCliente = async cliente =>{
     console.log('cliente'. cliente)
    try{
        await fetch(`${url}/${encodeURIComponent(cliente.id)}`,{
        method: 'PUT',
        body: JSON.stringify(cliente),
        headers:{
            'Content-Type': 'application/json'
        }
      });
      window.location.href = 'index.html';
    }catch(error){
        console.log(error);
    }
}