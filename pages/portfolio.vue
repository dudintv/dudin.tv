<template>
  <div class="portfolio">
    <div class="hero container mx-auto w-4_5 xl--w-3_5 mb-24">
      <div class="personal flex items-start md--items-center flex-col md--flex-row">
        <img class="w-48 mx-auto md--mx-0 rounded-3xl drop-shadow-2xl" src="/images/common/dudin-dmitry-2019.jpg" />
        <p class="my-8 mx-4 md--mx-8">
          I'm a graphic designer, script writer and fullstack web developer.<br /><br />I have experience with Vizrt
          from&nbsp;2007<br />and I'm a
          <a href="https://www.vizrt.com/community/viz-university/certified-professionals/dmitry-dudin"
            >Vizrt Certified Pro Viz Artist Designer</a
          >
        </p>
      </div>
      <div class="details mx-4">
        <p class="md--my-8">
          I use VizArtist, VizTrio, VizDirector (VizContentPilot), PilotEdge and Multiplay for creating Lowerthirds,
          Fullscreen, Virtual and Agument Reality graphics and for robotic virtual studio with UX-perfect control panels
          as usefull as possible with custom scripts.
        </p>
      </div>
    </div>
    <h1 class="text-center mt-16 mb-16">My last projects</h1>
    <div class="project-items flex flex-col items-center gap-y-24 py-16 -my-12 overflow-hidden">
      <template v-for="(project, index) in projects">
        <PortfolioProject
          :id="project._path || ''"
          :youtube="project.youtube"
          :image="project.image"
          :reverse="index % 2 === 0"
          ><small>{{ new Date(project.date).getFullYear() }}</small>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <nuxt-link :to="project._path">~ watch more details</nuxt-link>
        </PortfolioProject>
      </template>
    </div>
    <h1 class="text-center mt-64 mb-16 px-4">My ancient portfolio</h1>
    <div class="portfolio-items flex flex-col items-center overflow-hidden">
      <PortfolioItem youtube="https://youtu.be/4xH6bjEoEq8">
        <small>Portfolio</small>
        <h3>Lower Thirds & Fullscreen</h3>
        <p>
          Tons of Vizrt graphics for Russian federal TV channels such as lowerthirds, fullscreen, videowall graphics
          connected with iPad in talents hand.
        </p>
        <p>Russia 24&nbsp;(News&nbsp;Channel) Podmoskovie&nbsp;360 Russia&nbsp;1</p>
      </PortfolioItem>
      <PortfolioItem youtube="https://youtu.be/ltCWN7sajx4">
        <small>Portfolio</small>
        <h3>Virtual Studios</h3>
        <p>
          Three virtual studios for the best TV virtual studio in Russia. There was a lot of fakes
          and&nbsp;scripts&nbsp;;)
        </p>
        <p>
          The hardest thing here was preparation 3dsMax models from designers to working Vizrt objects. Especially
          making fake reflection.
        </p>
      </PortfolioItem>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = (await queryContent('/projects').find()).sort((a1, a2) =>
  new Date(a1.date) < new Date(a2.date) ? 1 : -1
);
</script>

<style lang="scss" scoped>
.hero {
  max-width: 1000px;
  padding: 0 auto;
  font-size: 1.2rem;
}

h3 {
  margin-top: 0.3rem;
}
</style>
