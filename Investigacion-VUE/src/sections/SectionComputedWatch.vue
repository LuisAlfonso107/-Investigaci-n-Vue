<!-- src/sections/SectionComputedWatch.vue -->
<script setup lang="ts">
import { useCartCalculations } from '../composables/useCartCalculations'

const { counter, price, subtotal, finalPrice } = useCartCalculations()
</script>

<template>
  <section class="mb-12 border-b pb-8">
    <h2 class="text-2xl font-semibold mb-4">3. computed, watch y watchEffect</h2>
    <p class="mb-4">
      <strong>computed</strong>: valores derivados cacheados.<br />
      <strong>watch</strong>: observa valores específicos.<br />
      <strong>watchEffect</strong>: efecto automático con dependencias implícitas.
    </p>

    <div class="cart-container">
      <h3 class="cart-title"> Carrito de compra</h3>
      <div class="cart-inputs">
        <div class="input-group">
          <label class="input-label">Cantidad:</label>
          <input v-model.number="counter" type="number" min="1" class="cart-input" />
        </div>
        <div class="input-group">
          <label class="input-label">Precio unitario:</label>
          <div class="price-input-wrapper">
            <span class="currency">€</span>
            <input v-model.number="price" type="number" min="0" class="cart-input" />
          </div>
        </div>
      </div>

      <div class="cart-totals">
        <div class="total-item">
          <span class="total-label">Subtotal:</span>
          <span class="total-value">€ {{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="total-item final">
          <span class="total-label">Total con descuento:</span>
          <span class="total-value final-price">€ {{ finalPrice.toFixed(2) }}</span>
        </div>
      </div>

      <div class="cart-note">
         Revisa la consola: watch y watchEffect se disparan automáticamente.
      </div>
    </div>
  </section>
</template>

<style scoped>
.cart-container {
  background: green;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(251, 191, 36, 0.2);
  border: 2px solid black;
  position: relative;
  overflow: hidden;
}

.dark .cart-container {
  background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
  border-color: #d97706;
  box-shadow: 0 10px 30px rgba(217, 119, 6, 0.3);
}

.cart-container::before {
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 100px;
  opacity: 0.1;
  transform: rotate(-15deg);
}

.cart-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.dark .cart-title {
  color: #fde68a;
}

.cart-inputs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  font-weight: 600;
  color: #000000;
  font-size: 0.875rem;
}

.dark .input-label {
  color: #fde68a;
}

.cart-input {
  background: gray;
  border: 2px solid #0e0d0b;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
}

.dark .cart-input {
  background: rgba(31, 41, 55, 0.9);
  border-color: #d97706;
  color: #f9fafb;
}

.cart-input:focus {
  outline: none;
  border-color: #000000;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  transform: translateY(-1px);
}

.price-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.currency {
  position: absolute;
  left: 12px;
  color: #000000;
  font-weight: 600;
  pointer-events: none;
}

.dark .currency {
  color: #000000;
}

.price-input-wrapper .cart-input {
  padding-left: 1.75rem;
}

.cart-totals {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.dark .cart-totals {
  background: rgba(0, 0, 0, 0.2);
}

.total-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.total-item.final {
  border-top: 2px solid #000000;
  padding-top: 1rem;
  margin-bottom: 0;
}

.dark .total-item.final {
  border-top-color: #d97706;
}

.total-label {
  font-weight: 600;
  color: #000000;
  font-size: 1rem;
}

.dark .total-label {
  color: #fde68a;
}

.total-value {
  font-weight: 700;
  color: #1f2937;
  font-size: 1.125rem;
}

.dark .total-value {
  color: #f9fafb;
}

.final-price {
  color: #000000;
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.dark .final-price {
  color: #f87171;
}

.cart-note {
  padding: 1.3rem;
  color: #000000;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
}

.dark .cart-note {
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  border-color: #2563eb;
}

@media (max-width: 640px) {
  .cart-container {
    padding: 1.5rem;
  }

  .cart-title {
    font-size: 1.25rem;
  }

  .final-price {
    font-size: 1.25rem;
  }
}
</style>
