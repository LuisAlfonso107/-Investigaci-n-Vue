<template>
    <div>
        <h2>Aplicación de Composition API (con 'setup' en la etiqueta script) - Vue 3</h2>
        <input type="text" placeholder="Mensaje" v-model="message">
        <h3>Cantidad de caracteres {{ numberOfChars }} </h3>
    </div>
</template>

<script setup>
    // Usando Composition API (con 'setup' en la etiqueta script) - Vue 3
    import { ref, computed } from 'vue'
    let message = ref('')
    const numberOfChars = computed(() => message.value.length)
</script>

<style scoped>

</style>