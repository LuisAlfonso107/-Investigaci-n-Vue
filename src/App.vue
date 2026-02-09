<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <nav class="main-navigation">
      <div class="nav-container">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">Uso Diario Vue</RouterLink>
        <RouterLink to="/investigacion-reactiva" class="nav-link"
          >Investigación Reactividad</RouterLink
        >
        <RouterLink to="/contact" class="nav-link">API</RouterLink>
        <RouterLink to="/router-view-y-router-link" class="nav-link"
          >RouterView y RouterLink</RouterLink
        >
        <RouterLink to="/suspense-examples" class="nav-link"
          >Suspense</RouterLink
        >
      </div>
    </nav>

    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <HelloWorld msg="ReacTiVue" />
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  line-height: 1.5;
  text-align: center;
  padding: 2rem 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.main-navigation {
  background: #1a202c;
  padding: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 50px;
}

.nav-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  white-space: nowrap;
}

.nav-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.15);
  transition: left 0.3s ease;
}

.nav-link:hover::before {
  left: 0;
}

.nav-link.router-link-exact-active {
  background: #2d3748;
  font-weight: 600;
  transform: translateY(-1px);
}

.nav-link:hover {
  background: #2d3748;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

@media (min-width: 768px) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
  }

  .logo {
    margin: 0 2rem 0 0;
    width: 80px;
    height: 80px;
  }

  header .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .nav-container {
    justify-content: center;
    gap: 0;
  }

  .nav-link {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }
}

@media (min-width: 1024px) {
  header {
    padding: 2rem 2rem;
  }

  .logo {
    width: 100px;
    height: 100px;
  }

  .nav-link {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 767px) {
  .nav-container {
    flex-wrap: wrap;
    min-height: auto;
  }

  .nav-link {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    flex: 1;
    min-width: 100px;
    text-align: center;
  }
}
</style>
