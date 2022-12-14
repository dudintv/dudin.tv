<template lang="pug">
header.header
  #feathers
  #anim-selectors-container
    .anim-selector(v-for="navName in navNames" :id="`anim-${navName}`")
  #nav-bg-container
    img#nav-bg(src="/common/nav-bg.svg")
  a.logo(href="/")
    img(src="/common/dudintv-logo.svg")
  nav.nav.flex.justify-between.w-full(@click="clickNav")
    .first-links.flex
      NuxtLink#scripts.name-selector(to="/") Scripts
      NuxtLink#articles.name-selector(to="/articles") Articles
    .second-links.flex
      NuxtLink#links.name-selector(to="/links") Links
      NuxtLink#portfolio.name-selector(to="/portfolio") Portfolio
      NuxtLink#contacts.name-selector(to="/contacts") Contacts
  #menu-burger(@click="toggleMobileMenu" style="width: 96px; height: 96px;")
  #menu-mobile(@click="hasMobileMenu = false")
    #menu-leaf
    #menu-mobile-links
      NuxtLink(to="/") Scripts
      NuxtLink(to="/articles") Articles
      NuxtLink(to="/links") Links
      NuxtLink(to="/portfolio") Portfolio
      NuxtLink(to="/contacts") Contacts
</template>

<script setup>
const nuxtApp = useNuxtApp()
const route = useRoute()

const currentNav = ref('scripts')
const navNames = ['scripts', 'articles', 'links', 'portfolio', 'contacts']
const animSelectors = ref([])
const hasMobileMenu = ref(false)
const animMenuLeaf = ref({})

onMounted(() => {
  nuxtApp.$lottie.loadAnimation({
    container: document.getElementById('menu-burger'),
    name: 'menu-burger',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/menu-burger.json',
  })

  const feather = document.getElementById('feathers')
  nuxtApp.$lottie.loadAnimation({
    container: feather,
    name: feather.id,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/header-feathers.json',
  })
  Array.from(document.getElementsByClassName('anim-selector')).forEach(
    (element) => {
      const lottieAnim = nuxtApp.$lottie.loadAnimation({
        container: element,
        name: element.id,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/animations/selected-menu-item.json',
      })
      lottieAnim.addEventListener('complete', function (anim) {
        if (lottieAnim.firstFrame + lottieAnim.currentFrame >= 300) {
          lottieAnim.currentFrame = -100
        }
      })
      animSelectors.value.push({
        id: element.id,
        anim: lottieAnim,
      })
    }
  )
  currentNav.value = route.name
  if (currentNav.value === 'index') {
    currentNav.value = 'scripts'
  }
  setupPosAllAnimSelectors()
  window.onresize = setupPosAllAnimSelectors
  setSelected(currentNav.value)
})

watch(currentNav, (newValue) => {
  setSelected(newValue)
})

watch(hasMobileMenu, (newValue) => {
  const menuMobile = document.getElementById('menu-mobile')
  const menuMobileLinks = document.getElementById('menu-mobile-links')
  const body = document.body || document.getElementsByTagName('body')[0]
  if (newValue) {
    menuMobile.style.display = 'block'
    menuMobileLinks.classList.add('show')
    animMenuLeaf.value.playSegments([0, 50], true)
    body.style = 'overflow:hidden'
  } else {
    setTimeout(() => {
      menuMobile.style.display = 'none'
    }, 500)
    menuMobileLinks.classList.remove('show')
    animMenuLeaf.value.playSegments(
      [animMenuLeaf.value.currentFrame, 100],
      true
    )
    body.style = 'overflow:auto'
  }
})

function clickNav(obj) {
  if (obj.target.id) {
    currentNav.value = obj.target.id
  }
}
function setupPosAllAnimSelectors() {
  navNames.forEach((name) => {
    const animSelector = document.getElementById(`anim-${name}`)
    const navLink = document.getElementById(name)
    animSelector.style.left = `${navLink.getBoundingClientRect().left - 80}px`
  })
}
function setSelected(theName) {
  navNames.forEach((name) => {
    const navLink = document.getElementById(name)
    if (theName === name) {
      navLink.classList.add('selected')
      playTakeAnim(name)
    } else {
      navLink.classList.remove('selected')
      playTakeoutAnim(name)
    }
  })
}
function playTakeAnim(name) {
  const animSelector = animSelectors.value.find((element) => {
    return element.id === `anim-${name}`
  }).anim
  if (animSelector.isLoaded) {
    animSelector.playSegments([0, 200], true)
  } else {
    animSelector.addEventListener('data_ready', function () {
      animSelector.playSegments([0, 200], true)
    })
  }
}
function playTakeoutAnim(name) {
  const animSelector = animSelectors.value.find((element) => {
    return element.id === `anim-${name}`
  }).anim

  if (animSelector.currentFrame > 0 && animSelector.currentFrame < 300) {
    animSelector.playSegments([animSelector.currentFrame, 302], true)
  }
}
function toggleMobileMenu() {
  hasMobileMenu.value = !hasMobileMenu.value
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  // overflow-x: hidden;
}

#nav-bg-container {
  width: 100%;
  overflow: hidden;
}

#nav-bg {
  width: 100%;
  position: relative;
  z-index: 10;
}

.logo {
  position: absolute;
  top: 6%;
  left: 3%;
  width: 23.5%;
  z-index: 11000;
  transition: 0.2s transform ease;

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
      background-color: hsla(0, 0%, 100%, 0.1);
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
  right: 5vw;
  z-index: 900;
  width: 96px;
  height: 96px;

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
  z-index: 10000;
  display: none;
  background-color: rgba(0, 0, 0, 0.6);
  overscroll-behavior: contain;
}

#menu-leaf {
  width: 100%;
}

@keyframes show-links {
  from {
    opacity: 0;
    display: none;
  }
  1% {
    opacity: 0;
    display: flex;
  }
  to {
    opacity: 100;
    display: flex;
  }
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
    animation: show-links 0.3s linear;
  }

  a {
    font-size: 2rem;
    color: white;
  }
}

#anim-selectors-container {
  width: 100%;
  overflow: hidden;
  position: absolute;
  height: 200px;
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
  .nav,
  .anim-selector,
  #feathers {
    display: none;
  }

  #menu-burger {
    display: block;
  }

  #nav-bg {
    width: 200%;
    max-width: 200%;
  }

  .logo {
    width: 50%;
  }
}
</style>
