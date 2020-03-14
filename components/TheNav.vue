<template lang="pug">
  header.header
    img.feathers(src="~/static/images/common/nav-feathers.svg")
    .selector
    img.bg(src="~/static/images/common/nav-bg.svg")
    a.logo(href="#")
      img(src="~/static/images/common/dudintv-logo.svg")
    nav.nav.flex.justify-between.w-full
      .first-links
        nuxt-link(to="scripts") Scripts
        nuxt-link(to="articles") Articles
      .second-links
        nuxt-link(to="links") Links
        nuxt-link(to="portfolio") Portfolio
        nuxt-link(to="contacts") Contacts
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
  }

  .bg {
    width: 100%;
    position: relative;
    z-index: 20;
  }

  .logo {
    position: absolute;
    top: 6%;
    left: 3%;
    width: 23.5%;
    z-index: 30;
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

  .feathers {
    position: absolute;
    left: 5%;
    top: 25%;
    width: 15%;
    z-index: 10;
  }
</style>
