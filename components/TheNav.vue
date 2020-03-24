<template lang="pug">
  header.header
    //- img.feathers(src="~/static/images/common/nav-feathers.svg")
    #feathers
    .anim-selector(v-for="navName in navNames" :id="`anim-${navName}`")
    img.nav-bg(src="~/static/images/common/nav-bg.svg")
    a.logo(href="/")
      img(src="~/static/images/common/dudintv-logo.svg")
    nav.nav.flex.justify-between.w-full
      .first-links.flex
        nuxt-link#scripts.name-selector(to="/") Scripts
        nuxt-link#articles.name-selector(to="articles") Articles
      .second-links.flex
        nuxt-link#links.name-selector(to="links") Links
        nuxt-link#portfolio.name-selector(to="portfolio") Portfolio
        nuxt-link#contacts.name-selector(to="contacts") Contacts
</template>

<script>
import lottie from 'lottie-web'
import { gsap } from 'gsap'

const tl = gsap.timeline()

export default {
  data: () => ({
    currentNav: 'scripts',
    navNames: [
      'scripts',
      'articles',
      'links',
      'portfolio',
      'contacts'
    ],
    animSelectors: [],
  }),
  watch: {
    currentNav (newValue) {
      this.setSelected(newValue)
    }
  },
  mounted () {
    lottie.loadAnimation({
      container: document.getElementById('feathers'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/header-feathers.json'
    })
    Array.from(document.getElementsByClassName('anim-selector')).forEach(element => {
      this.animSelectors.push(
        {
          id: element.id,
          anim: lottie.loadAnimation({
            container: element,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: '/animations/selected-menu-item.json'
          })
        }
      )
    })
    this.setupPosAllAnimSelectors()
    window.onresize = this.setupPosAllAnimSelectors
    this.setSelected(this.currentNav)
  },
  methods: {
    setupPosAllAnimSelectors () {
      this.navNames.forEach(name => {
        const animSelector = document.getElementById(`anim-${name}`)
        const navLink = document.getElementById(name)
        animSelector.style.left = `${navLink.getBoundingClientRect().left - 80}px`
      })
    },
    setSelected (theName) {
      this.navNames.forEach(name => {
        const animSelector = document.getElementById(`anim-${name}`)
        const navLink = document.getElementById(name)
        if (theName === name) {
          animSelector.style.display = 'block'
          navLink.classList.add('selected')
          this.playTakeAnim(name)
        } else {
          animSelector.style.display = 'none'
          navLink.classList.remove('selected')
          this.playTakeoutAnim(name)
        }
      })
    },
    playTakeAnim (name) {
      const animSelector = this.animSelectors.find((element) => {
        return element.id === `anim-${name}`
      }).anim

      const proxy = { frame: 0 }
      tl.to(proxy, 4, {
        frame: 200,
        delay: 0.5,
        snap: {
          frame: 1
        },
        onUpdate () {
          animSelector.goToAndStop(Math.round(proxy.frame), true)
        },
      })
    },
    playTakeoutAnim (name) {
      const animSelector = this.animSelectors.find((element) => {
        return element.id === `anim-${name}`
      }).anim

      if (animSelector.currentFrame > 0) {
        const proxy = { frame: animSelector.currentFrame }
        tl.to(proxy, 2, {
          frame: 300,
          delay: 0.5,
          snap: {
            frame: 1
          },
          onUpdate () {
            animSelector.goToAndStop(Math.round(proxy.frame), true)
          },
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
  }

  .nav-bg {
    width: 100%;
    position: relative;
    z-index: 10;
  }

  .logo {
    position: absolute;
    top: 6%;
    left: 3%;
    width: 23.5%;
    z-index: 600;
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
    z-index: 200;

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
    top: -120px;
    left: 500px;
    width: 270px;
    height: 283px;
    z-index: 10;
  }
  .name-selector {
    position: relative;
    z-index: 300;
    &.selected {
      color: white;
    }
  }
</style>
