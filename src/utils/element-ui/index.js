/**
 * Add the UI components
 * @see http://element.eleme.io/#/en-US/component/quickstart
 */

import Vue from 'vue';
import { Button, Select } from 'element-ui';

const addComponents = () => {
  Vue.use(Button);
  Vue.use(Select);
};

export default {
  addComponents,
};
