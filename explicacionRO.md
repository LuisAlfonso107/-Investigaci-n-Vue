# Vue Router: Funcionamiento, Estructura y Gestión de Dependencias Asíncronas

##**Resumen General**

Vue Router es el sistema de enrutamiento oficial para Vue.js que permite construir aplicaciones de una sola página (SPA) con navegación declarativa y composición de vistas. En tu proyecto actual, está configurado con Vue 3 y TypeScript.

##  **Estructura y Reparto de Roles entre Vistas y Rutas**

### **1. Archivo de Configuración Principal**

**Ubicación:** `/src/router/index.ts`

```typescript
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView, // Carga inmediata (Eager loading)
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/UsoDiarioLogicaBasicaVue.vue"), // Lazy loading
    },
    // ... más rutas
  ],
});

export default router;
```

### **2. Roles y Responsabilidades**

#### ** Router (`/src/router/index.ts`)**

- **Configuración global de rutas**
- **Definición de modo de historial** (`createWebHistory`)
- **Manejo de rutas estáticas y dinámicas**
- **Configuración de guardias de navegación**

#### ** Vistas (`/src/views/`)**

- **HomeView.vue** - Página principal con carga eager
- **UsoDiarioLogicaBasicaVue.vue** - Ejemplos de lógica diaria
- **InvestigacionReactividad.vue** - Demostración de reactividad avanzada
- **ContactView.vue** - Página de contacto/API
- **RouterViewAndRouterLink.vue** - Demostración de componentes de router

#### ** Componentes (`/src/components/`)**

- **NavegationMovie.vue** - Componente de navegación con `RouterLink`
- **TheWelcome.vue** - Componente de bienvenida principal

### **3. Separación de Responsabilidades**

```typescript
//  BUENA PRÁCTICA: Separación clara
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView, // Vista específica para ruta principal
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/UsoDiarioLogicaBasicaVue.vue"), // Vista para demos
  },
];

// EVITAR: Mezclar lógica de componente con configuración de ruta
const routes = [
  {
    path: "/complex",
    component: () => import("../views/ComplexView.vue"),
    beforeEnter: () => {
      /* lógica compleja aquí */
    }, // Mover a guards separados
  },
];
```

##  **Rutas Dinámicas y Lazy Loading**

### **1. Lazy Loading con Dynamic Imports**

#### **Sintaxis Básica**

```typescript
// Archivo: /src/router/index.ts:18
component: () => import("../views/UsoDiarioLogicaBasicaVue.vue");

// Archivo: /src/router/index.ts:23
component: () => import("../views/InvestigacionReactividad.vue");

// Archivo: /src/router/index.ts:28
component: () => import("../views/ContactView.vue");
```

#### **Sintaxis Avanzada con Nomenclatura de Chunks**

```typescript
// Para mejor organización y depuración
component: () =>
  import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
component: () =>
  import(
    /* webpackChunkName: "reactividad" */ "../views/InvestigacionReactividad.vue"
  );
component: () =>
  import(/* webpackChunkName: "contact" */ "../views/ContactView.vue");
```

### **2. Rutas Dinámicas con Parámetros**

#### **Ejemplo Básico**

```typescript
// Añadir al router/index.ts
{
  path: '/movie/:id',
  name: 'movie-detail',
  component: () => import('../views/MovieDetailView.vue'),
  props: true  // Pasa params como props al componente
}
```

#### **Vista Correspondiente**

```vue
<!-- /src/views/MovieDetailView.vue -->
<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const movieId = route.params.id; // Acceso al parámetro dinámico

// O con props (si props: true en la ruta)
interface Props {
  id: string;
}
const props = defineProps<Props>();
</script>
```

### **3. Rutas Anidadas (Nested Routes)**

```typescript
{
  path: '/dashboard',
  component: () => import('../views/DashboardView.vue'),
  children: [
    {
      path: '',  // Ruta por defecto
      component: () => import('../views/DashboardHomeView.vue')
    },
    {
      path: 'profile',
      component: () => import('../views/DashboardProfileView.vue')
    },
    {
      path: 'settings',
      component: () => import('../views/DashboardSettingsView.vue')
    }
  ]
}
```

#### **Vista Principal con RouterView Anidado**

```vue
<!-- /src/views/DashboardView.vue -->
<template>
  <div class="dashboard">
    <aside>
      <RouterLink to="/dashboard">Home</RouterLink>
      <RouterLink to="/dashboard/profile">Profile</RouterLink>
      <RouterLink to="/dashboard/settings">Settings</RouterLink>
    </aside>
    <main>
      <RouterView />
      <!-- Aquí se renderizan las rutas hijas -->
    </main>
  </div>
</template>
```

