<template>
  <div class="about">
    <div class="container">
      <h1>Uso Diario y Lógica Básica de Vue</h1>
      <p class="subtitle">Cómo se trabaja con Vue en el día a día</p>
      
      <div class="topics">
        <div class="topic">
          <h3>Importación y exportaciones de librerías y archivos</h3>
          <p>Gestión de módulos, componentes y dependencias en proyectos Vue</p>
          <div class="example">
            <h4>Ejemplo:</h4>
            <pre><code>// Importar componentes
import MyComponent from './components/MyComponent.vue'
import { ref, computed } from 'vue'

// Exportar componente
export default {
  name: 'MyComponent'
}</code></pre>
          </div>
        </div>
        
        <div class="topic">
          <h3> Directivas (v-if, v-for, v-model, etc.)</h3>
          <p>Directivas esenciales de Vue para el manejo del DOM y reactividad</p>
          <div class="example">
            <h4>Ejemplo:</h4>
            <pre><code>&lt;!-- Renderizado condicional --&gt;
&lt;p v-if="isVisible"&gt;Mostrar si es visible&lt;/p&gt;

&lt;!-- Listas --&gt;
&lt;li v-for="item in items" :key="item.id"&gt;
  \{\{ item.name \}\}
&lt;/li&gt;

&lt;!-- Binding bidireccional --&gt;
&lt;input v-model="message" /&gt;</code></pre>
          </div>
        </div>
        
        <div class="topic">
          <h3>Componentes (creación y reutilización)</h3>
          <p>Desarrollo de componentes reutilizables y buenas prácticas</p>
          <div class="example">
            <h4>Ejemplo:</h4>
            <pre><code>&lt;template&gt;
  &lt;div class="card"&gt;
    &lt;h3&gt;\{\{ title \}\}&lt;/h3&gt;
    &lt;p&gt;\{\{ content \}\}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
defineProps({
  title: String,
  content: String
})
&lt;/script&gt;</code></pre>
          </div>
        </div>
        
        <div class="topic">
          <h3>Comunicación entre componentes y App.vue</h3>
          <p>Flujo de datos e interacción entre componentes</p>
          <div class="example">
            <h4>Ejemplo:</h4>
            <pre><code>// App.vue
&lt;template&gt;
  &lt;div&gt;
    &lt;Header :user="currentUser" /&gt;
    &lt;Main @update="handleUpdate" /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
          </div>
        </div>
        
        <div class="topic">
          <h3>Props y Emits</h3>
          <p>Paso de datos entre componentes padre e hijo</p>
          <div class="example">
            <h4>Ejemplo:</h4>
            <pre><code>// Componente hijo
&lt;script setup lang="ts"&gt;
const props = defineProps({
  title: String,
  count: Number
})

const emit = defineEmits(['increment'])

const handleClick = () => {
  emit('increment', props.count + 1)
}
&lt;/script&gt;</code></pre>
          </div>
        </div>
        
       
        </div>
      </div>
    </div>

</template>

<script setup lang="ts">
// No se necesita lógica adicional para esta página estática
</script>

<style scoped>
.about {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 2rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.3rem;
  color: #64748b;
  margin-bottom: 3rem;
  font-weight: 500;
}

.topics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.topic {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: left;
}

.topic:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.topic h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #667eea;
  line-height: 1.3;
}

.topic p {
  color: #64748b;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.example {
  background: #1e293b;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.example h4 {
  color: #fbbf24;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.example pre {
  margin: 0;
  font-family: 'Courier New', monospace;
}

.example code {
  color: #e2e8f0;
  font-size: 0.85rem;
  line-height: 1.5;
  white-space: pre-wrap;
  display: block;
}

@media (max-width: 768px) {
  .about {
    padding: 1rem;
  }
  
  .topics {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .topic {
    padding: 1.5rem;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .example {
    padding: 1rem;
  }
  
  .example code {
    font-size: 0.75rem;
  }
}

@media (min-width: 768px) {
  .about {
    padding: 3rem 2rem;
  }
}

@media (min-width: 1024px) {
  .about {
    padding: 4rem 2rem;
  }
  
  .topics {
    gap: 2.5rem;
  }
}
</style>
