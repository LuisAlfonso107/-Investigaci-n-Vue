<!-- src/sections/SectionComputedWatch.vue -->
<script setup lang="ts">
import { useCartCalculations } from '@/composables/useCartCalculations'

const { counter, price, subtotal, finalPrice } = useCartCalculations()
</script>

<template>
  <section class="mb-12 border-b pb-8">
    <h2 class="text-2xl font-semibold mb-4">3. computed, watch y watchEffect</h2>
    <p class="mb-4">
      <strong>computed</strong>: valores derivados cacheados.<br>
      <strong>watch</strong>: observa valores específicos.<br>
      <strong>watchEffect</strong>: efecto automático con dependencias implícitas.
    </p>

    <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <h3 class="text-lg font-medium mb-4">Carrito de compra</h3>
      <div class="flex flex-col sm:flex-row gap-4 mb-4">
        <label>Cantidad: <input v-model.number="counter" type="number" min="1" class="border p-2 rounded w-24" /></label>
        <label>Precio unitario: € <input v-model.number="price" type="number" min="0" class="border p-2 rounded w-32" /></label>
      </div>
      <p class="text-lg">Subtotal: <strong>€ {{ subtotal.toFixed(2) }}</strong></p>
      <p class="text-xl font-bold text-green-700 dark:text-green-400">
        Total con descuento: € {{ finalPrice.toFixed(2) }}
      </p>
      <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Revisa la consola: watch y watchEffect se disparan automáticamente.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Estilos específicos del carrito si los quieres personalizar */
.text-green-700 { color: #15803d; }
.dark .text-green-700 { color: #86efac; }
</style>