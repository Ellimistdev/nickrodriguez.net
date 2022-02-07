import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope, faArrowLeft, faArrowRight, faCode, faHeart, faFile, faDesktop,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub, faLinkedinIn, faInstagram, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import Default from '@/layouts/Default.vue';
import CustomNav from '@/layouts/CustomNav.vue';
import Markdown from 'vue3-markdown-it';
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

const app = createApp({
  router,
  ...App,
});

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('default-layout', Default);
app.component('custom-nav-layout', CustomNav);

app.use(Markdown);
app.use(router);

app.mount('#app');
