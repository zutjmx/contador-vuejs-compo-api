<template>
  <h1>Búscar Pokemóm: {{pokemonId}}</h1>
  <form @submit.prevent="onSubmit">
      <input 
        type="number" 
        placeholder="Número del pokemón" 
        ref="txtSearchId"
        v-model="pokemonId"
      >
  </form>
  <br>
  <span>Presione Enter para buscar...</span>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {
        
        const router = useRouter()
        
        const pokemonId = ref(1)
        const txtSearchId = ref()

        onActivated(() => {
            txtSearchId.value.select()
        })

        return {
            pokemonId,
            txtSearchId,
            onSubmit: () => {
                console.log('Pokemon a buscar', pokemonId.value)
                router.push({name: 'pokemon-id', params: {id: pokemonId.value}})
            }
        }
    }
}
</script>
