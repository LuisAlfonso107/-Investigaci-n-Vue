# Workspace - Investigación Vue 3

## Descripción del Proyecto

Este es un proyecto de investigación sobre reactividad y estado en Vue 3 que demuestra diferentes conceptos:

1. **ref, reactive y toRefs** - Manejo de valores primitivos y objetos reactivos
2. **shallowRef** - Optimización para datos grandes
3. **computed, watch y watchEffect** - Propiedades computadas y observadores
4. **provide/inject** - Estado global simple sin Pinia/Vuex

## Estructura de Archivos

- `src/views/InvestigacionReactividad.vue` - Vista principal que orquesta todas las secciones
- `src/sections/` - Componentes de sección para cada concepto demostrado
- `src/composables/` - Lógica reutilizable (ej: useCartCalculations)
- `src/components/ui/` - Componentes UI reutilizables

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