### **4. Lazy Loading con Componentes de Carga Personalizados**

```typescript
// Componente de loading personalizado
const LoadingComponent = () => import('../components/LoadingSpinner.vue')

// Route con loading personalizado
{
  path: '/heavy-page',
  component: () => ({
    component: import('../views/HeavyPage.vue'),
    loading: LoadingComponent,
    delay: 200,  // ms de delay antes de mostrar loading
    timeout: 3000  // timeout antes de mostrar error
  })
}
```

##  **Gestión de Dependencias Asíncronas: `<Suspense>`**

### **1. Concepto Fundamental**

`<Suspense>` es un componente integrado de Vue 3 que permite manejar estados de carga en componentes asíncronos, especialmente útil con lazy loading de rutas.

### **2. Uso Básico en Vue Principal**

**Archivo:** `/src/App.vue:26`

```vue
<template>
  <div>
    <nav class="main-navigation">
      <!-- ... navegación -->
    </nav>

    <header>
      <!-- ... header content -->
    </header>

    <!-- Implementación actual básica -->
    <RouterView />

    <!--  Implementación mejorada con Suspense -->
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback>
        <div class="loading-container">
          <div class="spinner"></div>
          <p>Cargando página...</p>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 1rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
```

### **3. Suspense con Componentes Asíncronos**

#### **Vista con Operación Asíncrona**

```vue
<!-- /src/views/ContactView.vue -->
<script setup lang="ts">
import { ref, onMounted } from "vue";

const data = ref(null);
const error = ref(null);

const fetchData = async () => {
  try {
    // Simulando llamada API asíncrona
    const response = await fetch("https://api.example.com/data");
    data.value = await response.json();
  } catch (err) {
    error.value = err;
    throw err; // Importante: propagar error para que Suspense lo capture
  }
};

// async setup() - Vue 3.2+
const result = await fetchData();

onMounted(() => {
  console.log("Componente montado con datos:", result);
});
</script>

<template>
  <div class="contact-page">
    <h1>Contacto</h1>
    <div v-if="data">
      <!-- Renderizar datos cuando estén disponibles -->
      <div v-for="item in data" :key="item.id">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
```

#### **Componente con `<script setup>` Asíncrono**

```vue
<script setup lang="ts">
import { ref } from "vue";

const userData = ref(null);

// Setup asíncrono - Vue esperará a que se resuelva
userData.value = await fetch("https://api.github.com/users/usuario").then(
  (res) => res.json(),
);
</script>

<template>
  <div class="user-profile">
    <h1>Perfil de Usuario</h1>
    <div v-if="userData">
      <img :src="userData.avatar_url" :alt="userData.name" />
      <h2>{{ userData.name }}</h2>
      <p>{{ userData.bio }}</p>
    </div>
  </div>
</template>
```

### **4. Manejo de Errores con Suspense**

```vue
<!-- En App.vue o layout principal -->
<template>
  <Suspense>
    <template #default>
      <RouterView />
    </template>
    <template #fallback>
      <GlobalLoadingSpinner />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { onErrorCaptured } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onErrorCaptured((error, instance, info) => {
  console.error("Error capturado en Suspense:", error);

  // Navegar a página de error
  router.push("/error");

  // Retornar false para prevenir propagación del error
  return false;
});
</script>
```

### **5. Suspense Anidado**

```vue
<!-- Componente con múltiples niveles de Suspense -->
<template>
  <div class="complex-page">
    <!-- Suspense para el componente principal -->
    <Suspense>
      <template #default>
        <AsyncMainComponent />
      </template>
      <template #fallback>
        <MainLoading />
      </template>
    </Suspense>

    <!-- Suspense para componentes secundarios -->
    <Suspense>
      <template #default>
        <AsyncSidebar />
      </template>
      <template #fallback>
        <SidebarLoading />
      </template>
    </Suspense>
  </div>
</template>
```

##  **RouterLink y RouterView en Acción**

### **1. RouterLink - Navegación Declarativa**

#### **Uso Básico en NavegationMovie.vue**

```vue
<!-- Archivo: /src/components/NavegationMovie.vue:9-11 -->
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="navigation-movie">
    <div class="links-container">
      <RouterLink class="link" to="/movie">Movie</RouterLink>
      <RouterLink class="link" to="/all-movies">All Movies</RouterLink>
      <RouterLink class="link" to="/create-movie">Create Movie</RouterLink>
    </div>
  </div>
</template>
```

