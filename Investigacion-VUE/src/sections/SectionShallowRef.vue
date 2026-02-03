<!-- src/sections/SectionShallowRef.vue -->
<script setup lang="ts">
import { shallowRef } from 'vue'

const apiLargeData = shallowRef<{ items: string[]; total: number } | null>(null)

const loadLargeData = () => {
  apiLargeData.value = {
    items: Array(5000).fill('').map((_, i) => `Registro #${i + 1}`),
    total: 12500
  }
}
</script>

<template>
  <section class="mb-12 border-b pb-8">
    <h2 class="text-2xl font-semibold mb-4">2. shallowRef y optimización</h2>
    <p class="mb-4">
      Solo rastrea cambios en la referencia raíz → ideal para datos grandes de API que reemplazamos enteros.
    </p>

    <button @click="loadLargeData" class="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 mb-4">
      Cargar datos simulados (5000 items)
    </button>

    <div v-if="apiLargeData" class="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
      <p>Items cargados: <strong>{{ apiLargeData.items.length }}</strong></p>
      <p>Total en base: <strong>{{ apiLargeData.total }}</strong></p>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Cambios internos en items[] NO disparan actualización (por shallow)
      </p>
    </div>

    <p v-else class="text-gray-500">Pulsa el botón para cargar...</p>
  </section>
</template>

<style scoped>
/* Estilos locales si los necesitas */
</style>