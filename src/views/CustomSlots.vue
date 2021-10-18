<template>
  <h1>Aprediendo Slots</h1>
  <button>Abrir Modal</button>
  <modal title="Hola Mundo">
      <!-- <h2>Titulo del Modal</h2>
      <p>Esto es un modal de prueba</p>
      <button>Salir</button> -->
  </modal>
</template>

<script>
import Modal from '../components/Modal.vue';

export default {
    components: {Modal},
    setup() {
        
    }
}
</script>

<style scoped>

</style>