#### **RouterLink Avanzado**

```vue
<template>
  <!-- Navegación básica -->
  <RouterLink to="/about">Acerca de</RouterLink>

  <!-- Navegación con nombre de ruta -->
  <RouterLink :to="{ name: 'user-profile', params: { id: userId } }">
    Perfil de Usuario
  </RouterLink>

  <!-- Navegación con query params -->
  <RouterLink :to="{ path: '/search', query: { q: searchTerm, page: 1 } }">
    Buscar
  </RouterLink>

  <!-- RouterLink con estado activo personalizado -->
  <RouterLink
    to="/special"
    custom
    v-slot="{ navigate, isActive, isExactActive }"
  >
    <button :class="{ active: isExactActive }" @click="navigate">
      Ruta Especial
    </button>
  </RouterLink>
</template>
```

### **2. RouterView - Renderizado Dinámico**

#### **Uso Básico en App.vue**

```vue
<!-- Archivo: /src/App.vue:26 -->
<template>
  <div>
    <nav>
      <!-- ... navegación -->
    </nav>

    <RouterView />
  </div>
</template>
```

#### **RouterView con Props**

```vue
<template>
  <RouterView v-slot="{ Component, route }">
    <transition name="route" mode="out-in">
      <component :is="Component" :key="route.path" :custom-prop="someData" />
    </transition>
  </RouterView>
</template>

<style scoped>
.route-enter-active,
.route-leave-active {
  transition: opacity 0.3s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
</style>
```

## **Ejemplos Prácticos Aplicables**

### **1. Implementación Completa de Sistema de Rutas**

```typescript
// /src/router/index.ts - Mejorado
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

// Types para mejor TypeScript
declare module "vue-router" {
  interface RouteMeta {
    requiresAuth?: boolean;
    roles?: string[];
    title?: string;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "Inicio",
    },
  },
  {
    path: "/auth",
    component: () => import("../layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../views/auth/LoginView.vue"),
        meta: { title: "Iniciar Sesión" },
      },
      {
        path: "register",
        name: "register",
        component: () => import("../views/auth/RegisterView.vue"),
        meta: { title: "Registrarse" },
      },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("../layouts/DashboardLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "dashboard-home",
        component: () => import("../views/dashboard/HomeView.vue"),
      },
      {
        path: "profile/:id",
        name: "profile",
        component: () => import("../views/dashboard/ProfileView.vue"),
        props: true,
        meta: {
          requiresAuth: true,
          title: "Perfil de Usuario",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Guardias de navegación
router.beforeEach((to, from, next) => {
  // Actualizar título del documento
  document.title = to.meta.title ? `${to.meta.title} - Mi App` : "Mi App";

  // Verificar autenticación
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next("/auth/login");
  } else {
    next();
  }
});

export default router;

function isAuthenticated(): boolean {
  return !!localStorage.getItem("token");
}
```

### **2. Componente de Navegación Avanzado**

```vue
<!-- /src/components/AppNavigation.vue -->
<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const isMobileMenuOpen = ref(false);

const navigationItems = computed(() => [
  {
    name: "Inicio",
    to: "/",
    icon: "home",
  },
  {
    name: "Investigación",
    to: "/investigacion-reactiva",
    icon: "science",
  },
  {
    name: "API",
    to: "/contact",
    icon: "api",
  },
  {
    name: "Router Demo",
    to: "/router-view-y-router-link",
    icon: "router",
  },
]);

const isActive = (path: string) => {
  return route.path === path || route.path.startsWith(path + "/");
};

const navigate = (to: string) => {
  router.push(to);
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <nav class="app-navigation">
    <div class="nav-container">
      <div class="nav-brand">
        <RouterLink to="/" class="brand-link">
          <h1>ReacTiVue</h1>
        </RouterLink>
      </div>

      <button
        class="mobile-toggle"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <span v-if="!isMobileMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <div class="nav-menu" :class="{ active: isMobileMenuOpen }">
        <RouterLink
          v-for="item in navigationItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :class="{ active: isActive(item.to) }"
          @click="() => navigate(item.to)"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span class="nav-text">{{ item.name }}</span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.app-navigation {
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  min-height: 60px;
}

.brand-link {
  text-decoration: none;
  color: white;
}

.brand-link h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-menu {
  display: flex;
  gap: 0;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(102, 126, 234, 0.3);
  transition: left 0.3s ease;
}

.nav-link:hover::before,
.nav-link.active::before {
  left: 0;
}

.nav-link.active {
  background: rgba(102, 126, 234, 0.2);
  font-weight: 600;
}

.nav-icon {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #2d3748;
    flex-direction: column;
    align-items: stretch;
    padding: 1rem 0;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
```

