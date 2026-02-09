<template>
  <div class="error-boundary">
    <div v-if="hasError" class="error-display">
      <h4> Se produjo un error</h4>
      <p>El componente asíncrono no pudo cargarse correctamente.</p>
      <div class="error-info">
        <strong>Detalles del error:</strong>
        <pre>{{ errorMessage }}</pre>
      </div>
      <button @click="retry" class="retry-button">Reintentar</button>
    </div>
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from "vue";

const hasError = ref(false);
const errorMessage = ref("");

onErrorCaptured((error) => {
  hasError.value = true;
  errorMessage.value = error.message;
  console.error("Error capturado por ErrorBoundary:", error);

  // Prevenir que el error se propague más allá
  return false;
});

const retry = () => {
  hasError.value = false;
  errorMessage.value = "";
};
</script>

<style scoped>
.error-boundary {
  width: 100%;
}

.error-display {
  background: #fee2e2;
  border: 2px solid #dc2626;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
}

.error-display h4 {
  color: #dc2626;
  margin-bottom: 1rem;
}

.error-display p {
  color: #7f1d1d;
  margin-bottom: 1rem;
}

.error-info {
  background: #7f1d1d;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  text-align: left;
}

.error-info strong {
  display: block;
  margin-bottom: 0.5rem;
}

.error-info pre {
  margin: 0;
  font-family: monospace;
  font-size: 0.85rem;
  white-space: pre-wrap;
}

.retry-button {
  background: #dc2626;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.retry-button:hover {
  background: #b91c1c;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
}
</style>
