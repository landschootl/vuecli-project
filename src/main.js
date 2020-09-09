import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial);

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

new Vue({
  render: h => h(App),
}).$mount('#app');
