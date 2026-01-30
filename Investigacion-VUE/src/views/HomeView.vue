<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="home">
    <TheWelcome />





    <div class="cta-section">
      <RouterLink to="/investigacion-reactiva" class="cta-button">
        Ver Investigación: Reactividad en Vue 3
      </RouterLink>
    </div> 




    <div class="cta-section">
      <RouterLink to="/investigacion-reactiva" class="cta-button">
        Ver Investigación: Reactividad en Vue 3
      </RouterLink>
    </div> 

    <div class="cta-section">
      <RouterLink to="/investigacion-reactiva" class="cta-button">
        Ver Investigación: Reactividad en Vue 3
      </RouterLink>
    </div> 
<div class="cta-section">
      <RouterLink to="/investigacion-reactiva" class="cta-button">
        Ver Investigación: Reactividad en Vue 3
      </RouterLink>
    </div> 
<div class="cta-section">
      <RouterLink to="/investigacion-reactiva" class="cta-button">
        Ver Investigación: Reactividad en Vue 3
      </RouterLink>
    </div> 



  </main>
</template>

<style scoped>
.home {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.cta-section {
  text-align: center;
  margin-top: 3rem;
  padding: 3rem;
  background: var(--color-background-soft);
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
}

@media (min-width: 768px) {
  .home {
    padding: 3rem;
  }
  
  .cta-section {
    margin-top: 4rem;
    padding: 4rem;
  }
}

@media (min-width: 1024px) {
  .home {
    padding: 4rem;
  }
  
  .cta-section {
    margin-top: 5rem;
    padding: 5rem;
  }
}
</style>
