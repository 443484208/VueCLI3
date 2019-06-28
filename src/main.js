import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import Axios from "vue-axios"
import hy from "vue-hy"
Vue.config.productionTip = false;
// 引入自定义组件。index.js是组件的默认入口
Vue.use(hy);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
