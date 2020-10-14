<script>
    import Tarea from './Tarea.svelte'
    export var coleccion;

    var tareas = [];

    var descripcionNuevaTarea = '';

    coleccion.orderBy('fecha','desc')
        .onSnapshot(
            querySnapshot => {
                tareas = [];
                querySnapshot.forEach(
                    queryDocSnapshot => {
                        tareas = [...tareas, queryDocSnapshot];
                    }
                )
                console.log('Tareas actualizadas desde Firestore!');
            }
        );
    
    function nuevaTarea() {
        var doc = {
            descripcion: descripcionNuevaTarea,
            fecha: Date.now(),
        }
        coleccion.add(doc);
        descripcionNuevaTarea = '';
    }

</script>

<div class="tareas">

    {#each tareas as tarea (tarea.id)}
    <Tarea tareaSnapshot={tarea}/>
    {/each}

    <input bind:value={descripcionNuevaTarea} placeholder="Nueva tarea...">
    <button on:click={nuevaTarea}>+</button>

</div>


