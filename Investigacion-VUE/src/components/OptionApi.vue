<template>
    <div>
        <h2>Aplicación de Option API - Vue 2</h2>
        <input type="text" placeholder="Mensaje" v-model="message">
        <h3>Cantidad de caracteres {{ numberOfChars }} </h3>
    </div>
</template>

<script>
    // Usando Option API - Vue 2

    export default {
        name: 'OptionApi',

        data() {
            return {
                message: ''
            }
        },

        computed: {
            numberOfChars() {
                return this.message.length
            }
        }
    }

</script>

<style scoped>

</style>