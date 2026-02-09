<template>
  <div class="error-async">
    <h4> Componente que puede fallar</h4>
    <p>Este componente simulará un error después de 2 segundos.</p>

    <div class="content-area">
      <div v-if="!error" class="normal-content">
        <p>Cargando datos que pueden fallar...</p>
        <div class="loading-spinner"> Procesando solicitud...</div>
      </div>

      <div v-else class="error-content">
        <h5> Error Simulado</h5>
        <p>No se pudieron cargar los datos solicitados.</p>
        <div class="error-details">
          <strong>Error:</strong> {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const error = ref(false);
const errorMessage = ref("");

onMounted(async () => {
  try {
    // Simulamos una operación que falla
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulamos un error
    throw new Error("API temporalmente no disponible");
  } catch (err) {
    error.value = true;
    errorMessage.value =
      err instanceof Error ? err.message : "Error desconocido";

    // Propagamos el error para que ErrorBoundary lo capture
    throw err;
  }
});
</script>

<style scoped>
.error-async {
  text-align: center;
  padding: 1rem;
}

.error-async h4 {
  color: #f59e0b;
  margin-bottom: 0.5rem;
}

.error-async p {
  color: #666;
  margin-bottom: 1.5rem;
}

.content-area {
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 8px;
  padding: 1.5rem;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.normal-content,
.error-content {
  text-align: center;
}

.loading-spinner {
  font-size: 1.1rem;
  color: #92400e;
  margin-top: 1rem;
}

.error-content h5 {
  color: #dc2626;
  margin-bottom: 1rem;
}

.error-content p {
  color: #7f1d1d;
  margin-bottom: 1rem;
}

.error-details {
  background: #fee2e2;
  border: 1px solid #dc2626;
  border-radius: 4px;
  padding: 0.75rem;
  color: #7f1d1d;
  font-family: monospace;
  font-size: 0.9rem;
  text-align: left;
}
</style>
