<template lang="pug">
  div.nuxt-layout
    TheNav
    nuxt.nuxt-page
    TheSocNetworks
    #copy-code
</template>

<script>
import lottie from 'lottie-web'

import TheNav from '~/components/TheNav'
import TheSocNetworks from '~/components/TheSocNetworks'

export default {
  components: {
    TheNav,
    TheSocNetworks,
  },
  mounted () {
    const animation = lottie.loadAnimation({
      container: document.getElementById('copy-code'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/animations/copy-code.json'
    })
    animation.addEventListener('complete', () => {
      console.log('animation = ', animation)
      animation.wrapper.style = 'display: none'
    })
    this.$store.commit('saveCopyCodeAnim', animation)
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

body {
  overflow-x: hidden;
  overflow-y: auto;
}

h1 {
  font-family: Russia;
  font-weight: normal;
  font-size: 2.5rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

h2 {
  font-family: Russia;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
  text-align: center;
}

h3 {
  font-family: Russia;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

hr {
  border: 1px solid rgba(255,255,255,.2);
  margin-top: 2rem;
  margin-bottom: 2rem;
}

code {
  background-color: #2d2d2d;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  overflow: auto;
  line-height: 1rem;
  max-width: 100%;
  // display: inline-flex;
  overflow-inline: scroll;
  overflow-wrap: break-word;
}

code, pre, code[class*="language-"], pre[class*="language-"] {
  font-family: JetBrainsMono !important;
  font-weight: normal;
  font-variant-ligatures: none;
}

a {
  color: #78BEFF;
  text-decoration: none;
  position: relative;

  &.a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0%;
    height: 1px;
    background-color: #78BEFF;
    transition: width .6s ease;
  }

  &.a:hover::after {
    width: 100%;
    transition: width .3s ease;
  }
}

p {
  margin-bottom: 1rem;
}

blockquote {
  border-left: 3px solid #78BEFF;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1rem 1rem 0.3rem 1.5rem;
  margin-bottom: 1rem;
  font-style: italic;
}

ul {
  li {
    // list-style: disc;
    // list-style-position: outside;
    list-style: none;
    padding-bottom: .5rem;
  }

  li:before {
    content: "\2022";
    font-size: 1.5rem;
    line-height: 1rem;
    font-weight: bold;
    color: #78BEFF;
    display: inline-block;
    width: 1.2rem;
    margin-left: -1.2rem;
    position: relative;
    top: .2rem;
  }
}

@media (max-width: 500px) {
  ul {
    margin-left: 1.1rem;
  }
}

ol {
  counter-reset: olCounter;
  margin-top: 1rem;
  margin-bottom: 1rem;

  li {
    padding-left: 60px;
    padding-bottom: 20px;
    position: relative;
    min-height: 50px;
  }

  li:before {
    counter-increment: olCounter;
    content:counter(olCounter);
    color: #78BEFF;
    display: inline-block;
    text-align: center;
    border: 1px solid #78BEFF;
    border-radius: 50%;
    line-height: 37px;
    width: 40px;
    height: 40px;
    transition: background-color .2s linear;
    position: absolute;
    top: -5px;
    left: 0;
  }

  li:hover:before {
    background-color: black;
  }
}

details {
  background: linear-gradient(95.16deg, #0F336F 0%, #112545 100%);
  border: 1px dashed #405880;
  padding: 2rem 2rem 0;
  margin-bottom: 1rem;

  &[open] {
    padding-bottom: 20px;

    summary {
      margin-bottom: 20px;
      background-color: hsla(0, 0%, 100%, .03);
    }
  }

  summary {
    position: relative;
    margin: -2rem -2rem 0;
    padding: 1rem;
    cursor: pointer;

    &:hover {
      background-color: hsla(0, 0%, 100%, .05);
    }
  }
}

table {
  margin-top: 2rem;
  margin-bottom: 2rem;

  th {
    text-align: left;
    font-weight: normal;
    color: hsla(0, 0%, 100%, .5);
    border-bottom: 1px solid #405880;
    padding-bottom: .5rem;
  }

  td {
    padding-top: .5rem;
    padding-right: 1rem;
    vertical-align: top;
  }
}

@media (max-width: 600px) {
  table {
    display: block;
    max-width: 100%;

    tr {
      padding-bottom: 2rem;
    }

    td {
      padding-right: 0;
    }

    tbody, tr, th, td {
      display: block;
      max-width: 100%;
    }

    thead {
      display: block;
      width: 100%;
    }
  }
}

/* ************************************************** */

#copy-code {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5000;
  display: none;
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

.nuxt-page {
  min-height: 80vh;
}
</style>
