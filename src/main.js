import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Icon from '@/components/Icon'

Vue.config.productionTip = false

Vue.component('Icon', Icon)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
