# Workspace - Investigación Vue 3

## Descripción del Proyecto

Este es un proyecto de investigación sobre reactividad y estado en Vue 3 que demuestra diferentes conceptos:

1. **ref, reactive y toRefs** - Manejo de valores primitivos y objetos reactivos
2. **shallowRef** - Optimización para datos grandes
3. **computed, watch y watchEffect** - Propiedades computadas y observadores
4. **provide/inject** - Estado global simple sin Pinia/Vuex

## Estructura Completa del Proyecto

### 📁 **Raíz del Proyecto** (41 archivos/carpetas principales)

#### ⚙️ **Archivos de Configuración**

- `package.json` - Dependencias del proyecto y scripts de ejecución
- `package-lock.json` - Versiones exactas de dependencias (lock file)
- `tsconfig.json` - Configuración principal de TypeScript
- `tsconfig.app.json` - Configuración TS para código de aplicación
- `tsconfig.node.json` - Configuración TS para código de Node.js
- `tsconfig.vitest.json` - Configuración TS para pruebas Vitest
- `vite.config.ts` - Configuración del servidor de desarrollo Vite
- `vitest.config.ts` - Configuración del framework de pruebas Vitest
- `playwright.config.ts` - Configuración para pruebas E2E con Playwright
- `eslint.config.ts` - Configuración del linter ESLint
- `.editorconfig` - Configuración de edición para consistencia entre IDEs
- `.prettierrc.json` - Configuración del formatter Prettier
- `.gitignore` - Archivos y carpetas ignorados por Git
- `.gitattributes` - Atributos Git para manejo de archivos
- `env.d.ts` - Definiciones de tipos para variables de entorno
- `index.html` - Template HTML principal para la aplicación

#### 📂 **Carpetas Principales**

##### 📁 **`dist/`** (6 archivos)

- Archivos generados por el build de producción
- `index.html` - HTML principal optimizado
- `favicon.ico` - Icono de la aplicación
- Archivos CSS y JS con nombres hash para caché
- `assets/` - Recursos estáticos optimizados

##### 📁 **`node_modules/`** (1,000+ archivos)

- Dependencias del proyecto (omitido del análisis detallado)
- Contiene todas las librerías de terceros

##### 📁 **`src/`** (20 archivos) - Código Fuente Principal

###### 📁 **`src/assets/`** (3 archivos)

- `base.css` - Estilos base y variables CSS
- `main.css` - Estilos principales de la aplicación
- `logo.svg` - Logo del proyecto

###### 📁 **`src/components/`** (9 archivos)

- `HelloWorld.vue` - Componente de ejemplo/demostración
- `TheWelcome.vue` - Componente de bienvenida
- `WelcomeItem.vue` - Item reutilizable para bienvenida
- `ThemePreview.vue` - Vista previa del tema actual
- `__tests__/HelloWorld.spec.ts` - Pruebas unitarias del componente

###### 📁 **`src/components/icons/`** (5 archivos)

- `IconCommunity.vue` - Icono de comunidad
- `IconDocumentation.vue` - Icono de documentación
- `IconEcosystem.vue` - Icono de ecosistema
- `IconSupport.vue` - Icono de soporte
- `IconTooling.vue` - Icono de herramientas

###### 📁 **`src/composables/`** (1 archivo)

- `useCartCalculations.ts` - Lógica reutilizable para cálculos de carrito de compras

###### 📁 **`src/router/`** (1 archivo)

- `index.ts` - Configuración de rutas de Vue Router

###### 📁 **`src/sections/`** (4 archivos)

- `SectionComputedWatch.vue` - Demostración de computed y watch
- `SectionProvideInject.vue` - Demostración de provide/inject
- `SectionRefReactiveToRefs.vue` - Demostración de ref, reactive y toRefs
- `SectionShallowRef.vue` - Demostración de shallowRef

###### 📁 **`src/stores/`** (1 archivo)

- `counter.ts` - Store de ejemplo con Pinia (contador)

###### 📁 **`src/views/`** (4 archivos)

- `AboutView.vue` - Vista de Acerca de
- `ContactView.vue` - Vista de Contacto
- `HomeView.vue` - Vista de Inicio
- `InvestigacionReactividad.vue` - Vista principal de investigación (contiene todas las secciones)

