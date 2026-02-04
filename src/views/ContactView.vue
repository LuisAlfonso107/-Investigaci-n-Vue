<template>
  <div class="contact">
    <h1>ejmplo</h1>
    <p>Esto es un ejemplo de una vista</p>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>

<style scoped>
.contact {
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: var(--color-text);
}
</style>
