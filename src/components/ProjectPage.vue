<template>
  <div id='project'>
    <h1>{{ project.title }}</h1>
    <div v-html='project.long_description'></div>
    <p class='stack'>Built with {{ project.stack }}.</p>
    <p class='links'>
      <a class='source' :href='`${project.source}`'>
        Source: <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
      <span v-if='project.live_demo'>
        <a :href='`${project.live_demo}`'>
          Live Demo: <font-awesome-icon icon='desktop'/>
        </a>
      </span>
      <span v-if='project.live_prod'>
        <a :href='`${project.live_prod}`'>
          Live Site: <font-awesome-icon icon='desktop'/>
        </a>
      </span>
    </p>
  </div>
</template>

<script>
import butter from '@/buttercms';

export default {
  name: 'project-page',
  data() {
    return {
      project: null,
    };
  },
  methods: {
    getProject() {
      butter.page.retrieve('project', this.$route.params.slug)
        .then((res) => {
          this.project = res.data.data.fields;
        });
    },
  },
  created() {
    this.getProject();
  },
};
</script>

<style scoped>
  #project {
    padding: 0 2em;
  }
  /* Deep select v-html */
  #project >>> li {
    padding: 0.2em;
  }
  #project >>> ul {
    width: 98%;
    margin: auto;
    padding-left: 2em;
  }
  @media screen and (max-width: 510px){
    h1 {
      font-size: 2em;
    }
  }
</style>
