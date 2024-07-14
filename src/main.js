import { createApp } from 'vue'
import MyComponent from './components/MyComponent.vue'
import './tailwind.css'

const app = createApp({
  components: {
    MyComponent
  }
})

app.mount('#app')

console.log('Hello kirby!')
