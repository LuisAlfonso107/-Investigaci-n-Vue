<!-- src/views/InvestigacionReactividad.vue -->
<script setup lang="ts">
import { provide, ref } from 'vue'

// Importamos las secciones
import SectionComputedWatch from '@/sections/SectionComputedWatch.vue'
import SectionProvideInject from '@/sections/SectionProvideInject.vue'
import SectionRefReactiveToRefs from '@/sections/SectionRefReactiveToRefs.vue'
import SectionShallowRef from '@/sections/SectionShallowRef.vue'

// Tema global
const globalTheme = ref<'light' | 'dark'>('light')
provide('theme', globalTheme)

const toggleTheme = () => {
  globalTheme.value = globalTheme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div :class="['investigacion p-6 max-w-5xl mx-auto', globalTheme]">
    <h1 class="text-3xl font-bold mb-8 text-center">
      Investigación: Reactividad y Estado en Vue 3
    </h1>

    <SectionRefReactiveToRefs />
    <SectionShallowRef />
    <SectionComputedWatch />
    <SectionProvideInject :toggle="toggleTheme" />

    <footer class="text-center mt-12 pt-8 border-t">
      <p class="text-lg font-medium">
        Conclusión: Vue 3 ofrece reactividad automática y flexible...
      </p>
    </footer>
  </div>
</template>

<style scoped>
.investigacion {
  background: #ffffff;
  color: #0f172a;
  min-height: 100vh;
}

.dark .investigacion {
  background: #0f172a;
  color: #f1f5f9;
}

h1 {
  font-size: 2.8rem;
}
</style>
