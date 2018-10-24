import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import router from './router'
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false
Vue.use(iView);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
