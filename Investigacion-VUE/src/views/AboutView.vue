<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p class="description">
      This page demonstrates a clean, centered layout with proper spacing and typography.
    </p>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  padding: 3rem 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}

.description {
  font-size: 1.2rem;
  color: var(--color-text);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .about {
    padding: 4rem 3rem;
  }
  
  h1 {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .about {
    padding: 5rem 4rem;
  }
  
  h1 {
    font-size: 3.5rem;
  }
}
</style>
