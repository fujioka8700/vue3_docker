import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import { div } from './sample/util.js'

console.log(div(12, 4))
