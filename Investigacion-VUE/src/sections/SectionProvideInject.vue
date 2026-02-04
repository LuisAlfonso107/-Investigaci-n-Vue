<!-- src/sections/SectionProvideInject.vue -->
<script setup lang="ts">
import { inject } from 'vue'
import ThemePreview from '../components/ui/ThemePreview.vue'

const props = defineProps<{
  toggle: () => void
}>()

const theme = inject<'light' | 'dark'>('theme')
</script>

<template>
  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-4">4. Estado global simple (provide / inject)</h2>
    <p class="mb-4">
      Sin Pinia/Vuex → ideal para temas, usuario logueado, idioma, etc. en apps medianas.
    </p>

    <div class="theme-controls">
      <button @click="props.toggle" class="theme-toggle-btn">
        <span class="btn-icon">
          {{ theme === 'light' ? 'dark mode' : 'light mode' }}
        </span>
        <span class="btn-text"> Cambiar a modo {{ theme === 'light' ? 'oscuro' : 'claro' }} </span>
      </button>

      <div class="theme-preview-wrapper">
        <ThemePreview :theme="theme || 'light'" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.theme-controls {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  flex-wrap: wrap;
  justify-content: center;
}

.theme-toggle-btn {
  background: black;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 16px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
}


.theme-toggle-btn:hover::before {
  left: 100%;
}

.theme-toggle-btn:hover {
 
  box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4);
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
}


.btn-icon {
  font-size: 1.5rem;
 
}


.btn-text {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.025em;
}

.theme-preview-wrapper {
  position: relative;
  padding: 1rem;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid #d1d5db;

}

.dark .theme-preview-wrapper {
  background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
  border-color: #6b7280;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.theme-preview-wrapper:hover {
 
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2);
}

.theme-preview-wrapper::before {
  content: ' Vista previa del tema';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #000000;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.3);
}

.dark .theme-preview-wrapper::before {
  background: #7c3aed;
}

@media (max-width: 768px) {
  .theme-controls {
    flex-direction: column;
    gap: 1.5rem;
  }

  .theme-toggle-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .theme-preview-wrapper {
    width: 100%;
    max-width: 300px;
  }
}

.theme-toggle-btn {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

.theme-toggle-btn:hover {
  animation: none;
}
</style>
