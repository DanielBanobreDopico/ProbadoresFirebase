<script>
    export var tareaSnapshot;

    var tarea = tareaSnapshot.data();

    var timer;

    tareaSnapshot.ref.onSnapshot(
        documentSnapshot => {
            tarea = documentSnapshot.data();
        }
    )

    async function startTimer () {
        if ( timer ) clearTimeout(timer);
        timer = setTimeout(updateDocument,1000);
    }

    async function updateDocument () {
        tarea.fecha = Date.now();
        tareaSnapshot.ref.update(tarea);
        console.log("Tarea actualizada.")
    }

    async function removeDocument () {
        tareaSnapshot.ref.delete();
        console.log('Tarea eliminada.')
    }

</script>

<div class="tarea">
    <p class="fecha">Fecha: {Date(tarea.fecha)}</p>
    <input class="descripcion" type='text' bind:value={tarea.descripcion} on:input={startTimer}>
    <button on:click={removeDocument}>x</button>
</div>

<style>
    div.tarea {
        border-style: solid;
        padding: 5px;
        margin: 10px;
    }
    p.fecha {
        font-size: xx-small;
        padding: 5px;
    }
    input.descripcion {
        border-style: none;
    }
    div.tarea > button {
        float: right;
    }
</style>