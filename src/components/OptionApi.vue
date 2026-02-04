<template>
  <div class="option-api">
    <h2>Aplicación de Option API - Vue 2</h2>
    <input type="text" placeholder="Mensaje" v-model="message">
    <h3>Cantidad de caracteres {{ numberOfChars }}</h3>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const message = ref('')

const numberOfChars = computed(() => message.value.length)
</script>

<style scoped>
.option-api {
  text-align: center;
  padding: 2rem;
}

.option-api h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #667eea;
}

.option-api input {
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  width: 300px;
  max-width: 100%;
  transition: all 0.3s ease;
}

.option-api input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.option-api h3 {
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #64748b;
}
</style>