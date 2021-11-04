<template>
  <h1>Aprediendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>
  <modal
          v-if="isOpen" 
          title="Hola Mundo"
          
          @on:close="closeModal"
  >
      
      <!-- <h2>Titulo del Modal</h2>
      <p>Esto es un modal de prueba</p>
      <button>Salir</button> -->

      <template v-slot:body>
        <p>Esto es un modal de prueba</p>
      </template>

      <template v-slot:footer>
        <button @click="closeModal">Salir</button>
      </template>

      <template v-slot:header>
        <h2>Titulo del Modal</h2>
      </template>

      <template v-slot:exposed={nuevoTitulo}>
        <h2>{{nuevoTitulo}}</h2>
      </template>

  </modal>
</template>

<script>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';

export default {
    components: {Modal},
    setup() {

      const isOpen = ref(false)

      return {
        isOpen,
        openModal: () => isOpen.value = true,
        closeModal: () => isOpen.value = false
      }

    }
}
</script>

<style scoped>

</style>