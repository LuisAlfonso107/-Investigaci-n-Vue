<template>
  <div class="nested-suspense">
    <h4> Contenedor Principal</h4>
    <p>
      Este es el componente principal que contiene otros componentes con
      Suspense.
    </p>

    <div class="nested-content">
      <div class="inner-section">
        <h5>Contenido Interno</h5>
        <Suspense>
          <template #default>
            <InnerComponent />
          </template>
          <template #fallback>
            <div class="inner-loading"> Cargando contenido interno...</div>
          </template>
        </Suspense>
      </div>

      <div class="side-section">
        <h5> Contenido Lateral</h5>
        <Suspense>
          <template #default>
            <SideComponent />
          </template>
          <template #fallback>
            <div class="side-loading"> Cargando contenido lateral...</div>
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const InnerComponent = defineAsyncComponent(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1800));
  return {
    template: `
      <div class="inner-content">
        <h6>Componente Interno Cargado</h6>
        <div class="content-box">
          <p>Este componente está anidado dentro del componente principal.</p>
          <div class="details">
            <strong>Detalles del anidamiento:</strong>
            <ul>
              <li>Nivel 1: Componente principal</li>
              <li>Nivel 2: Este componente (interno)</li>
              <li>Suspense anidado maneja carga individual</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    style: `
      .inner-content h6 {
        color: #42b883;
        margin-bottom: 1rem;
      }
      .content-box {
        background: #f0fdf4;
        border: 1px solid #22c55e;
        border-radius: 6px;
        padding: 1rem;
      }
      .details {
        margin-top: 1rem;
      }
      .details strong {
        display: block;
        margin-bottom: 0.5rem;
        color: #2c3e50;
      }
      .details ul {
        margin: 0.5rem 0 0 1.2rem;
        color: #666;
      }
      .details li {
        margin-bottom: 0.25rem;
      }
    `,
  };
});

const SideComponent = defineAsyncComponent(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return {
    template: `
      <div class="side-content">
        <h6> Componente Lateral Cargado</h6>
        <div class="info-panel">
          <div class="status-item">
            <span class="status-icon"></span>
            <span>Dependencias: 3</span>
          </div>
          <div class="status-item">
            <span class="status-icon">⏱</span>
            <span>Tiempo carga: 1.2s</span>
          </div>
          <div class="status-item">
            <span class="status-icon"></span>
            <span>Estado: Activo</span>
          </div>
        </div>
      </div>
    `,
    style: `
      .side-content h6 {
        color: #3b82f6;
        margin-bottom: 1rem;
      }
      .info-panel {
        background: #eff6ff;
        border: 1px solid #3b82f6;
        border-radius: 6px;
        padding: 1rem;
      }
      .status-item {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
      }
      .status-icon {
        margin-right: 0.5rem;
      }
      .status-item:last-child {
        margin-bottom: 0;
      }
    `,
  };
});
</script>

<style scoped>
.nested-suspense {
  text-align: left;
  padding: 1rem;
}

.nested-suspense h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.nested-suspense p {
  color: #666;
  margin-bottom: 1.5rem;
}

.nested-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.inner-section,
.side-section {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #e9ecef;
}

.inner-section h5,
.side-section h5 {
  color: #495057;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.inner-loading,
.side-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  color: #666;
  font-style: italic;
  border: 1px dashed #ced4da;
  border-radius: 4px;
  background: white;
}

@media (max-width: 768px) {
  .nested-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
