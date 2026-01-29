<!-- src/views/InvestigacionReactividad.vue -->
<script setup lang="ts">
import { ref, reactive, toRefs, computed, watch, watchEffect, shallowRef, provide, inject } from 'vue'

// ── Tema global (ejemplo provide/inject) ──
const globalTheme = ref<'light' | 'dark'>('light')
provide('theme', globalTheme)

// ── 1. ref + reactive + toRefs ──
const counter = ref(0)
const product = reactive({
  name: 'Monitor 27"',
  price: 249,
  stock: 15,
  discount: 0.10
})
const { name, price, discount } = toRefs(product)

// ── 2. shallowRef ──
const apiLargeData = shallowRef<{ items: string[]; total: number } | null>(null)
const loadLargeData = () => {
  apiLargeData.value = {
    items: Array(5000).fill('').map((_, i) => `Registro #${i + 1}`),
    total: 12500
  }
}

// ── 3. Computed + Watch ──
const subtotal = computed(() => price.value * counter.value)
const finalPrice = computed(() => {
  const afterDiscount = subtotal.value * (1 - discount.value)
  return Math.round(afterDiscount * 100) / 100
})

watch([counter, price, discount], ([newCount, newPrice, newDisc]) => {
  console.log(`Carrito actualizado → Cant: ${newCount}, Precio: €${newPrice}, Desc: ${(newDisc * 100).toFixed(0)}%`)
}, { immediate: true })

watchEffect(() => {
  if (finalPrice.value > 500) {
    console.warn('¡Compra grande detectada! Total:', finalPrice.value)
  }
})

// ── 4. Tema toggle ──
const toggleTheme = () => {
  globalTheme.value = globalTheme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div :class="['investigacion p-6 max-w-5xl mx-auto', globalTheme]">
    <h1 class="text-3xl font-bold mb-8 text-center">
      Investigación: Reactividad y Estado en Vue 3
    </h1>

    <!-- Sección 1: ref vs reactive + toRefs -->
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

    <!-- Sección 2: shallowRef -->
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

    <!-- Sección 3: computed + watch -->
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

    <!-- Sección 4: provide/inject -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">4. Estado global simple (provide / inject)</h2>
      <p class="mb-4">
        Sin Pinia/Vuex → ideal para temas, usuario logueado, idioma, etc. en apps medianas.
      </p>

      <div class="flex items-center gap-6">
        <button @click="toggleTheme" class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Cambiar a modo {{ globalTheme === 'light' ? 'oscuro' : 'claro' }}
        </button>

        <div :class="['p-6 rounded-lg shadow-lg', globalTheme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white']">
          <h3 class="text-xl mb-2">Vista previa del tema</h3>
          <p>Modo actual: <strong>{{ globalTheme }}</strong></p>
          <p class="mt-2">Este panel inyecta el tema desde App.vue</p>
        </div>
      </div>
    </section>

    <footer class="text-center mt-12 pt-8 border-t">
      <p class="text-lg font-medium">
        Conclusión: Vue 3 ofrece reactividad automática y flexible. Elige ref/reactive según el caso, usa computed para derivaciones, watchers para efectos, y provide/inject para estado contextual simple.
      </p>
    </footer>
  </div>
</template>

<style scoped>
.investigacion {
  background: #ffffff;
  color: #0f172a;
  min-height: 100vh;
  padding: 2.5rem 1.25rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.65;
  font-size: 1.05rem;
}

/* Modo oscuro */
.dark .investigacion {
  background: #0f172a;
  color: #f1f5f9;
}

/* Contenedor principal */
.investigacion {
  max-width: 980px;
  margin: 0 auto;
}

/* Títulos */
h1 {
  font-size: 2.8rem;
  font-weight: 800;
  color: #3b82f6;
  text-align: center;
  margin: 0 0 3rem;
  letter-spacing: -0.04em;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 3.5rem 0 1.5rem;
  padding-left: 1.2rem;
  border-left: 6px solid #3b82f6;
}

.dark h2 {
  color: #e2e8f0;
  border-left-color: #60a5fa;
}

h3 {
  font-size: 1.5rem;
  font-weight: 650;
  margin: 2rem 0 1rem;
  color: #334155;
}

.dark h3 {
  color: #cbd5e1;
}

/* Párrafos y texto general */
p {
  margin-bottom: 1.5rem;
  color: #475569;
  font-size: 1.1rem;
}

.dark p {
  color: #94a3b8;
}

strong {
  color: #0f172a;
  font-weight: 650;
}

.dark strong {
  color: #f1f5f9;
}

/* Secciones / tarjetas */
section {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1.125rem;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 6px 16px -4px rgba(0,0,0,0.08), 0 4px 8px -2px rgba(0,0,0,0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.dark section {
  background: #1e293b;
  border-color: #334155;
  box-shadow: 0 6px 16px -4px rgba(0,0,0,0.4);
}

section:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -6px rgba(0,0,0,0.12), 0 6px 12px -3px rgba(0,0,0,0.08);
}

/* Botones */
button {
  font-weight: 600;
  padding: 0.9rem 1.8rem;
  border-radius: 0.625rem;
  background: #3b82f6;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.22s ease;
  box-shadow: 0 3px 8px rgba(59,130,246,0.25);
}

button:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(59,130,246,0.35);
}

button:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(59,130,246,0.2);
}

.dark button {
  background: #60a5fa;
}

.dark button:hover {
  background: #3b82f6;
}

/* Inputs y select */
input, select {
  padding: 0.75rem 1.1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.625rem;
  background: #ffffff;
  color: #0f172a;
  font-size: 1.05rem;
  width: 100%;
  max-width: 320px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.dark input, .dark select {
  background: #1e293b;
  color: #f1f5f9;
  border-color: #475569;
}

input:focus, select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59,130,246,0.18);
}

/* Resultados destacados / números importantes */
.text-xl, .text-lg {
  font-weight: 650;
}

.text-green-700 {
  color: #15803d;
}

.dark .text-green-700 {
  color: #86efac;
}

/* Grids para demos lado a lado */
.grid-cols-1 {
  display: grid;
  gap: 1.75rem;
}

@media (min-width: 768px) {
  .md\:grid-cols-2 {
    grid-template-columns: 1fr 1fr;
  }
}

/* Footer / conclusión */
footer {
  text-align: center;
  margin-top: 5rem;
  padding-top: 2.5rem;
  border-top: 1px solid #e2e8f0;
}

.dark footer {
  border-top-color: #334155;
}

footer p {
  font-size: 1.2rem;
  font-weight: 550;
  color: #1e293b;
}

.dark footer p {
  color: #e2e8f0;
}

/* Responsive – ajustes para móviles */
@media (max-width: 640px) {
  h1 { font-size: 2.25rem; margin-bottom: 2.5rem; }
  h2 { font-size: 1.75rem; margin: 2.5rem 0 1.25rem; }
  section { padding: 1.5rem; margin-bottom: 2.5rem; }
  button { padding: 0.8rem 1.5rem; width: 100%; max-width: 280px; }
  input, select { max-width: 100%; }
}
</style>