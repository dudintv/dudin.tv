<template lang="pug">
.script-item
  nuxt-link.thumbnail.flex.items-center.justify-center.cursor-pointer(
    :to="script._path"
    :style="gradByName(script.category)"
    )
    img(:src="thumbnailUrl")
    .viz4-label(v-if="script.viz4")
      <svg width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 14.7531V26.7284L1.46809 23.3333L18.1277 11.9136V0L16.5957 3.39506L0 14.7531Z" fill="white"/>
        <path d="M9.25532 24.4444H4.78723L18.1277 15.1235V17.0988H21V24.4444H18.1277V30H9.25532V24.4444Z" fill="white"/>
      </svg>
    .hover
  .header.relative
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 340 82" class="header-bg">
      <path :fill="`url(#grad0_${script.category})`" d="M319 0s11 45 0 81c0 0-40-25-183-15C-8 77 9 0 9 0h310z"/>
      <path :fill="`url(#grad1_${script.category})`" d="M340 0v67s-62-9-169-1C63 73 0 68 0 68V0h340z"/>
      <defs>
        <linearGradient :id="`grad0_${script.category}`" x1="8" x2="324" y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" :stop-color="shadowGradByName(script.category)[0]"/>
          <stop offset="1" :stop-color="shadowGradByName(script.category)[1]"/>
        </linearGradient>
        <linearGradient :id="`grad1_${script.category}`" x1="0" x2="340" y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" :stop-color="darkGradByName(script.category)[0]"/>
          <stop offset="1" :stop-color="darkGradByName(script.category)[1]"/>
        </linearGradient>
      </defs>
    </svg>
    .title-group.w-full.flex.justify-between.items-end.absolute.top-0.left-0.px-6.py-1
      .title-and-category
        span.category(:style="colorByName(script.category)") {{ script.category }}
        nuxt-link(:to="script._path")
          h3.my-0.title {{ script.title }}
      .codes
        a.code(
          v-if="script.file"
          @click.prevent="copyCode(script)"
          ) &nbsp;
        nuxt-link.no-code(v-else :to="script._path") scripts<br/>inside
    p.description {{ script.description }}
</template>

<script setup lang="ts">
// @ts-ignore
import Color from 'color';
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import type { ParsedScript } from '@/types';
const store = useStore();

const props = defineProps({
  script: {
    type: Object as () => ParsedContent,
    default: () => ({}),
    validator(parsedContent: ParsedContent): parsedContent is ParsedScript {
      const scriptProps = ['category', 'title', 'description', 'path'];
      return scriptProps.every((scriptProp) => scriptProp in parsedContent);
    },
  },
});

const slug = computed(() => props.script._path);
const permalink = computed(() => `scripts/${slug.value}`);
const thumbnailUrl = computed(() => `/images${slug.value}/thumbnail.svg`);

function gradByName(name: string) {
  const gradient = store.gradients[name];
  return `background: linear-gradient(10deg, ${gradient[0]}, ${gradient[1]})`;
}
function darkGradByName(name: string) {
  const gradient = store.gradients[name];
  const start = Color(gradient[0]).darken(0.6).desaturate(0.5).hex();
  const end = Color(gradient[1]).darken(0.6).desaturate(0.5).hex();
  return [start, end];
}
function shadowGradByName(name: string) {
  const gradient = store.gradients[name];
  const start = Color(gradient[0]).darken(0.8).hex();
  const end = Color(gradient[1]).darken(0.8).hex();
  return [start, end];
}
function colorByName(name: string) {
  const gradient = store.gradients[name];
  return `color: ${gradient[0]}`;
}
function copyCode(script: ParsedScript) {
  store.copyCode({ file: script.file, path: script.path });
}
</script>

<style lang="scss" scoped>
.script-item {
  background-color: #455c82;
  max-width: 355px;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.2s ease-in-out;
  z-index: 10;
  transition: background-color 0.1s linear;

  &:hover {
    box-shadow: 0 7px 30px rgba(0, 0, 0, 0.4);
    z-index: 100;
    background-color: rgb(52, 81, 128);
  }
}

.thumbnail {
  position: relative;
  width: 355px;
  height: 200px;

  .hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    background-color: hsla(0, 100%, 100%, 0);
    transition: background-color 0.1s linear;
  }

  &:hover {
    .hover {
      background-color: hsla(0, 100%, 100%, 0.2);
    }
  }
}

.category {
  font-size: 0.8rem;
  font-weight: bold;
}

.title {
  line-height: 0.8em;
  color: white;
}

.code {
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 14px;
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 5px;
  margin-left: 10px;
  width: 24px;
  height: 28px;
  background: url(/images/common/copy.svg);
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
}

.no-code {
  display: block;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0rem 0.3rem 0.2rem 0.3rem;
  line-height: 0.8rem;
  font-size: 0.8rem;
  color: white;

  &:hover {
    border-color: white;
  }
}

.description {
  padding: 5px 30px 10px;
  line-height: 1.4em;
}

.viz4-label {
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  opacity: 0.6;
  mix-blend-mode: screen;
}
</style>
