import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import Vant from 'vant';
import 'vant/lib/index.css';


import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
