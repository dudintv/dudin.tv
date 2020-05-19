<template lang="pug">
  header.header
    //- img.feathers(src="~/static/images/common/nav-feathers.svg")
    #feathers
    .anim-selector(v-for="navName in navNames" :id="`anim-${navName}`")
    img.nav-bg(src="~/static/images/common/nav-bg.svg")
    a.logo(href="/")
      img(src="~/static/images/common/dudintv-logo.svg")
    nav.nav.flex.justify-between.w-full(@click="clickNav")
      .first-links.flex
        nuxt-link#scripts.name-selector(to="/") Scripts
        nuxt-link#articles.name-selector(to="/articles") Articles
      .second-links.flex
        nuxt-link#links.name-selector(to="/links") Links
        nuxt-link#portfolio.name-selector(to="/portfolio") Portfolio
        nuxt-link#contacts.name-selector(to="/contacts") Contacts
    #menu-burger(@click="toggleShowMobileMenu")
    #menu-mobile(@click="showMobileMenu = false")
      #menu-leaf
      #menu-mobile-links
        nuxt-link(to="/") Scripts
        nuxt-link(to="/articles") Articles
        nuxt-link(to="/links") Links
        nuxt-link(to="/portfolio") Portfolio
        nuxt-link(to="/contacts") Contacts
</template>

<script>
import lottie from 'lottie-web'

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
    showMobileMenu: false,
    animMenuLeaf: {},
  }),
  watch: {
    currentNav (newValue) {
      this.setSelected(newValue)
    },
    showMobileMenu (newValue) {
      const menuMobile = document.getElementById('menu-mobile')
      const menuMobileLinks = document.getElementById('menu-mobile-links')
      if (newValue) {
        menuMobile.style.display = 'block'
        menuMobileLinks.classList.add('show')
        this.animMenuLeaf.playSegments([0, 50], true)
      } else {
        setTimeout(() => { menuMobile.style.display = 'none' }, 500)
        menuMobileLinks.classList.remove('show')
        this.animMenuLeaf.playSegments([this.animMenuLeaf.currentFrame, 100], true)
      }
    }
  },
  mounted () {
    lottie.loadAnimation({
      container: document.getElementById('menu-burger'),
      name: 'menu-burger',
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/menu-burger.json'
    })
    this.animMenuLeaf = lottie.loadAnimation({
      container: document.getElementById('menu-leaf'),
      name: 'menu-leaf',
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/animations/menu-leaf.json'
    })

    const feather = document.getElementById('feathers')
    lottie.loadAnimation({
      container: feather,
      name: feather.id,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/header-feathers.json'
    })
    Array.from(document.getElementsByClassName('anim-selector'))
      .forEach(element => {
        const lottieAnim = lottie.loadAnimation({
          container: element,
          name: element.id,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: '/animations/selected-menu-item.json',
        })
        lottieAnim.addEventListener('complete', function (anim) {
          if (lottieAnim.firstFrame + lottieAnim.currentFrame >= 300) { lottieAnim.currentFrame = -100 }
        })
        this.animSelectors.push(
          {
            id: element.id,
            anim: lottieAnim
          }
        )
      })
    this.currentNav = this.$nuxt.$route.name
    if (this.currentNav === 'index') { this.currentNav = 'scripts' }
    this.setupPosAllAnimSelectors()
    window.onresize = this.setupPosAllAnimSelectors
    this.setSelected(this.currentNav)
  },
  methods: {
    clickNav (obj) {
      if (obj.target.id) {
        this.currentNav = obj.target.id
      }
    },
    setupPosAllAnimSelectors () {
      this.navNames.forEach(name => {
        const animSelector = document.getElementById(`anim-${name}`)
        const navLink = document.getElementById(name)
        animSelector.style.left = `${navLink.getBoundingClientRect().left - 80}px`
      })
    },
    setSelected (theName) {
      this.navNames.forEach(name => {
        const navLink = document.getElementById(name)
        if (theName === name) {
          navLink.classList.add('selected')
          this.playTakeAnim(name)
        } else {
          navLink.classList.remove('selected')
          this.playTakeoutAnim(name)
        }
      })
    },
    playTakeAnim (name) {
      const animSelector = this.animSelectors.find((element) => {
        return element.id === `anim-${name}`
      }).anim
      if (animSelector.isLoaded) {
        animSelector.playSegments([0, 200], true)
      } else {
        animSelector.addEventListener('data_ready', function () {
          animSelector.playSegments([0, 200], true)
        })
      }
    },
    playTakeoutAnim (name) {
      const animSelector = this.animSelectors.find((element) => {
        return element.id === `anim-${name}`
      }).anim

      if (animSelector.currentFrame > 0 && animSelector.currentFrame < 300) {
        animSelector.playSegments([animSelector.currentFrame, 302], true)
      }
    },
    toggleShowMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu
    }
  },
}
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    overflow-x: hidden;
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
    z-index: 2000;
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

  #feathers {
    position: absolute;
    left: 5%;
    top: 25%;
    width: 15%;
    z-index: 10;
  }

  #menu-burger {
    display: none;
    position: absolute;
    top: 15vw;
    right: 15vw;
    z-index: 900;

    &:hover {
      transform: scale(1.2);
    }
  }

  #menu-mobile {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: none;
    background-color: rgba(0,0,0,0.6);
  }

  #menu-leaf {
    width: 100%;
  }

  @keyframes show-links {
    from {opacity: 0; display: none;}
    1% {opacity: 0; display: flex;}
    to {opacity: 100; display: flex;}
  }

  #menu-mobile-links {
    position: absolute;
    top: 18vw;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: center;
    z-index: 1200;

    &.show {
      display: flex;
      animation: show-links .3s linear;
    }

    a {
      font-size: 2rem;
      color: white;
    }
  }

  .anim-selector {
    position: absolute;
    top: -140px;
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

  @media (max-width: 1024px) {
    .nav {
      left: 30%;
      width: 70%;
    }
  }

  @media (max-width: 680px) {
    .nav, .anim-selector, #feathers {
      display: none;
    }

    #menu-burger {
      display: block;
    }

    .nav-bg {
      width: 200%;
      max-width: 200%;
    }

    .logo {
      width: 50%;
    }
  }
</style>
