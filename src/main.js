import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// eslint-disable-next-line no-unused-vars
import {Howl, Howler} from 'howler';

Vue.config.productionTip = false;

Vue.filter('numbers', (value) => {
  let number = value + 1;
  if (number < 10) {
    return "0" + number + "."
  }
  return number + "."
});

Vue.filter('minutes', (value) => {
  if (!value || typeof value !== "number") return "00:00";
  let min = parseInt(value / 60),
      sec = parseInt(value % 60);
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  value = min + ":" + sec;
  return value
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
