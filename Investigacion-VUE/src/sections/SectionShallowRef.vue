<!-- src/sections/SectionShallowRef.vue -->
<script setup lang="ts">
import { shallowRef } from 'vue'

const apiLargeData = shallowRef<{ items: string[]; total: number } | null>(null)

const loadLargeData = () => {
  apiLargeData.value = {
    items: Array(5000)
      .fill('')
      .map((_, i) => `Registro #${i + 1}`),
    total: 12500,
  }
}
</script>

<template>
  <section class="mb-12 border-b pb-8">
    <h2 class="text-2xl font-semibold mb-4">2. shallowRef y optimización</h2>
    <p class="mb-4">
      Solo rastrea cambios en la referencia raíz → ideal para datos grandes de API que reemplazamos
      enteros.
    </p>

    <button @click="loadLargeData" class="shallow-load-btn">
      Cargar datos simulados (5000 items)
    </button>

    <div v-if="apiLargeData" class="shallow-data-container">
      <div class="data-stats">
        <div class="stat-item">
          <span class="stat-label">Items cargados:</span>
          <span class="stat-value">{{ apiLargeData.items.length }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Total en base:</span>
          <span class="stat-value">{{ apiLargeData.total }}</span>
        </div>
      </div>
      <div class="shallow-explanation">
        <strong> Optimización shallowRef:</strong> Cambios internos en items[] NO disparan
        actualización (solo cuando reemplazamos la referencia completa)
      </div>
    </div>

    <p v-else class="shallow-placeholder">Pulsa el botón para cargar datos grandes...</p>
  </section>
</template>

<style scoped>
.shallow-load-btn {
  background: goldenrod;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.shallow-load-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
  background: linear-gradient(45deg, #059669, #047857);
}

.shallow-load-btn:active {
  transform: translateY(0);
}

.shallow-data-container {
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #10b981;
  animation: slideIn 0.5s ease-out;
}

.dark .shallow-data-container {
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  border-left-color: #059669;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.data-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-label {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
}

.dark .stat-label {
  color: #9ca3af;
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  color: #10b981;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.dark .stat-value {
  color: #34d399;
}

.shallow-explanation {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid #10b981;
  border-radius: 8px;
  padding: 1rem;
  color: #065f46;
  font-size: 0.875rem;
  line-height: 1.5;
}

.dark .shallow-explanation {
  background: rgba(16, 185, 129, 0.2);
  color: #6ee7b7;
  border-color: #059669;
}

.shallow-placeholder {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-radius: 12px;
  color: #6b7280;
  font-size: 1.125rem;
  border: 2px dashed #d1d5db;
}

.dark .shallow-placeholder {
  background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
  color: #9ca3af;
  border-color: #6b7280;
}
</style>
