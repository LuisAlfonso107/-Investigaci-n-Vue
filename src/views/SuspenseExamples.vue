<template>
  <div class="suspense-examples">
    <h1>Ejemplos de Suspense para Gestión de Dependencias Asíncronas</h1>
    <p class="intro">
      Suspense permite mostrar estados de carga mientras se resuelven
      dependencias asíncronas como componentes, datos o recursos.
    </p>

    <!-- Ejemplo 1: Componente Asíncrono Básico -->
    <section class="example-section">
      <h2>Ejemplo 1: Componente Asíncrono Básico</h2>
      <p>Un componente que tarda 2 segundos en cargar:</p>
      <div class="example-container">
        <Suspense>
          <template #default>
            <AsyncBasicComponent />
          </template>
          <template #fallback>
            <div class="loading-state">
              <p> Cargando componente básico...</p>
            </div>
          </template>
        </Suspense>
      </div>
    </section>

    <!-- Ejemplo 2: Múltiples Dependencias Asíncronas -->
    <section class="example-section">
      <h2>Ejemplo 2: Múltiples Dependencias Asíncronas</h2>
      <p>Varios componentes que cargan datos diferentes:</p>
      <div class="example-container">
        <Suspense>
          <template #default>
            <MultipleAsyncComponents />
          </template>
          <template #fallback>
            <div class="loading-state">
              <p> Cargando múltiples componentes...</p>
            </div>
          </template>
        </Suspense>
      </div>
    </section>

    <!-- Ejemplo 3: Anidado Suspense -->
    <section class="example-section">
      <h2>Ejemplo 3: Suspense Anidado</h2>
      <p>Suspense dentro de otro Suspense para control granular:</p>
      <div class="example-container">
        <Suspense>
          <template #default>
            <NestedSuspenseExample />
          </template>
          <template #fallback>
            <div class="loading-state">
              <p>Cargando contenedor principal...</p>
            </div>
          </template>
        </Suspense>
      </div>
    </section>

    <!-- Ejemplo 4: Manejo de Errores -->
    <section class="example-section">
      <h2>Ejemplo 4: Manejo de Errores</h2>
      <p>Cómo manejar errores en componentes asíncronos:</p>
      <div class="example-container">
        <ErrorBoundary>
          <Suspense>
            <template #default>
              <ErrorAsyncComponent />
            </template>
            <template #fallback>
              <div class="loading-state">
                <p> Cargando componente que puede fallar...</p>
              </div>
            </template>
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>

    <!-- Ejemplo 5: Datos Dinámicos -->
    <section class="example-section">
      <h2>Ejemplo 5: Datos Dinámicos con Botón</h2>
      <p>Cargar datos bajo demanda:</p>
      <div class="example-container">
        <button
          @click="loadDynamicData"
          :disabled="dynamicDataLoaded"
          class="action-button"
        >
          {{
            dynamicDataLoaded
              ? " Datos Cargados"
              : " Cargar Datos Dinámicos"
          }}
        </button>

        <div v-if="showDynamicData">
          <Suspense>
            <template #default>
              <DynamicDataComponent :dataId="currentDataId" />
            </template>
            <template #fallback>
              <div class="loading-state">
                <p> Cargando datos dinámicos...</p>
              </div>
            </template>
          </Suspense>
        </div>
      </div>
    </section>

    <!-- Panel Informativo -->
    <section class="info-panel">
      <h3> ¿Qué es Suspense?</h3>
      <p>
        Suspense es un componente integrado de Vue 3 que permite gestionar
        estados de carga para componentes asíncronos. Proporciona dos slots:
      </p>
      <ul>
        <li>
          <strong>#default:</strong> Contenido que se mostrará cuando las
          dependencias se resuelvan
        </li>
        <li>
          <strong>#fallback:</strong> Contenido temporal mientras se cargan las
          dependencias
        </li>
      </ul>

      <h3>Casos de Uso Comunes</h3>
      <ul>
        <li>Carga de componentes perezosos (lazy-loaded)</li>
        <li>Fechas asíncronas de APIs</li>
        <li>Procesamiento de datos pesados</li>
        <li>Carga de imágenes o recursos externos</li>
      </ul>

      <h3> Ventajas Clave</h3>
      <ul>
        <li>Mejora la experiencia del usuario</li>
        <li>Evita pantallas en blanco</li>
        <li>Permite control granular de estados de carga</li>
        <li>Facilita el manejo de errores con Error Boundary</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";

// Estado para el ejemplo dinámico
const showDynamicData = ref(false);
const dynamicDataLoaded = ref(false);
const currentDataId = ref(1);

// Componente asíncrono básico - simula 2 segundos de carga
const AsyncBasicComponent = defineAsyncComponent(
  () => import("../components/AsyncBasicComponent.vue"),
);

// Componente con múltiples dependencias
const MultipleAsyncComponents = defineAsyncComponent(
  () => import("../components/MultipleAsyncComponents.vue"),
);

// Componente anidado
const NestedSuspenseExample = defineAsyncComponent(
  () => import("../components/NestedSuspenseExample.vue"),
);

// Componente que puede fallar
const ErrorAsyncComponent = defineAsyncComponent(
  () => import("../components/ErrorAsyncComponent.vue"),
);

// Componente de datos dinámicos
const DynamicDataComponent = defineAsyncComponent(
  () => import("../components/DynamicDataComponent.vue"),
);

// Componente para manejo de errores
const ErrorBoundary = defineAsyncComponent(
  () => import("../components/ErrorBoundary.vue"),
);

// Función para cargar datos dinámicos
const loadDynamicData = () => {
  showDynamicData.value = true;
  dynamicDataLoaded.value = true;
  currentDataId.value = Math.floor(Math.random() * 100) + 1;
};
</script>

<style scoped>
.suspense-examples {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.intro {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.example-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #42b883;
}

.example-section h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.example-section p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.example-container {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  min-height: 120px;
  border: 1px solid #e9ecef;
}

.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #666;
  font-size: 1.1rem;
  background: white;
  border-radius: 8px;
  border: 2px dashed #ddd;
}

.action-button {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.action-button:hover:not(:disabled) {
  background: #369870;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.3);
}

.action-button:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.7;
}

.info-panel {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  margin-top: 3rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.info-panel h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.info-panel h3:first-child {
  margin-top: 0;
}

.info-panel p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.info-panel ul {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.info-panel li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .suspense-examples {
    padding: 1rem;
  }

  .example-section {
    padding: 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  .info-panel {
    padding: 1.5rem;
  }
}
</style>
