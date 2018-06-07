// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index";
import './assets/css/aui.css';
import './assets/css/main.css';
import './assets/css/aui-iconfont.ttf';
import VueLazyLoad from 'vue-lazyload';
import loading from './assets/images/loading.png';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  error: loading,
  loading: loading
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
