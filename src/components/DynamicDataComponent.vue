<template>
  <div class="dynamic-data">
    <h5> Datos Dinámicos (ID: {{ dataId }})</h5>
    <div class="data-container">
      <div class="data-card">
        <h6> Información del Registro</h6>
        <div class="data-grid">
          <div class="data-field"><strong>ID:</strong> {{ data.id }}</div>
          <div class="data-field">
            <strong>Nombre:</strong> {{ data.nombre }}
          </div>
          <div class="data-field">
            <strong>Categoría:</strong> {{ data.categoria }}
          </div>
          <div class="data-field">
            <strong>Estado:</strong>
            <span :class="['status', data.estado.toLowerCase()]">
              {{ data.estado }}
            </span>
          </div>
          <div class="data-field">
            <strong>Última actualización:</strong>
            {{ data.ultimaActualizacion }}
          </div>
          <div class="data-field">
            <strong>Progreso:</strong>
            <div class="progress-bar">
              <div
                class="progress-fill"
                :style="{ width: data.progreso + '%' }"
              ></div>
              <span class="progress-text">{{ data.progreso }}%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="metadata">
        <h6>ℹ Metadatos de la carga</h6>
        <ul>
          <li>Tiempo de carga: {{ loadTime }}ms</li>
          <li>Timestamp: {{ timestamp }}</li>
          <li>Estado: <span class="success"> Completado</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface DataItem {
  id: number;
  nombre: string;
  categoria: string;
  estado: string;
  ultimaActualizacion: string;
  progreso: number;
}

const props = defineProps<{
  dataId: number;
}>();

const data = ref<DataItem>({
  id: 0,
  nombre: "",
  categoria: "",
  estado: "",
  ultimaActualizacion: "",
  progreso: 0,
});

const loadTime = ref(0);
const timestamp = ref("");

onMounted(async () => {
  const startTime = Date.now();

  // Simular carga asíncrona de datos
  await new Promise((resolve) =>
    setTimeout(resolve, 1500 + Math.random() * 1000),
  );

  // Simular datos basados en el ID
  const categorias = [
    "Tecnología",
    "Negocios",
    "Educación",
    "Salud",
    "Finanzas",
  ];
  const estados = ["Activo", "Pendiente", "Completado", "En Revisión"];
  const nombres = [
    "Proyecto Alpha",
    "Sistema Beta",
    "Plataforma Gamma",
    "Aplicación Delta",
    "Servicio Epsilon",
  ];

  data.value = {
    id: props.dataId,
    nombre: nombres[props.dataId % nombres.length] + " #" + props.dataId,
    categoria: categorias[props.dataId % categorias.length],
    estado: estados[props.dataId % estados.length],
    ultimaActualizacion: new Date().toLocaleDateString("es-ES"),
    progreso: Math.floor(Math.random() * 100),
  };

  loadTime.value = Date.now() - startTime;
  timestamp.value = new Date().toLocaleTimeString("es-ES");

  console.log(
    ` Datos dinámicos cargados para ID ${props.dataId}:`,
    data.value,
  );
});
</script>

<style scoped>
.dynamic-data {
  text-align: left;
  padding: 1rem;
}

.dynamic-data h5 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.data-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}

.data-card {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1.5rem;
}

.data-card h6 {
  color: #495057;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.data-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.data-field {
  display: flex;
  flex-direction: column;
}

.data-field strong {
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 0.25rem;
}

.data-field span:not(.status) {
  color: #2c3e50;
}

.status {
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
}

.status.activo {
  background: #d1fae5;
  color: #065f46;
}

.status.pendiente {
  background: #fef3c7;
  color: #92400e;
}

.status.completado {
  background: #dbeafe;
  color: #1e40af;
}

.status.en-revisión {
  background: #ede9fe;
  color: #5b21b6;
}

.progress-bar {
  position: relative;
  width: 100%;
  height: 20px;
  background: #e9ecef;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 0.25rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #42b883, #22c55e);
  transition: width 0.3s ease;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.75rem;
  color: #2c3e50;
  font-weight: 500;
}

.metadata {
  background: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 8px;
  padding: 1rem;
}

.metadata h6 {
  color: #1976d2;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
}

.metadata ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #1565c0;
}

.metadata li {
  margin-bottom: 0.5rem;
}

.success {
  color: #2e7d32;
  font-weight: 500;
}

@media (max-width: 768px) {
  .data-container {
    grid-template-columns: 1fr;
  }

  .data-grid {
    grid-template-columns: 1fr;
  }
}
</style>
