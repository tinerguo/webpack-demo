import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import tinerlib from 'tinerlib'

Vue.use(tinerlib);
new Vue({
  render: h => h(App),
}).$mount('#app')
