import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

import Icon from '@/components/Icon'

import enUS from './locales/en-US'
import plPL from './locales/pl-PL'

Vue.config.productionTip = false
Vue.use(VueI18n)

Vue.component('Icon', Icon)

const i18n = new VueI18n({
    locale: 'en-US',
    messages: {
        'en-US': enUS,
        'pl-PL': plPL
    }
})

new Vue({
    i18n,
    router,
    render: h => h(App)
}).$mount('#app')
