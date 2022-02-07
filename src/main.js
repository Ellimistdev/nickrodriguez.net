import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope, faArrowLeft, faArrowRight, faCode, faHeart, faFile, faDesktop,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub, faLinkedinIn, faInstagram, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import Default from '@/layouts/Default.vue';
import CustomNav from '@/layouts/CustomNav.vue';
import App from './App.vue';
import router from './router';

library.add(
  faEnvelope,
  faCode,
  faHeart,
  faArrowLeft,
  faArrowRight,
  faGithub,
  faLinkedinIn,
  faInstagram,
  faTwitter,
  faFile,
  faDesktop,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('default-layout', Default);
Vue.component('custom-nav-layout', CustomNav);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