###### 📄 **Archivos Raíz de `src/`**

- `App.vue` - Componente raíz de la aplicación
- `main.ts` - Punto de entrada de la aplicación Vue

##### 📁 **`public/`** (1 archivo)

- `favicon.ico` - Favicon accesible públicamente

##### 📁 **`.vscode/`** (2 archivos)

- `extensions.json` - Extensiones recomendadas para VS Code
- `settings.json` - Configuración específica del proyecto para VS Code

##### 📁 **`e2e/`** (2 archivos)

- `vue.spec.ts` - Pruebas E2E con Playwright
- `tsconfig.json` - Configuración TS para pruebas E2E

## Propósito de Cada Carpeta/Archivo

### 🎯 **Propósito del Proyecto**

Investigar y demostrar los conceptos de reactividad en Vue 3 con ejemplos prácticos.

### 📁 **Detalles por Carpeta**

#### **`src/views/`** - Vistas Principales

- **`InvestigacionReactividad.vue`**: Vista central que integra todas las demostraciones de reactividad
- **`HomeView.vue`**: Página de inicio del proyecto
- **`AboutView.vue`**: Información sobre el proyecto
- **`ContactView.vue`**: Formulario de contacto

#### **`src/sections/`** - Componentes de Demostración

- **`SectionRefReactiveToRefs.vue`**: Muestra manejo de valores primitivos con ref y objetos con reactive + toRefs
- **`SectionShallowRef.vue`**: Demostración de optimización para estructuras de datos grandes
- **`SectionComputedWatch.vue`**: Implementación de carrito con propiedades computadas y observadores
- **`SectionProvideInject.vue`**: Sistema de tema global usando provide/inject

#### **`src/components/`** - Componentes Reutilizables

- **UI Components**: Componentes visuales reutilizables como ThemePreview
- **Demo Components**: Componentes de ejemplo y bienvenida
- **Icons**: Conjunto de iconos SVG reutilizables

#### **`src/composables/`** - Lógica Compartida

- **`useCartCalculations.ts`**: Función composable para cálculos de carrito (subtotal, IVA, total)

#### **Configuración y Herramientas**

- **TypeScript**: Múltiples archivos tsconfig para diferentes contextos
- **Testing**: Configuración para Vitest (unit) y Playwright (E2E)
- **Calidad**: ESLint y Prettier para código consistente
- **Build**: Vite para desarrollo rápido y optimización de producción

## Errores Encontrados

### Error de CSS en InvestigacionReactividad.vue

**Ubicación del error:** `src/views/InvestigacionReactividad.vue` líneas 41-46

**Problema:** El CSS contenía sintaxis inválida con puntos suspensivos (...)

**Código incorrecto:**

```css
.investigacion { background: #ffffff; color: #0f172a; min-height: 100vh; ... }
h1 { font-size: 2.8rem; ... }
```

**Solución:** Se corrigió la sintaxis CSS eliminando los puntos suspensivos y aplicando el formato CSS correcto:

**Código corregido:**

```css
.investigacion {
  background: #ffffff;
  color: #0f172a;
  min-height: 100vh;
}

.dark .investigacion {
  background: #0f172a;
  color: #f1f5f9;
}

h1 {
  font-size: 2.8rem;
}
```

**Resultado:** El build ahora se completa exitosamente y la aplicación funciona correctamente en http://localhost:5174/

## Componentes Funcionales

- **SectionRefReactiveToRefs**: Demuestra ref para contadores y reactive + toRefs para objetos
- **SectionShallowRef**: Muestra optimización con datos grandes simulados
- **SectionComputedWatch**: Implementa carrito de compras con propiedades computadas
- **SectionProvideInject**: Sistema de tema global con provide/inject
- **ThemePreview**: Componente UI que muestra el tema actual inyectado

## Estado del Proyecto

✅ **Build exitoso** - El proyecto compila correctamente  
✅ **Funcionalidad completa** - Todas las secciones operativas  
✅ **Tema funcional** - Sistema de tema claro/oscuro trabajando  
⚠️ **Advertencia TypeScript** - Error de tipos en ContactView.vue (no crítico)
