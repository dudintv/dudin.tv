<template lang="pug">
  header.header
    //- img.feathers(src="~/static/images/common/nav-feathers.svg")
    #feathers
    .selector
    img.bg(src="~/static/images/common/nav-bg.svg")
    a.logo(href="#")
      img(src="~/static/images/common/dudintv-logo.svg")
    nav.nav.flex.justify-between.w-full
      .first-links
        nuxt-link.relative(to="scripts")
          #scripts.anim-selector
          span.name-selector Scripts
        nuxt-link.relative(to="articles")
          #articles.anim-selector
          span.name-selector Articles
      .second-links
        nuxt-link.relative(to="links")
          #links.anim-selector
          span.name-selector Links
        nuxt-link.relative(to="portfolio")
          #portfolio.anim-selector
          span.name-selector Portfolio
        nuxt-link.relative(to="contacts")
          #contacts.anim-selector
          span.name-selector Contacts
</template>

<script>
import lottie from 'lottie-web'

export default {
  mounted () {
    lottie.loadAnimation({
      container: document.getElementById('feathers'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/header-feathers.json'
    })
    lottie.loadAnimation({
      container: document.getElementById('scripts'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/selected-menu-item.json'
    })
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
  }

  .bg {
    width: 100%;
    position: relative;
    z-index: 100;
  }

  .logo {
    position: absolute;
    top: 6%;
    left: 3%;
    width: 23.5%;
    z-index: 200;
    transition: .2s transform ease;

    img {
      width: 100%;
    }

    &:hover {
      transform: translateX(0.2rem) scaleX(1.02);
    }
  }

  .nav {
    position: absolute;
    top: 25%;
    left: 40%;
    width: 50%;
    z-index: 50;

    a {
      padding: 1rem;

      &:hover {
        background-color: hsla(0,0,1,0.1);
      }
    }
  }

  @media (max-width: 1024px) {
    .nav {
      left: 30%;
      width: 70%;
    }
  }

  #feathers {
    position: absolute;
    left: 5%;
    top: 25%;
    width: 15%;
    z-index: 10;
  }

  .anim-selector {
    position: absolute;
    top: -200px;
    left: -80px;
    width: 270px;
    height: 283px;
    z-index: 5;
  }
  .name-selector {
    position: relative;
    z-index: 30;
  }
</style>
