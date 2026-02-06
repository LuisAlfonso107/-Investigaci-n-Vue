<template>
    <div>
        <h2>Aplicación de Composition API - Vue 3</h2>
        <input type="text" placeholder="Mensaje" v-model="message">
        <h3>Cantidad de caracteres {{ numberOfChars }} </h3>
    </div>
</template>

<script>
    // Usando Composition API - Vue 3
    import { ref, computed } from 'vue'

    export default {
        name: 'CompositonApiOpcionUno',

        setup() {
            let message = ref('')
            const numberOfChars = computed(() => message.value.length)
            return { message, numberOfChars }
        }
    }
</script>

<style scoped>

</style>