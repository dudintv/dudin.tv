<template>
  <div class="source-code">
    <div class="bg">
      <h2 class="my-2">Source code</h2>
      <details>
        <summary @click="getCode"><span class="title">show source&nbsp;code</span></summary>
        <code v-if="highlightedCode" v-html="highlightedCode"></code>
        <div v-else class="flex justify-center">
          <div class="loader" />
        </div>
      </details>
      <span class="tip">automatically pulls the latest version from my GitHub repository <br /><br /></span>
    </div>
    <a
      class="red-button home-page mx-auto"
      :href="`https://github.com/dudintv/vizartist-scripts/tree/master/${script.path}`"
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
        />
      </svg>
      <span>Script home page on GitHub</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Script } from '@/types';
import { getHighlighter } from 'shiki-es';

const props = defineProps({
  script: {
    type: Object as () => Script,
    required: true,
  },
});

const store = useStore();
const code = ref('');
const highlightedCode = ref('');

async function getCode() {
  if (!props.script.file || !props.script.path) return;

  code.value = (await store.getCode({ file: props.script.file, path: props.script.path })) || '';

  const highlighter = await getHighlighter({
    theme: 'nord',
    langs: ['vb'],
  });
  highlightedCode.value = highlighter.codeToHtml(code.value, { lang: 'vb' });
}
</script>

<style lang="scss" scoped>
.bg {
  background: #1e2e49;
  padding: 2rem;
}

details {
  background: linear-gradient(95.16deg, #0f336f 0%, #112545 100%);
  border: 1px dashed #405880;
  padding: 0;
  margin-bottom: 0.3rem;

  summary {
    position: relative;
    padding: 1rem;
    cursor: pointer;
    text-align: center;
    margin: 0;

    &:hover {
      background-color: hsla(0, 0%, 100%, 0.1);
    }

    .title {
      font-size: 1.5rem;
      line-height: 0.5em;
    }
  }

  .code {
    padding: 1rem;
  }
}

.tip {
  display: block;
  color: rgba(white, 0.5);
  width: 100%;
  text-align: center;
}

.home-page {
  transform: translateY(-50%);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  border: 4px solid #0f336f; /* Light grey */
  border-top: 4px solid #f3f3f3; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

:deep(pre code .line) {
  display: inline;
}
</style>
