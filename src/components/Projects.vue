<template>
  <div id='project-feed'>
      <div class='project' v-for='(project,index) in projects' :key='`${project?.slug}_${index}`'>
        <article class='media'>
          <router-link :to='`/projects/${project.slug}`'>
            <figure>
              <img v-if='project?.fields?.hero_image' :src='project?.fields?.hero_image' alt=''>
              <img v-else src='http://via.placeholder.com/250x250' alt=''>
              <figcaption>
                <span class='project_title'>Project: {{ project?.fields?.title }}</span>
              </figcaption>
            </figure>
          </router-link>
          <div class='info'>
            <p class='description'>
              {{ project?.fields?.short_description }}.<br/>
              Built with {{ project?.fields?.stack }}.
            </p>
            <p class='details'>
              <router-link class='button' :to='`/projects/${project.slug}`'>
                More Details
              </router-link>
            </p>
            <p class='links'>
              <a class='source' :href='`${project?.fields?.source}`'>
                Source: <font-awesome-icon :icon="['fab', 'github']"/>
              </a>
              <span v-if='project?.fields?.live_demo'>
                <a :href='`${project?.fields?.live_demo}`'>
                  Live Demo: <font-awesome-icon icon='desktop'/>
                </a>
              </span>
              <span v-if='project?.fields?.live_prod'>
                <a :href='`${project?.fields?.live_prod}`'>
                  Live Site: <font-awesome-icon icon='desktop'/>
                </a>
              </span>
            </p>
          </div>
        </article>
      </div>
  </div>
</template>

<script>
import butter from '@/buttercms';

export default {
  name: 'projects',
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getProjects() {
      butter.page.list('project', {
        page: 1,
        page_size: 10,
      }).then((res) => {
        this.projects = res.data.data;
      });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<style scoped>
article {
  box-shadow: 4px 4px 10px 1px #b3b3b3;
}
article:hover {
  box-shadow: 5px 5px 10px 1px #a9a9a9;
}
a:hover {
  text-decoration: none;
}
article img{
  width: 100%;
}
figcaption {
  text-align: center;
}
#project-feed {
  display: flex;
  flex-wrap: wrap;
}
.button {
  background-color: #999;
  color: white;
  padding: 0.4em 1em;
  box-shadow: 1px 1px 1px 0px #b3b3b3;
}
.button:hover {
  background-color: #6d6d6d;
  box-shadow: 1px 1px 1px 1px #a9a9a9;
}
.project {
  display: block;
  margin: auto;
  padding: 1em;
}
.description {
  padding: 0.5em;
  font-size: 1em;
  height: 70px;
}
.links, .details {
  text-align: center;
  padding: 0.5em;
  margin: 0;
  font-size: 1em;
}
.links .source {
  padding: 0 0.5em;
}
@media screen and (max-width: 699px) {
  .project {
    width: 80%;
  }
}
@media screen and (min-width: 540px) and (max-width: 699px){
  article, .info {
    display: flex;
    flex-wrap:wrap;
  }
  a {
    font-size: 1em;
  }
  .description {
    padding: none;
  }
  article a, .info {
    width: 50%;
  }
}
@media screen and (min-width: 700px) {
  .project {
    width: calc(100% / 2 - 40px);
  }
}
</style>
