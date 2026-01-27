<!-- src/views/InvestigacionReactividad.vue -->
<script setup lang="ts">
import { ref, reactive, toRefs, computed, watch, watchEffect, shallowRef } from 'vue'

// 1. Ejemplos de ref y reactive
const count = ref(0)
const user = reactive({ name: 'Luis', age: 25 })

// 2. toRefs para desestructurar sin perder reactividad
const { name, age } = toRefs(user)

// 3. shallowRef para optimización
const largeData = shallowRef({ bigArray: Array(10000).fill('data') })
const toggleShallow = () => {
  largeData.value = { ...largeData.value, extra: 'cambio no profundo' } // solo raíz se rastrea
}

// 4. Computed
const doubleCount = computed(() => count.value * 2)

// 5. Watch y watchEffect
watch(count, (newVal, oldVal) => {
  console.log(`Count cambió de ${oldVal} a ${newVal}`)
}, { immediate: true })

watchEffect(() => {
  console.log(`watchEffect: count es ahora ${count.value}, double es ${doubleCount.value}`)
})

// 6. Estado global simple con provide/inject (ejemplo en App.vue)
const globalTheme = inject('theme', ref('light')) // si lo provees en App.vue
</script>

<template>
  <div class="investigacion">
    <h1>Investigación: Reactividad y Estado en Vue 3</h1>
    
    <section>
      <h2>1. ref vs reactive</h2>
      <p>Contador con ref: {{ count }} → <button @click="count++">+1</button></p>
      <p>Usuario con reactive: {{ user.name }}, {{ user.age }} años</p>
      <button @click="user.age++">Envejecer</button>
    </section>

    <section>
      <h2>2. toRefs</h2>
      <p>Nombre desestructurado: {{ name }} (sigue reactivo)</p>
      <input v-model="name" />
    </section>

    <section>
      <h2>3. shallowRef (optimización)</h2>
      <p>Datos grandes (solo raíz reactivo): {{ largeData.bigArray.length }} items</p>
      <button @click="toggleShallow">Cambiar shallow</button>
    </section>

    <section>
      <h2>4. computed</h2>
      <p>Doble del contador: {{ doubleCount }}</p>
    </section>

    <section>
      <h2>5. watch y watchEffect</h2>
      <p>Revisa la consola del navegador para ver los logs</p>
    </section>

    <section>
      <h2>6. Estado global simple (provide/inject)</h2>
      <p>Tema global: {{ globalTheme }}</p>
    </section>

    <p class="conclusion">
      Conclusión de la investigación: Vue 3 ofrece un sistema de reactividad potente y eficiente. 
      Usa ref/reactive según el tipo de dato, computed para derivaciones, y watchers para efectos secundarios. 
      Para apps pequeñas, provide/inject basta para estado global.
    </p>
  </div>
</template>

<style scoped>
.investigacion { max-width: 800px; margin: 0 auto; padding: 2rem; }
section { margin: 2rem 0; border-bottom: 1px solid #ccc; padding-bottom: 1rem; }
.conclusion { font-style: italic; font-weight: bold; color: #2c3e50; }
</style>