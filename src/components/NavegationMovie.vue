<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="navigation-movie">
    <h1>Navigation Movie</h1>
    <div class="links-container">
      <RouterLink class="link" to="/movie">Movie</RouterLink>
      <RouterLink class="link" to="/all-movies">All Movies</RouterLink>
      <RouterLink class="link" to="/create-movie">Create Movie</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.navigation-movie {
  text-align: center;
  padding: 2rem;
}

.navigation-movie h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #667eea;
}

.links-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .links-container {
    flex-direction: column;
    align-items: center;
  }
  
  .link {
    width: 200px;
    text-align: center;
  }
}
</style>