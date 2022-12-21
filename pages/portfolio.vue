<template lang="pug">
.portfolio
  .hero.container.mx-auto.w-4_5.xl--w-3_5.mb-24
    .personal.flex.items-start.md--items-center.flex-col.md--flex-row
      img.w-48.mx-auto.md--mx-0(src="/common/dudin-dmitry-2021.jpg")
      p.my-8.md--mx-8
        | I'm a graphic designer, script writer and fullstack web developer.
        br
        br
        | I have experience with Vizrt from&nbsp;2007
        br
        | and I'm a <a href="https://www.vizrt.com/community/viz-university/certified-professionals/dmitry-dudin">Vizrt Certified Pro Viz Artist Designer</a>
    .details
      p.md--my-8 I use VizArtist, VizTrio, VizDirector (VizContentPilot), PilotEdge and Multiplay for creating Lowerthirds, Fullscreen, Virtual and Agument Reality graphics and for robotic virtual studio with UX-perfect control panels as usefull as possible with custom scripts.

  h1.text-center.mt-16.mb-16 My last projects
  .project-items.flex.flex-col.items-center

    template(v-for="(project, index) in projects")
      PortfolioProject(:id="project._path" :youtube="project.youtube" :image="project.image" :reverse="index % 2 === 0" )
        small {{ new Date(project.date).getFullYear() }}
        h3 {{ project.title }}
        p {{ project.description }}
        nuxt-link(:to="project._path") ~ watch more details

  h1.text-center.mt-64.mb-16 My ancient portfolio
  .portfolio-items.flex.flex-col.items-center
    PortfolioItem(youtube="https://youtu.be/4xH6bjEoEq8")
      small Portfolio
      h3 Lower Thirds & Fullscreen
      p
        | Tonns of Vizrt graphics for Russian federal TV channels such as lowerthirds, fullscreens, videwall graphics connected with iPad in talents hand.
      p
        | Russia 24&nbsp;(News&nbsp;Channel)
        | Podmoskovie&nbsp;360
        | Russia&nbsp;1
    PortfolioItem(youtube="https://youtu.be/ltCWN7sajx4")
      small Portfolio
      h3 Virtual Studios
      p
        | Three virtual studios for the best TV virtual studio in Russia. There was a lot of fakes and&nbsp;scripts&nbsp;;)
      p
        | The hardest thing here was preparation 3dsMax models from designers to working Vizrt objects. Especially making fake reflection.
</template>

<script setup>
const projects = (await queryContent('/projects').find()).sort((a1, a2) => {
  const data1 = new Date(a1.date)
  const data2 = new Date(a2.date)
  return data1 < data2 ? 1 : -1
})
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
