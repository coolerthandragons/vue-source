import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const firstName = ref("Rachel")
    const lastName = ref("Cubbage")
    const street = ref("123 Main St")
    const city = ref("Bridgewater")
    const state = ref("Virginia")
    const zip = ref("12345")

  return { firstName, lastName, street, city, state, zip }
})
