import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'custom-nav' },
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/minutiae',
      name: 'blog-feed',
      component: () => import('./views/Blog.vue'),
    },
    {
      path: '/minutiae/:slug',
      name: 'blog-post',
      component: () => import('./components/BlogPost.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue'),
    },
    {
      path: '/projects/:slug',
      name: 'project-page',
      component: () => import('./components/ProjectPage.vue'),
    },
    {
      path: '/vita',
      name: 'vita',
      component: () => import('./views/Vita.vue'),
    },
  ],
});

export default router;
