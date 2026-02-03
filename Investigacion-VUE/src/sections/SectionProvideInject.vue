<!-- src/sections/SectionProvideInject.vue -->
<script setup lang="ts">
import { inject } from 'vue'
import ThemePreview from '../components/ui/ThemePreview.vue'

const props = defineProps<{
  toggle: () => void
}>()

const theme = inject<'light' | 'dark'>('theme')
</script>

<template>
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">4. Estado global simple (provide / inject)</h2>
    <p class="mb-4">
      Sin Pinia/Vuex → ideal para temas, usuario logueado, idioma, etc. en apps medianas.
    </p>

    <div class="flex items-center gap-6">
      <button @click="props.toggle" class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
        Cambiar a modo {{ theme === 'light' ? 'oscuro' : 'claro' }}
      </button>

      <ThemePreview :theme="theme || 'light'" />
    </div>
  </section>
</template>

<style scoped>
/* Estilos locales para esta sección si es necesario */
</style>