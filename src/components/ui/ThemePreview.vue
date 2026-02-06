<!-- src/components/ui/ThemePreview.vue -->
<script setup lang="ts">
defineProps<{
  theme: 'light' | 'dark'
}>()
</script>

<template>
  <div :class="[
    'p-6 rounded-lg shadow-lg',
    theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
  ]">
    <h3 class="text-xl mb-2">Vista previa del tema</h3>
    <p>Modo actual: <strong>{{ theme }}</strong></p>
    <p class="mt-2">Este panel inyecta el tema desde App.vue</p>
  </div>
</template>