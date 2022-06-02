const btnPrompt = document.getElementById('btn-prompt');
const btnFor = document.getElementById('btn-for');
const ul = document.getElementById('lista');
const div = document.getElementById('lista-container');
let valores = [];

btnPrompt.addEventListener('click',() =>{
    Swal.fire({
        title: 'Ingresa la tarea que desees Agregar',
        html: `<input type="text" id="mensaje" class="swal2-input" placeholder="Tarea" max-length="50">`,
        confirmButtonText: 'Agregar',
        confirmButtonColor:'#e94f37',
        background:'#fff9f2',
        focusConfirm: false,
      }).then(() => {
        const mensaje = document.getElementById('mensaje').value;
          if(mensaje !== '' && mensaje !== null && mensaje !== undefined){
            valores.push(mensaje);
            Swal.fire({
                icon: 'success',
                title: '¡Tarea Agregada!',
                text: 'Has agregado una tarea exitosamente',
                confirmButtonColor:'#e94f37',
                background:'#fff9f2',
              });
          }else{
            Swal.fire({
                icon: 'error',
                title: '¡No veo ninguna tarea!',
                text: 'No has ingresado ninguna tarea',
                showConfirmButton: false,
                timer: 2000,
                background:'#fff9f2',
              });
          }
      })

});

btnFor.addEventListener('click',() =>{
    console.log(valores);
    if(valores.length === 0){
        Swal.fire({
            icon: 'error',
            title: 'No ha ingresado nuevas tareas',
            text: 'Ingrese tareas nuevas por favor',
            confirmButtonText: 'Entendido',
            confirmButtonColor:'#e94f37',
            background:'#fff9f2',
          });
    }else{
        for(let valor of valores){
            const li = document.createElement('li');
            li.textContent = valor;
            li.className = "list-group-item"
            li.appendChild(addDeleteBtn());
            ul.appendChild(li);
            
        } 
    }
    valores.splice(0,valores.length);
});
function addDeleteBtn(){
    const eliminar = document.createElement('button');
    eliminar.textContent = "X";
    eliminar.className = "btn btn-danger btnDelete";

    eliminar.addEventListener('click',(e) => {
        //Aquí agarramos el elemento de arriba, en este caso el li;
            const item = e.target.parentElement;
            ul.removeChild(item);

    });
    return eliminar;
}