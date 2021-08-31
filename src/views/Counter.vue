<template>
  <h1>Vista del Contador</h1>
  <h2>{{contador}}</h2>
  <button @click="incrementar">+1</button>
  <button @click="decrementar">-1</button>
</template>

<script>
// import {ref} from 'vue'
import useCounter from '@/composables/useCounter'

export default {
    name: 'Counter',
    props: {},
    emits: [],
    setup() {
        const {contador, decrementar, incrementar} = useCounter(100)
        return {
            contador, 
            
            decrementar, 
            incrementar
        }
    }
}
</script>

<style>

</style>