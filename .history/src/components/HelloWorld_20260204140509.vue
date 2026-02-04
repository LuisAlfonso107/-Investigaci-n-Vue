<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="brand-title">{{ msg }}</h1>
    <h3 class="brand-subtitle">
      Explora el poder de <span class="highlight">Vue 3</span> con reactividad moderna
    </h3>
  </div>
</template>

<style scoped>
.greetings {
  text-align: center;
  padding: 1rem;
}

.brand-title {
  font-weight: 800;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  background: linear-gradient(135deg, #f59e0b 0%, #dc2626 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(245, 158, 11, 0.1);
  animation: glow 3s ease-in-out infinite alternate;
}

@keyframes glow {
  from { filter: drop-shadow(0 0 5px rgba(245, 158, 11, 0.3)); }
  to { filter: drop-shadow(0 0 20px rgba(220, 38, 38, 0.5)); }
}

.brand-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
}

.highlight {
  font-weight: 700;
  color: #10b981;
  text-shadow: 0 2px 5px rgba(16, 185, 129, 0.3);
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #10b981, transparent);
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 0.5; transform: translateX(-100%); }
  50% { opacity: 1; transform: translateX(100%); }
}

@media (min-width: 1024px) {
  .greetings {
    text-align: left;
  }
  
  .brand-title {
    font-size: 2.8rem;
  }
  
  .brand-subtitle {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .greetings {
    padding: 0.5rem;
  }
  
  .brand-title {
    font-size: 2rem;
  }
  
  .brand-subtitle {
    font-size: 1rem;
  }
}
</style>
