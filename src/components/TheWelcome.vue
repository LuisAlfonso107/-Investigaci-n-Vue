<script setup lang="ts">
interface TestItem {
  title: string
  description: string
  icon: string
  example: string
}

const testItems: TestItem[] = [
  {
    title: 'Pruebas Unitarias',
    description: 'Prueba funciones individuales con Vitest.',
    icon: '',
    example: `import { describe, it, expect } from 'vitest'
import { sumar } from './utils'

describe('sumar', () => {
  it('suma números', () => {
    expect(sumar(2, 3)).toBe(5)
  })
})`
  },
  {
    title: 'Pruebas de Componentes',
    description: 'Prueba componentes Vue con Vue Test Utils.',
    icon: '',
    example: `import { mount } from '@vue/test-utils'
import Boton from './Boton.vue'

it('renderiza texto', () => {
  const wrapper = mount(Boton, {
    props: { texto: 'Click' }
  })
  expect(wrapper.text()).toBe('Click')
})`
  },
  {
    title: 'Mock de APIs',
    description: 'Simula llamadas a API para pruebas.',
    icon: '',
    example: `import { vi } from 'vitest'
import axios from 'axios'

vi.mock('axios')
axios.get.mockResolvedValue({ data: 'ok' })`
  },
  {
    title: 'Pruebas Asíncronas',
    description: 'Prueba promesas y operaciones async.',
    icon: '',
    example: `it('resuelve con datos', async () => {
  const result = await fetchData()
  expect(result).toBeDefined()
})`
  },
  {
    title: 'Snapshots',
    description: 'Captura estado actual del componente.',
    icon: '',
    example: `it('coincide con snapshot', () => {
  const wrapper = mount(Component)
  expect(wrapper.html()).toMatchSnapshot()
})`
  },
  {
    title: 'Manejo de Errores',
    description: 'Prueba casos de error y excepciones.',
    icon: '',
    example: `it('lanza error', () => {
  expect(() => validar(null))
    .toThrow('Datos inválidos')
})`
  }
]
</script>

<template>
  <div class="welcome-container">
    <h1>Testing con Vitest</h1>
    <p class="subtitle">Guía rápida de testing para aplicaciones Vue</p>
    
    <div class="topics">
      <div class="item" v-for="item in testItems" :key="item.title">
        <h3>{{ item.icon }} {{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="code-example">
          <h4>Ejemplo:</h4>
          <pre><code>{{ item.example }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.welcome-container h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.welcome-container .subtitle {
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

.item {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: left;
  margin-top: 0;
  display: block;
  position: static;
}

.item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.item h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #667eea;
  line-height: 1.3;
}

.item p {
  color: #64748b;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.code-example {
  background: #1e293b;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.code-example h4 {
  color: #fbbf24;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.code-example pre {
  margin: 0;
  font-family: 'Courier New', monospace;
}

.code-example code {
  color: #e2e8f0;
  font-size: 0.85rem;
  line-height: 1.5;
  white-space: pre-wrap;
  display: block;
}

.item i {
  display: none;
}

.details {
  flex: 1;
  margin-left: 0;
}

@media (max-width: 768px) {
  .welcome-container {
    padding: 1rem;
  }
  
  .topics {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .item {
    padding: 1.5rem;
  }
  
  .code-example {
    padding: 1rem;
  }
  
  .code-example code {
    font-size: 0.75rem;
  }
}

@media (min-width: 768px) {
  .welcome-container {
    padding: 3rem 2rem;
  }
}

@media (min-width: 1024px) {
  .welcome-container {
    padding: 4rem 2rem;
  }
  
  .topics {
    gap: 2.5rem;
  }
}
</style>