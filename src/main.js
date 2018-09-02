import Vue from 'vue';
import Elements from '@/utils/element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

/**
 * Keep the imports clean
 * To add new Element components
 * @see @utils/element-ui/index.js
 */

Elements.addComponents();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
