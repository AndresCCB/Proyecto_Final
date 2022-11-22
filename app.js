import {saveNeumatico, getNeumatico, on_get_Neumatico,  
    deleteNeumatico, updateNeumatico} from "./firebase.js"


const NeumaticosContainer = document.getElementById('neumaticos-container')
const NeumaticoForm = document.getElementById('Neumatico-formulario')

let editStatusNeumatico = false;

let idNeumatico = ''

window.addEventListener('DOMContentLoaded', async () => {
    
    // Mostrar Neumaticos
    on_get_Neumatico((Neumaticos)=>{
        let html = '';
        
        Neumaticos.forEach(doc => {
        const neumatico = doc.data()
        html += `<h4>Neumatico</h4>
            <div class ="crud-header">
                <h5>ID : ${neumatico.id_neumatico}</h5>
                <p>Tipo: ${neumatico.Tipo_neumatico}</p>
                <p>Gama: ${neumatico.Gama_neumatico}</p>
                <p>Especificaciones: ${neumatico.Especificaciones}</p>
                <p>Precio: ${neumatico.Precio}</p>
                <p>Cantidad Disponible: ${neumatico.Cantidad_inventario}</p>                
                <div>
                    <button class="button is-danger" data-id="${doc.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="button is-warning" data-id="${doc.id}" >
                        <i class="fas fa-pencil"></i>
                    </button>
                </div>
            </div>
        `
        })

        NeumaticosContainer.innerHTML = html
        const btndeleteNeumatico = NeumaticosContainer.querySelectorAll('.button.is-danger')

        //Borrar Neumatico
        btndeleteNeumatico.forEach(btn => {
            btn.addEventListener('click', ({target: {dataset }}) => {
                deleteNeumatico(dataset.id)
            })
        })

        const btneditNeumatico = NeumaticosContainer.querySelectorAll('.button.is-warning')

        // Editar Neumatico
        btneditNeumatico.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const doc = await getNeumatico(e.target.dataset.id)
                const neumatico = doc.data()

                NeumaticoForm['id-neumatico'].value = neumatico.id_neumatico
                NeumaticoForm['tipo-neumatico'].value = neumatico.Tipo_neumatico
                NeumaticoForm['gama-neumatico'].value = neumatico.Gama_neumatico
                NeumaticoForm['especificaciones'].value = neumatico.Especificaciones
                NeumaticoForm['precio'].value = neumatico.Precio
                NeumaticoForm['cantidad-invent'].value = neumatico.Cantidad_inventario

                editStatusNeumatico = true
                idNeumatico = doc.id
                NeumaticoForm['btn-guardar-neumatico'].innerText = 'Actualizar'
            })
        })
    })
})

//GUARDAR NEUMATICO
NeumaticoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const id_neumatico = NeumaticoForm['id-neumatico']
    const Tipo_neumatico = NeumaticoForm['tipo-neumatico']
    const Gama_neumatico = NeumaticoForm['gama-neumatico']
    const Especificaciones = NeumaticoForm['especificaciones']
    const Precio = NeumaticoForm['precio']
    const Cantidad_inventario = NeumaticoForm['cantidad-invent']

    if (!editStatusNeumatico) {
        saveNeumatico(parseInt(id_neumatico.value), Tipo_neumatico.value, Gama_neumatico.value, Especificaciones.value, Precio.value, Cantidad_inventario.value)
    } else {
        updateNeumatico(idNeumatico, {id_neumatico: parseInt(id_neumatico.value), Tipo_neumatico : Tipo_neumatico.value,
                                        Gama_neumatico: Gama_neumatico.value, Especificaciones: Especificaciones.value,
                                        Precio: Precio.value, Cantidad_inventario: Cantidad_inventario.value})
        editStatusNeumatico = false
        NeumaticoForm['btn-guardar-neumatico'].innerText = 'Guardar Neumatico'
    }

    NeumaticoForm.reset()
})