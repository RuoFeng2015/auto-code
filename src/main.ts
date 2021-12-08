import { createApp } from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue3-highlightjs'
import 'ant-design-vue/dist/antd.css';
import 'highlight.js/styles/Atom-One-Dark.css'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'
const app = createApp(App)
app.use(VueHighlightJS)
app.use(VueClipboard)
app.mount('#app')
