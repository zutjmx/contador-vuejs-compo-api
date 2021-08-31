import {ref} from 'vue'

const useCounter = (valorInicial = 5) => {
    const contador = ref(valorInicial)

    return {
        contador,
        
        decrementar: () => contador.value--,
        incrementar: () => contador.value++,
    }
}

export default useCounter
