<template>
  <div class="multiple-components">
    <div class="component-grid">
      <div class="component-item">
        <Suspense>
          <template #default>
            <UserProfile />
          </template>
          <template #fallback>
            <div class="mini-loading"> Cargando perfil...</div>
          </template>
        </Suspense>
      </div>

      <div class="component-item">
        <Suspense>
          <template #default>
            <UserStats />
          </template>
          <template #fallback>
            <div class="mini-loading"> Cargando estadísticas...</div>
          </template>
        </Suspense>
      </div>

      <div class="component-item">
        <Suspense>
          <template #default>
            <UserActivity />
          </template>
          <template #fallback>
            <div class="mini-loading">Cargando actividad...</div>
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const UserProfile = defineAsyncComponent(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    template: `
      <div class="profile-card">
        <h4>Perfil de Usuario</h4>
        <p><strong>Nombre:</strong> Ana García</p>
        <p><strong>Email:</strong> ana@ejemplo.com</p>
        <p><strong>Rol:</strong> Desarrolladora</p>
      </div>
    `,
  };
});

const UserStats = defineAsyncComponent(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    template: `
      <div class="stats-card">
        <h4> Estadísticas</h4>
        <div class="stats-grid">
          <div class="stat-item">
            <strong>127</strong>
            <span>Proyectos</span>
          </div>
          <div class="stat-item">
            <strong>89%</strong>
            <span>Completados</span>
          </div>
          <div class="stat-item">
            <strong>4.8</strong>
            <span>Rating</span>
          </div>
        </div>
      </div>
    `,
  };
});

const UserActivity = defineAsyncComponent(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    template: `
      <div class="activity-card">
        <h4> Actividad Reciente</h4>
        <ul>
          <li> Completó proyecto "Dashboard"</li>
          <li>Actualizó componentes</li>
          <li> Escribió documentación</li>
        </ul>
      </div>
    `,
  };
});
</script>

<style scoped>
.multiple-components {
  padding: 1rem;
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.component-item {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #e9ecef;
  min-height: 150px;
}

.mini-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  color: #666;
  font-style: italic;
  border: 1px dashed #ddd;
  border-radius: 4px;
}

/* Estilos para los componentes dinámicos */
:deep(.profile-card),
:deep(.stats-card),
:deep(.activity-card) {
  text-align: left;
}

:deep(.profile-card h4),
:deep(.stats-card h4),
:deep(.activity-card h4) {
  color: #42b883;
  margin-bottom: 1rem;
}

:deep(.profile-card p) {
  margin-bottom: 0.5rem;
  color: #666;
}

:deep(.stats-grid) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  text-align: center;
}

:deep(.stat-item) {
  display: flex;
  flex-direction: column;
}

:deep(.stat-item strong) {
  font-size: 1.5rem;
  color: #2c3e50;
}

:deep(.stat-item span) {
  font-size: 0.85rem;
  color: #666;
}

:deep(.activity-card ul) {
  margin: 0;
  padding-left: 1.2rem;
}

:deep(.activity-card li) {
  margin-bottom: 0.5rem;
  color: #666;
}

@media (max-width: 768px) {
  .component-grid {
    grid-template-columns: 1fr;
  }

  :deep(.stats-grid) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}
</style>
