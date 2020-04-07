<template lang="pug">
  .cource-code
    .bg
      h2.my-2 Source code
      details(v-if="code")
        summary
          span.title show source code
          span.tip automatically gets the latest version from my BitBucket repository
        .code
          vue-code-highlight(language="basic") {{ code }}
    a.red-button.home-page.mx-auto(:href="attributes.link" target="_blank")
      <svg class="icon svg-open-new-window" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z" fill="white"/>
      </svg>
      span Script home page on BitBucket
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism-tomorrow.css'
import 'prism-es6/components/prism-markup-templating'
import 'prism-es6/components/prism-basic'

export default {
  components: {
    VueCodeHighlight,
  },
  props: {
    attributes: {
      type: Object,
      default: () => {},
    },
    code: {
      type: String,
      default: () => (''),
    },
  },
}
</script>

<style lang="scss" scoped>
  .bg {
    background: #1E2E49;
    padding: 2rem;
  }

  details {
    background: linear-gradient(95.16deg, #0F336F 0%, #112545 100%);
    border: 1px dashed #405880;
    padding: 0;

    summary {
      position: relative;
      padding: 1rem;
      cursor: pointer;
      text-align: center;
      padding-bottom: 2rem;
      margin: 0;

      &:hover {
        background-color: hsla(0,0%,100%,0.1);
      }

      .title {
        font-size: 1.5rem;
      }

      .tip {
        position: absolute;
        left: 50%;
        top: 3rem;
        width: 90%;
        transform: translateX(-50%);
        color: rgba(white, 0.5);
        line-height: 1rem;
        font-size: .8rem;
      }
    }

    .code {
      padding: 1rem;
    }
  }

  .home-page {
    transform: translateY(-50%);
  }
</style>
