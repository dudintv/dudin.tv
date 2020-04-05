<template lang="pug">
  .portfolio
    .hero.container.mx-auto.w-4_5.xl--w-3_5.mb-24
      .personal.flex.items-start.md--items-center.flex-col.md--flex-row
        img.w-48.mx-auto.md--mx-0(src="~/static/images/common/dudin-vizrt-certificate.png")
        p.my-8.md--mx-8
          | I have experience with Vizrt from&nbsp;2007
          br
          | and I have Vizrt Certified Pro Viz Artist Designer
      .details
        p.md--my-8 I use VizArtist, VizTrio, Director (VizContentPilot) and Multiplay for creating lowerthirds, fullscreen graphics and for robotic virtual studio with UX-perfect control panels as usefull as possible with scripts.

    h1.text-center.mb-16 Here is my portfolio ...
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

    h1.text-center.mt-16.mb-32 ... and my last projects
    .project-items.flex.flex-col.items-center
      ProjectItem(youtube="https://youtu.be/kfqtSZtMHbw")
        small 2019-2020
        h3 Stadium Zenit Arena
        p Set agument reality Vizrt graphics for a enormous stadium.
      ProjectItem(youtube="https://youtu.be/tFViRnyZ2F4" reverse)
        small June 2019
        h3 MuzTV Awards
        p Set Vizrt graphics for a long screen with incredible resolution 37760&nbsp;&times;&nbsp;140 pixels!
</template>

<script>
import PortfolioItem from '~/components/portfolio/PortfolioItem'
import ProjectItem from '~/components/portfolio/ProjectItem'

export default {
  components: {
    PortfolioItem,
    ProjectItem,
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    max-width: 1000px;
    padding: 0 auto;
    font-size: 1.2rem;
  }
</style>
