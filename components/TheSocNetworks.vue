<template>
  <div class="social-networks relative flex justify-center items-end">
    <img class="ellipse-shadow" src="/common/ellipse-shadow.svg" />
    <div class="content flex flex-col justify-center items-center">
      <div class="links w-full flex justify-center items-center relative">
        <a
          class="cursor-pointer"
          id="youtube"
          href="https://www.youtube.com/channel/UCNAcWv6Eybjq7BCz7JHkxiw"
          target="_blank"
          @mouseover="hover('youtube')"
          @mouseleave="leave('youtube')"
        />
        <a
          class="cursor-pointer mx-4"
          id="facebook"
          href="https://www.facebook.com/dudintv"
          target="_blank"
          @mouseover="hover('facebook')"
          @mouseleave="leave('facebook')"
        />
        <a
          class="cursor-pointer"
          id="linkedin"
          href="https://www.linkedin.com/in/dudintv"
          target="_blank"
          @mouseover="hover('linkedin')"
          @mouseleave="leave('linkedin')"
        />
      </div>
      <span class="mt-2 mb-10 font-bold">dudin.tv</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AnimationItem } from 'lottie-web';
type ServiceName = 'youtube' | 'facebook' | 'linkedin';

const nuxtApp = useNuxtApp();

const data = reactive({
  youtube: null as AnimationItem | null,
  facebook: null as AnimationItem | null,
  linkedin: null as AnimationItem | null,
  youtube_hover: false,
  facebook_hover: false,
  linkedin_hover: false,
});

onMounted(() => {
  data.youtube = loadLottie('youtube');
  data.facebook = loadLottie('facebook');
  data.linkedin = loadLottie('linkedin');
});

function loadLottie(name: ServiceName): AnimationItem {
  const animation: AnimationItem = nuxtApp.$lottie.loadAnimation({
    container: document.getElementById(name),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: `/animations/dudintv-${name}.json`,
  });
  animation.addEventListener('loopComplete', () => !data[`${name}_hover`] && animation.stop());
  return animation;
}

function hover(name: ServiceName): void {
  data[name]?.play();
  data[`${name}_hover`] = true;
}

function leave(name: ServiceName): void {
  data[`${name}_hover`] = false;
}
</script>

<style lang="scss" scoped>
.social-networks {
  height: 300px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.052698) 17.71%,
    rgba(0, 0, 0, 0.196154) 34.9%,
    rgba(0, 0, 0, 0.5) 68.75%,
    rgba(0, 0, 0, 0.137363) 83.33%,
    rgba(0, 0, 0, 0.05) 90.62%,
    rgba(0, 0, 0, 0) 100%
  );
}
.links {
  a {
    width: 52px;
  }
}
.ellipse-shadow {
  width: 500px;
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
}
</style>
