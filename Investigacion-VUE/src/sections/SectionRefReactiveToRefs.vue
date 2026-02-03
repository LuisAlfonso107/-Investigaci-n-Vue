<!-- src/sections/SectionRefReactiveToRefs.vue -->
<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'

// ── 1. ref + reactive + toRefs ──
const counter = ref(0)
const product = reactive({
  name: 'Monitor 27"',
  price: 249,
  stock: 15,
  discount: 0.10
})
const { name, price, discount } = toRefs(product)
</script>

<template>
  <section class="mb-12 border-b pb-8">
    <h2 class="text-2xl font-semibold mb-4">1. ref, reactive y toRefs</h2>
    <p class="mb-4">
      <strong>ref</strong> → valores primitivos. <strong>reactive</strong> → objetos completos (Proxy).<br>
      <strong>toRefs</strong> → desestructura reactive sin perder reactividad (ideal para v-model).
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
        <h3 class="text-lg font-medium mb-3">Contador simple (ref)</h3>
        <p class="text-xl mb-3">Valor: <strong>{{ counter }}</strong></p>
        <button @click="counter++" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          +1
        </button>
      </div>

      <div class="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
        <h3 class="text-lg font-medium mb-3">Producto editable (reactive + toRefs)</h3>
        <p>Nombre: <input v-model="name" class="border p-1 rounded" /></p>
        <p>Precio: € <input v-model.number="price" type="number" class="border p-1 rounded w-24" /></p>
        <p>Descuento: <input v-model.number="discount" type="number" step="0.05" min="0" max="1" class="border p-1 rounded w-20" />
          ({{ (discount * 100).toFixed(0) }}%)
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilos específicos de esta sección si necesitas diferenciarlos */
/* Por ahora hereda los globales de InvestigacionReactividad */
</style>