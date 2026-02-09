<template>
  <div class="basic-component">
    <h3>Componente Básico Cargado</h3>
    <p>Este componente simuló una carga asíncrona de 2 segundos.</p>
    <div class="component-content">
      <div class="info-box">
        <strong> Información del componente:</strong>
        <ul>
          <li>Tipo: Componente simple</li>
          <li>Tiempo de carga: 2 segundos</li>
          <li>Estado: Completado</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log(" Componente básico montado exitosamente");
});
</script>

<style scoped>
.basic-component {
  text-align: center;
  padding: 1rem;
}

.basic-component h3 {
  color: #000000;
  margin-bottom: 1rem;
}

.component-content {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.info-box {
  text-align: left;
}

.info-box ul {
  margin: 0.5rem 0 0 1.5rem;
  color: #666;
}

.info-box li {
  margin-bottom: 0.25rem;
}
</style>
