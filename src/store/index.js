import { createPinia } from 'pinia'

const pinia = createPinia()

export function usePinia(app) {
  app.use(pinia)
}

export default pinia
