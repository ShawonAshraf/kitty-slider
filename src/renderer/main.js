import Vue from 'vue';

/* eslint-disable no-unused-vars */
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App';
import store from './store';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  components: { App },
  store,
  template: '<App/>',
}).$mount('#app');
