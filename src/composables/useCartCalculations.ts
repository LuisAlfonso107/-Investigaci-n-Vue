// src/composables/useCartCalculations.ts
import { ref, reactive, toRefs, computed, watch, watchEffect } from 'vue'

export function useCartCalculations() {
  const counter = ref(0)
  const product = reactive({
    name: 'Monitor 27"',
    price: 249,
    stock: 15,
    discount: 0.10
  })
  const { name, price, discount } = toRefs(product)

  const subtotal = computed(() => price.value * counter.value)
  const finalPrice = computed(() => {
    const afterDiscount = subtotal.value * (1 - discount.value)
    return Math.round(afterDiscount * 100) / 100
  })

  watch([counter, price, discount], ([newCount, newPrice, newDisc]) => {
    console.log(`Carrito actualizado → Cant: ${newCount}, Precio: €${newPrice}, Desc: ${(newDisc * 100).toFixed(0)}%`)
  }, { immediate: true })

  watchEffect(() => {
    if (finalPrice.value > 500) {
      console.warn('¡Compra grande detectada! Total:', finalPrice.value)
    }
  })

  return {
    counter,
    name,
    price,
    discount,
    subtotal,
    finalPrice
  }
}