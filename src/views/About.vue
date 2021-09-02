<template>
  <div class="about">
    <h1>{{titulo}}</h1>
    <button @click="cambiarTitulo">Cambiar Titulo</button>
  </div>
</template>

<script>
import {onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted,
        onErrorCaptured,
        onRenderTracked,
        onRenderTriggered,
        onActivated,
        onDeactivated,
        ref} from 'vue'

export default {

  setup() {

    const titulo = ref('About Page')

    console.log('::Setup se llamó::')

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })

    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    })

    onRenderTracked(() => {
      console.log('onRenderTracked')
    })

    onRenderTriggered(() => {
      console.log('onRenderTriggered')
    })

    onActivated(() => {
      console.log('onActivated')
    })

    onDeactivated(() => {
      console.log('onDeactivated')
    })

    return {
      titulo,
      cambiarTitulo: () => titulo.value = 'Nuevo About Page'
    }

  }
}
</script>