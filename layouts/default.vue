<template lang="pug">
  div
    TheNav
    nuxt
</template>

<script>
import TheNav from '~/components/TheNav'

export default {
  components: {
    TheNav
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
  font-size: 18px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html, body {
  background-color: #243B61;
  color: #D8DEE8;
}

h1 {
  font-family: Russia;
  font-weight: bold;
  font-size: 2.5rem;
}

h2 {
  font-family: Russia;
  font-weight: bold;
  font-size: 2rem;
}

h3 {
  font-family: Russia;
  font-weight: normal;
  font-size: 1.5rem;
}

pre, code {
  font-family: JetBrainsMono;
  font-weight: normal;
}

a {
  color: #78BEFF;
  text-decoration: none;
}
</style>
