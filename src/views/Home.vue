<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>Reactive vs Ref</h1>
    <h3>{{arya}}</h3>
    <h3>{{sansa}}</h3>
    <button @click="changeArya">Cambiar Arya</button>
    <button @click="changeSansa">Cambiar Sansa</button>
    <h3>Arya: {{aryaIsAlive}}</h3>
    <h3>Sansa: {{sansaIsAlive}}</h3>
    <button @click="changeStatus">Cambiar Status</button>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'

export default {
  name: 'Home',
  setup() {
    const arya = ref({name: 'Arya Stark', age: 18})
    const sansa = reactive({name: 'Sansa Stark', age: 20})

    const aryaIsAlive = reactive(false)
    const sansaIsAlive = ref(true)

    const changeStatus = () => {
      sansaIsAlive.value = !sansaIsAlive.value
      aryaIsAlive = !aryaIsAlive
    }

    return {
      arya, 
      sansa,

      aryaIsAlive,
      sansaIsAlive,

      changeStatus,

      changeArya: () => {
        arya.value.name = 'Arya Stark "La exploradora de westeros"'
        arya.value.age = 20 
      },
      changeSansa: () => {
        sansa.name = 'Sansa Stark "La reina del norte"'
        sansa.age = 22
      }
    }
  }
}
</script>
