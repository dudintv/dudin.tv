<template lang="pug">
  .intro
    p
      | Hi, my name is Dmitry Dudin and
      | I’m a vizrt designer and script developer.
    p
      | I prepared for you Vizrt scripts tested in real projects.
      | Feel free to (use OR rewrite OR expand AND combine) them!
    p
      | If you need an advice or something custom
      | you know how to
      nuxt-link.a(to="contacts") &nbsp;find me&nbsp;
      | ;)
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .intro {
    position: relative;
    left: 20%;
    top: -4vw;
    width: 70%;
    font-size: 2vw;

    p {
      padding-bottom: 1.5rem;
    }
  }

  @media (max-width: 920px) {
    .intro {
      font-size: 1rem;
    }
  }
</style>
