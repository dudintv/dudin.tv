<template lang="pug">
  div
    TheNav
    nuxt
    TheSocNetworks
</template>

<script>
import TheNav from '~/components/TheNav'
import TheSocNetworks from '~/components/TheSocNetworks'

export default {
  components: {
    TheNav,
    TheSocNetworks,
  }
}
</script>

<style lang="scss">
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
  font-weight: normal;
  font-size: 2.5rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
}

h2 {
  font-family: Russia;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 1rem;
}

h3 {
  font-family: Russia;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
}

/* headers after paragraphs */
p + h2, p + h3 {
  margin-top: 2rem;
}

/* headers after images */
img + h2, img + h3 {
  margin-top: 4rem;
}

pre, code {
  font-family: JetBrainsMono;
  font-weight: normal;
}

a {
  color: #78BEFF;
  text-decoration: none;
}

p {
  margin-bottom: 1rem;
}

/* ************************************************** */

.red-button {
  cursor: pointer;
  position: relative;
  display: flex;
  padding: 12px 18px;
  width: fit-content;
  height: fit-content;
  color: white;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(53, 6, 6, 0.15) 100%), linear-gradient(101.31deg, #6C3392 0%, #79071C 100%);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transition: background .5s ease;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.27) 0%, rgba(53, 6, 6, 0.15) 100%), linear-gradient(101.31deg, #782EA9 0%, #960A24 100%);
    transition: opacity .2s ease-out;
    z-index: 2;
    opacity: 0;
  }

  &:hover:after {
    opacity: 1;
  }

  .icon {
    position: relative;
    z-index: 3;
    margin-top: 0.2rem;
    margin-right: 1rem;
  }

  span, strong {
    position: relative;
    z-index: 3;
  }

  .tip {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    padding-bottom: 1rem;
    width: max-content;
    line-height: 1.3rem;
    color: #A998CC;

    .svg-tip-arrow {
      position: relative;
      top: 7px;
      left: 7px;
    }
  }
}
</style>
