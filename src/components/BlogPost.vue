<template>
  <div id='blog-post'>
    <h1>{{ post?.data?.title }}</h1>
    <h4>By {{ post?.data?.author?.first_name }} {{ post?.data?.author?.last_name }}</h4>
    <div v-html='post?.data?.body'></div>
    <hr>
    <p class='adjacent-posts'>
      <router-link
        v-if='post?.meta?.previous_post'
        :to='`/minutiae/${post?.meta?.previous_post?.slug}`'
        class='button'
      >
        <span><font-awesome-icon icon='arrow-left' />&nbsp;</span>
        {{ post?.meta?.previous_post?.title }}
      </router-link>
      <span v-if='post?.meta?.previous_post && post?.meta?.next_post'>|</span>
      <router-link
        v-if='post?.meta?.next_post'
        :to='`/minutiae/${post?.meta?.next_post?.slug}`'
        class='button'
      >
        {{ post?.meta?.next_post?.title }}
        <span>&nbsp;<font-awesome-icon icon='arrow-right' /></span>
      </router-link>
    </p>
  </div>
</template>

<script>
import butter from '@/buttercms';

export default {
  name: 'blog-post',
  data() {
    return {
      post: null,
    };
  },
  methods: {
    getPost() {
      butter.post.retrieve(this.$route.params.slug)
        .then((res) => {
          this.post = res.data;
        });
    },
  },
  watch: {
    $route() {
      this.getPost();
    },
  },
  created() {
    this.getPost();
  },
};
</script>

<style scoped>
#blog-post {
  padding: 0 1em;
}
#blog-post >>> img {
  margin: auto;
  display:block
}
#blog-post >>> figcaption {
  text-align: center;
  font-size: 0.75em;
}
.adjacent-posts {
  text-align: center;
}
@media screen and (max-width: 540px) {
  h1 {
    font-size: 2em;
  }
}
</style>
