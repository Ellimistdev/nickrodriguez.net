<template>
  <div class='about' v-html='data'>
  </div>
</template>

<script>
import butter from '@/buttercms';

export default {
  name: 'About',
  data() {
    return {
      data: '',
    };
  },
  methods: {
    getData() {
      butter.page.retrieve('wysiwyg', 'about').then((res) => {
        this.data = res.data.data.fields.content;
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.about {
  padding: 1em;
  text-align: center;
}
</style>
