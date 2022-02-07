<template>
  <div class="vita">
    <h1>Vita!</h1>
    <Markdown :source='md'></Markdown>
    <p><a :href='vita'>View as Markdown</a> | <a :href='pdf'>View as PDF</a></p>
  </div>
</template>

<script>
import axios from 'axios';
import Markdown from 'vue3-markdown-it';

export default {
  name: 'Vita',
  components: {
    Markdown,
  },
  data() {
    return {
      md: '',
      pdf: 'https://drive.google.com/file/d/1dEBryepECkqFH41VRVib2XxHMEuPd9Ew/view',
      vita: 'https://gist.githubusercontent.com/Ellimistdev/233613454f7a963f309dc50b4a74f496',
      hash: 'b77eab16bf52ee47ddd0d7d312340ae8cc88c5c1',
      filename: 'nick_rodriguez_resume.md',
    };
  },
  mounted() {
    axios.get(`${this.vita}/raw/${this.hash}/${this.filename}`).then((res) => {
      this.md = res.data;
    });
  },
};
</script>
<style scoped>
h1 {
  font-family: lobster, cursive;
  font-weight: 400;
}
.vita {
  padding: 0 2em;
  text-align: center;
}
/* Deep select v-html */
.vita >>> div h1 {
  font-size: 2em;
  display: inline-block
}
.vita >>> p, .vita >>> ul {
  text-align: left;
}
.vita >>> ul {
  margin-left: 1em;
}
@media screen and (max-width: 730px) {
  .vita >>> div h1 {
    max-width: 400px;
  }
}
</style>
