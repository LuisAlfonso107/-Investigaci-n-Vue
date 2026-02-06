<script setup lang="ts">
import NavegationMovie from '../components/NavegationMovie.vue';
</script>

<template>
  <div class="router-page">
    <div class="container">
      <h1>Router Demo</h1>
      <p class="description">
        Explore Vue Router navigation and view components
      </p>
      
      <div class="navigation-section">
        <NavegationMovie />
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-page {
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
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.navigation-section {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .router-page {
    padding: 1rem;
  }
  
  .navigation-section {
    padding: 2rem 1rem;
  }
}

@media (min-width: 768px) {
  .router-page {
    padding: 3rem 2rem;
  }
}

@media (min-width: 1024px) {
  .router-page {
    padding: 4rem 2rem;
  }
}
</style>