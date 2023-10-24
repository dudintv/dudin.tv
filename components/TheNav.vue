<template>
  <header class="header">
    <div id="feathers"></div>
    <div id="anim-selectors-container">
      <div class="anim-selector" v-for="navName in navNames" :id="`anim-${navName}`"></div>
    </div>
    <div id="nav-bg-container"><img id="nav-bg" src="/common/nav-bg.svg" /></div>
    <a class="logo" href="/"><img src="/common/dudintv-logo.svg" /></a>
    <nav class="nav flex justify-between w-full" @click="clickNav">
      <div class="first-links flex">
        <NuxtLink class="flex name-selector" v-for="item in menuItems[0]" :to="item.to" :id="item.id"
          ><img class="mr-2" :src="`/icons/${item.id}.svg`" width="18" style="fill: red; color: tomato" />{{
            item.title
          }}</NuxtLink
        >
      </div>
      <div class="second-links flex">
        <NuxtLink class="flex name-selector" v-for="item in menuItems[1]" :to="item.to" :id="item.id"
          ><img class="mr-2" :src="`/icons/${item.id}.svg`" width="18" style="fill: red; color: tomato" />{{
            item.title
          }}</NuxtLink
        >
      </div>
    </nav>
    <div id="menu-burger" @click="toggleMobileMenu" style="width: 96px; height: 96px"></div>
    <div id="menu-mobile" @click="hasMobileMenu = false">
      <div id="menu-leaf"></div>
      <div id="menu-mobile-links">
        <NuxtLink v-for="item in menuItems.flat()" :to="item.to">{{ item.title }}</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { AnimationItem } from 'lottie-web';
const nuxtApp = useNuxtApp();
const route = useRoute();

const currentNav = ref('scripts');
const navNames = ['scripts', 'articles', 'links', 'portfolio', 'contacts'];
const animSelectors = ref<{ id: string; anim: any }[]>([]);
const hasMobileMenu = ref(false);
const animMenuLeaf = ref<AnimationItem>();

const menuItems = [
  [
    {
      to: '/',
      id: 'scripts',
      title: 'Scripts',
    },
    {
      to: '/shaders',
      id: 'shaders',
      title: 'Shaders',
    },
    {
      to: '/articles',
      id: 'articles',
      title: 'Articles',
    },
  ],
  [
    {
      to: '/links',
      id: 'links',
      title: 'Links',
    },
    {
      to: '/portfolio',
      id: 'portfolio',
      title: 'Portfolio',
    },
    {
      to: '/contacts',
      id: 'contacts',
      title: 'Contacts',
    },
  ],
];

onMounted(() => {
  nuxtApp.$lottie.loadAnimation({
    container: document.getElementById('menu-burger'),
    name: 'menu-burger',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/menu-burger.json',
  });
  animMenuLeaf.value = nuxtApp.$lottie.loadAnimation({
    container: document.getElementById('menu-leaf'),
    name: 'menu-leaf',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/animations/menu-leaf.json',
  });

  const feather = document.getElementById('feathers');
  nuxtApp.$lottie.loadAnimation({
    container: feather,
    name: feather?.id,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/header-feathers.json',
  });
  Array.from(document.getElementsByClassName('anim-selector')).forEach((element) => {
    const lottieAnim = nuxtApp.$lottie.loadAnimation({
      container: element,
      name: element.id,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/animations/selected-menu-item.json',
    });
    lottieAnim.addEventListener('complete', function (anim: any) {
      if (lottieAnim.firstFrame + lottieAnim.currentFrame >= 300) {
        lottieAnim.currentFrame = -100;
      }
    });
    animSelectors.value.push({
      id: element.id,
      anim: lottieAnim,
    });
  });
  currentNav.value = route.name as string;
  if (currentNav.value === 'index') {
    currentNav.value = 'scripts';
  }
  setupPosAllAnimSelectors();
  window.onresize = setupPosAllAnimSelectors;
  setSelected(currentNav.value);
});

watch(currentNav, (newValue) => {
  setSelected(newValue);
});

watch(hasMobileMenu, (newValue) => {
  const menuMobile = document.getElementById('menu-mobile');
  const menuMobileLinks = document.getElementById('menu-mobile-links');
  const body = document.body || document.getElementsByTagName('body')[0];

  if (!menuMobile || !menuMobileLinks || !body) throw new Error("Can't find a html element");

  if (newValue) {
    menuMobile.style.display = 'block';
    menuMobileLinks.classList.add('show');
    (animMenuLeaf.value as any).playSegments([0, 50], true);
    body.setAttribute('style', 'overflow:hidden');
  } else {
    setTimeout(() => {
      menuMobile.style.display = 'none';
    }, 500);
    menuMobileLinks.classList.remove('show');
    animMenuLeaf.value?.playSegments([animMenuLeaf.value?.currentFrame || 0, 100], true);
    body.setAttribute('style', 'overflow:auto');
  }
});

function clickNav(navItem: { target: EventTarget | null }) {
  if ((navItem.target as any)?.id) {
    currentNav.value = (navItem.target as any).id;
  }
}
function setupPosAllAnimSelectors() {
  navNames.forEach((name) => {
    const animSelector = document.getElementById(`anim-${name}`);
    const navLink = document.getElementById(name);
    if (!animSelector || !navLink) throw new Error("Can't find anim selector element or nav link");

    animSelector.style.left = `${navLink.getBoundingClientRect().left - 80}px`;
  });
}
function setSelected(theName: string) {
  navNames.forEach((name) => {
    const navLink = document.getElementById(name);
    if (!navLink) throw new Error("Can't find nav link");

    if (theName === name) {
      navLink.classList.add('selected');
      playTakeAnim(name);
    } else {
      navLink.classList.remove('selected');
      playTakeoutAnim(name);
    }
  });
}
function playTakeAnim(name: string) {
  const animSelector = animSelectors.value.find((element) => element.id === `anim-${name}`)?.anim;
  if (animSelector?.isLoaded) {
    animSelector.playSegments([0, 200], true);
  } else {
    animSelector.addEventListener('data_ready', function () {
      animSelector.playSegments([0, 200], true);
    });
  }
}
function playTakeoutAnim(name: string) {
  const animSelector = animSelectors.value.find((element) => element.id === `anim-${name}`)?.anim;

  if (animSelector?.currentFrame > 0 && animSelector.currentFrame < 300) {
    animSelector.playSegments([animSelector.currentFrame, 302], true);
  }
}
function toggleMobileMenu() {
  hasMobileMenu.value = !hasMobileMenu.value;
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