### **3. Layout Principal con Suspense y Transiciones**

```vue
<!-- /src/App.vue - Versión mejorada -->
<script setup lang="ts">
import { ref, onErrorCaptured } from "vue";
import { useRouter } from "vue-router";
import AppNavigation from "./components/AppNavigation.vue";

const router = useRouter();
const error = ref<string | null>(null);

onErrorCaptured((err, instance, info) => {
  console.error("Error en aplicación:", err);
  error.value = err.message;

  // Opcional: redirigir a página de error
  setTimeout(() => {
    router.push("/error");
  }, 2000);

  return false;
});

const handleRetry = () => {
  error.value = null;
  router.go(0);
};
</script>

<template>
  <div id="app">
    <AppNavigation />

    <!-- Error Boundary -->
    <div v-if="error" class="error-boundary">
      <div class="error-content">
        <h2>Oops! Algo salió mal</h2>
        <p>{{ error }}</p>
        <button @click="handleRetry" class="retry-button">Reintentar</button>
      </div>
    </div>

    <!-- Suspense con transiciones -->
    <Suspense v-else>
      <template #default>
        <RouterView v-slot="{ Component, route }">
          <transition name="route" mode="out-in" appear>
            <component
              :is="Component"
              :key="route.path"
              class="route-component"
            />
          </transition>
        </RouterView>
      </template>

      <template #fallback>
        <div class="global-loading">
          <div class="loading-spinner"></div>
          <p>Cargando contenido...</p>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.error-boundary {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 2rem;
}

.error-content {
  text-align: center;
  max-width: 400px;
}

.error-content h2 {
  color: #e53e3e;
  margin-bottom: 1rem;
}

.retry-button {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 500;
  transition: background 0.3s ease;
}

.retry-button:hover {
  background: #5a67d8;
}

.global-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 1rem;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #f3f4f6;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Transiciones de ruta */
.route-enter-active,
.route-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.route-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.route-component {
  min-height: calc(100vh - 60px); /* Ajustar por altura del nav */
}
</style>
```

### **4. Hook Personalizado para Navegación**

```typescript
// /src/composables/useNavigation.ts
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

export function useNavigation() {
  const router = useRouter();
  const route = useRoute();
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const currentPath = computed(() => route.path);
  const currentRouteName = computed(() => route.name as string);

  const navigate = async (to: string | { name: string; params?: any }) => {
    try {
      isLoading.value = true;
      error.value = null;

      if (typeof to === "string") {
        await router.push(to);
      } else {
        await router.push(to);
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Error de navegación";
      console.error("Navigation error:", err);
    } finally {
      isLoading.value = false;
    }
  };

  const goBack = () => {
    router.go(-1);
  };

  const goForward = () => {
    router.go(1);
  };

  const replaceRoute = (to: string | { name: string; params?: any }) => {
    if (typeof to === "string") {
      router.replace(to);
    } else {
      router.replace(to);
    }
  };

  return {
    currentPath,
    currentRouteName,
    isLoading,
    error,
    navigate,
    goBack,
    goForward,
    replaceRoute,
  };
}
```

##  **Resumen de Mejores Prácticas**

### **Recomendaciones Clave**

1. **Lazy Loading para todas las rutas excepto la principal**
2. **Usar Suspense para manejar estados de carga**
3. **Implementar guardias de navegación para autenticación**
4. **Mantener separación clara entre configuración de rutas y lógica de componentes**
5. **Usar TypeScript para tipado fuerte en rutas**
6. **Implementar manejo de errores con onErrorCaptured**
7. **Añadir transiciones suaves entre rutas**
8. **Optimizar carga con nomenclatura de chunks**

### ** Enfoque Especial en los Temas Solicitados**

1. **Estructura y Reparto de Roles**: Separación clara entre router config, views, y components
2. **Rutas Dinámicas y Lazy Loading**: Implementación completa con mejores prácticas
3. **Gestión de Dependencias Asíncronas**: Suspense con manejo avanzado de errores y loading states

Esta guía proporciona una base sólida para implementar sistemas de enrutamiento robustos y escalables en Vue 3.
