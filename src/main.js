import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toastRegistry from './components/toast'

Vue.use(toastRegistry)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// console.log(`App v${process.env.VUE_APP_VERSION} is running`);
