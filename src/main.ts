import { createApp } from 'vue'
import componentsLib from './plugins/componentsLib'
import directivesLib from './plugins/directivesLib'

import router from '~/router'
import vueRouterExtension from './plugins/vueRouterExtension'
import pinia from '~/plugins/pinia'


import App from './App.vue'
const app = createApp(App)


// libs 
app.use(componentsLib)
app.use(directivesLib)


// router
app.use(router)
app.use(vueRouterExtension)

// pinia
app.use(pinia)





app.mount('#app')
