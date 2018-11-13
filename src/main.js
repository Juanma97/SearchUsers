import Vue from 'vue';
import './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuetify from 'vuetify';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
