<!-- src/sections/SectionRefReactiveToRefs.vue -->
<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'

// ── 1. ref + reactive + toRefs ──
const counter = ref(0)
const product = reactive({
  name: 'Monitor 27"',
  price: 249,
  stock: 15,
  discount: 0.1,
})
const { name, price, discount } = toRefs(product)
</script>

<template>
  <section class="mb-12 border-b pb-8">
    <h2 class="text-2xl font-semibold mb-4">1. ref, reactive y toRefs</h2>
    <p class="mb-4">
      <strong>ref</strong> → valores primitivos. <strong>reactive</strong> → objetos completos
      (Proxy).<br />
      <strong>toRefs</strong> → desestructura reactive sin perder reactividad (ideal para v-model).
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="ref-section">
        <h3 class="text-lg font-medium mb-3 text-white">Contador simple (ref)</h3>
        <div class="counter-display">{{ counter }}</div>
        <button @click="counter++" class="increment-btn">Incrementar +1</button>
      </div>

      <div class="ref-section">
        <h3 class="text-lg font-medium mb-3 text-white">Producto editable (reactive + toRefs)</h3>
        <div class="product-form space-y-3">
          <div>
            <label class="product-label">Nombre:</label>
            <input v-model="name" />
          </div>
          <div>
            <label class="product-label">Precio: €</label>
            <input v-model.number="price" type="number" />
          </div>
          <div>
            <label class="product-label">Descuento:</label>
            <input v-model.number="discount" type="number" step="0.05" min="0" max="1" />
            <span class="ml-2 text-white">({{ (discount * 100).toFixed(0) }}%)</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ref-section {
  background: rgb(156, 184, 115);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.ref-section:hover {
  transform: translateY(-2px);
}

.dark .ref-section {
  background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.counter-display {
  font-size: 2rem;
  font-weight: bold;
  color: #000000;
  margin: 1rem 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.dark .counter-display {
  color: #34d399;
}

.increment-btn {
  background: linear-gradient(45deg, #6b7280, #4b5563);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(107, 114, 128, 0.3);
}

.increment-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(107, 114, 128, 0.4);
  background: linear-gradient(45deg, #4b5563, #374151);
}

.increment-btn:active {
  transform: translateY(0);
}

.product-form input {
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  transition: all 0.2s ease;
  width: 100%;
}

.dark .product-form input {
  background: rgba(31, 41, 55, 0.9);
  border-color: #4b5563;
  color: #f9fafb;
}

.product-form input:focus {
  outline: none;
  border-color: #6b7280;
  box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.1);
}

.product-label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.25rem;
  display: block;
}

.dark .product-label {
  color: #d1d5db;
}
</style>
