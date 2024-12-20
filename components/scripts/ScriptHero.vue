<template>
  <div class="script-hero">
    <div class="thumbnail">
      <div class="thumbnail-splash">
        <svg width="376" height="404" viewBox="0 0 376 404" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.2905 0C27.2905 0 5.2906 204 138.791 163.5C272.291 123 381.291 146 375.791 286.5C370.291 427 193.79 428.5 83.2906 359C-27.358 289.406 -7.20937 112 27.2905 0Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="31.7905"
              y1="-4.99997"
              x2="378.791"
              y2="399"
              gradientUnits="userSpaceOnUse"
            >
              <stop :stop-color="gradColorBegin" />
              <stop offset="1" :stop-color="gradColorEnd" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <media-image class="thumbnail-image" name="thumbnail.svg"></media-image>
    </div>
    <div class="content">
      <div class="scripts-and-category">
        <span class="scripts">scripts >&nbsp;</span
        ><span class="category" :style="{ color: gradColorBegin }">{{ script.category }}</span>
      </div>
      <div class="title flex">
        <h1 class="title-text text-left">{{ script.title }}</h1>
        <a class="red-button copy-code" v-if="script.file" @click="copyCode()"
          ><svg
            class="icon svg-copy-icon"
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2632 0.5H1.89474C0.847895 0.5 0 1.35432 0 2.40909V15.7727H1.89474V2.40909H13.2632V0.5ZM16.1053 4.31818H5.68421C4.63737 4.31818 3.78947 5.1725 3.78947 6.22727V19.5909C3.78947 20.6457 4.63737 21.5 5.68421 21.5H16.1053C17.1521 21.5 18 20.6457 18 19.5909V6.22727C18 5.1725 17.1521 4.31818 16.1053 4.31818ZM16.1053 19.5909H5.68421V6.22727H16.1053V19.5909Z"
              fill="#E4D4E9"
            /></svg
          ><span>Copy&nbsp;script</span>
          <div class="tip">
            <svg
              class="icon svg-tip-arrow"
              width="43"
              height="56"
              viewBox="0 0 43 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6463 54.3536C11.8415 54.5488 12.1581 54.5488 12.3534 54.3536L15.5354 51.1716C15.7306 50.9763 15.7306 50.6597 15.5354 50.4645C15.3401 50.2692 15.0235 50.2692 14.8283 50.4645L11.9998 53.2929L9.1714 50.4645C8.97614 50.2692 8.65956 50.2692 8.4643 50.4645C8.26904 50.6597 8.26904 50.9763 8.4643 51.1716L11.6463 54.3536ZM37.9997 5.5C28.4987 5.5 21.8532 11.1704 17.6113 20.0342C13.3781 28.8796 11.4998 40.9644 11.4998 54L12.4998 54C12.4998 41.0356 14.3715 29.1204 18.5133 20.4658C22.6464 11.8296 29.0008 6.5 37.9997 6.5L37.9997 5.5Z"
                fill="#C488ED"
              />
            </svg>
            <div class="tip-text">
              <strong>Copy code in one-click.</strong><br /><i>This button pulls the latest version</i><br /><i>
                from my GitHub repo!
              </i>
            </div>
          </div></a
        >
      </div>
      <p class="description">{{ script.description }}</p>
      <div class="buttons">
        <a
          class="red-button home-page"
          :href="`${runtimeConfig.public.github.scriptsUrl}${script.path}`"
          target="_blank"
          ><svg
            class="icon svg-open-new-window"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
              fill="white"
            /></svg
          ><span>Script home page on GitHub</span></a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Script } from '@/types';
const store = useStore();
const runtimeConfig = useRuntimeConfig();

const props = defineProps({
  script: {
    type: Object as () => Script,
    required: true,
  },
});

const examples = [] as any[];

const gradColorBegin = computed(() => store.gradients[props.script.category]?.[0] || '');
const gradColorEnd = computed(() => store.gradients[props.script.category]?.[1] || '');

function copyCode() {
  store.copyCode(props.script);
}
</script>

<style lang="scss" scoped>
.script-hero {
  display: flex;
  padding-right: 1rem;
  margin-bottom: -7rem;
}

.thumbnail {
  position: relative;
  top: -13rem;
  display: inline-block;
  padding-right: 4rem;

  .thumbnail-image {
    position: absolute;
    top: 14rem;
    left: 12rem;
    transform: translateY(-50%) translateX(-50%);
  }
}

@media (max-width: 1024px) {
  .script-hero {
    flex-direction: column;
    padding: 0 4rem 0 1rem;
    margin-bottom: 1rem;
  }

  .thumbnail {
    top: -9rem;
  }
}

@media (max-width: 640px) {
  .script-hero {
    padding: 0 0rem;
  }

  .thumbnail {
    top: -6rem;
    left: -2rem;
  }

  .copy-code {
    display: none;
  }
}

.content {
  position: relative;
  z-index: 1000;
  top: -2rem;
}

.scripts-and-category {
  font-size: 0.8rem;
  font-weight: bold;

  .scripts {
    color: #c9b9f8;
  }

  .category {
    color: #c488ed;
  }
}

.title {
  padding-top: 1rem;

  .title-text {
    margin-right: 1rem;
    min-width: 7rem;
  }

  .copy-code {
    position: relative;
    top: -4px;
  }
}

.buttons {
  margin-top: 3rem;
}
</style>
