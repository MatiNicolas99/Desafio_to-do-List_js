//Selectores
const btnAgregar = document.getElementById('boton-agregar');
const inputTarea = document.getElementById('input-tarea');
const listadoTareas = document.getElementById('listado-tareas');
const total = document.getElementById('total');
const realizadas = document.getElementById('realizadas');
let contadorRealizadas = 0
const tareas = [{id: Math.floor(Math.random() * (1000-1+1) + 1), nombre: "Cocinar", completado:false},
               {id: Math.floor(Math.random() * (1000-1+1) + 1), nombre: "Correr", completado:false},
               {id: Math.floor(Math.random() * (1000-1+1) + 1), nombre: "Meditar", completado:false}];

// Función que renderiza las tareas iniciales y también las nuevas tareas
const renderizadoTareas = () => {
    let html = "";

    for (let tarea of tareas) {
        inputTarea.value = "";

        html += `<div class="todo">
                    <span>ID: </span>
                    <p>${tarea.id}</p>
                    <li class="todo-item">${tarea.nombre}</li>
                    <button id="${tarea.id}" class="check-btn" onclick="check(${tarea.id})">
                        <i class="fas fa-check" aria-hidden="true"></i>
                    </button>
                    <button class="trash-btn" onclick="borrar(${tarea.id})">
                        <i class="fas fa-trash" aria-hidden="true"></i>
                    </button>
                    </div>`;
    }
    listadoTareas.innerHTML = html;
    total.innerHTML = `${tareas.length}`;
};

//Botón para agregar nuevas tareas al TO DO LIST
btnAgregar.addEventListener('click', () => { 
    const nuevaTarea = {id: Math.floor(Math.random() * (1000-1+1) + 1), nombre: inputTarea.value, completado: false};
    tareas.push(nuevaTarea);

    if (inputTarea.value === "") {
        alert("Favor Ingresar valor");
        tareas.pop();
    }else {
        renderizadoTareas();
    }
});

// Función que borra elementos 
const borrar = (id) => {
    const index = tareas.findIndex((ele) => ele.id === id);
    tareas.splice(index, 1);
    renderizadoTareas();
};

//Función que para chequear tareas finalizadas
const check = (id) => {
    const btn_check = document.getElementById(id);
    const indice = tareas.findIndex((e) => e.id === id)
    if (tareas[indice].completado === false) {
        tareas[indice].completado = true;
        btn_check.style.background = "rgb(98, 173, 68)"
        contadorRealizadas+=1;
    }else {
        tareas[indice].completado = false;
        btn_check.style.background = "rgba(68, 100, 173, 1)"
        contadorRealizadas-=1;
    }
    realizadas.innerHTML = `${contadorRealizadas}`;
};

//Funcion que carga los primeros tres elementos del arreglo
window.onload = () => {
    renderizadoTareas();
};


 
