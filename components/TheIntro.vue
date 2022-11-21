<template lang="pug">
.intro
  p
    | Hi, my name is Dmitry Dudin and
    | I’m a real-time designer and script wrihter.
  p
    | I've prepared for you Vizrt scripts used and tested in real projects.
    | Feel free to
    |
    code [use OR rewrite OR expand AND combine]
    |
    | them!
  p
    | If you need an advice or something custom
    | you know how to
    nuxt-link.a(to="contacts") &nbsp;find me&nbsp;
    | ;)
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  left: 20%;
  top: -4vw;
  width: 70%;
  font-size: 1.2rem;

  code {
    font-size: 1rem;
  }
}

@media (max-width: 920px) {
  .intro {
    font-size: 1rem;
  }
}

@media (max-width: 680px) {
  .intro {
    font-size: 1rem;
    left: 11%;
    width: 80%;
  }
}
</style>
