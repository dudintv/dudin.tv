<template lang="pug">
section.article.container.mx-auto
  ContentDoc(v-slot="{ doc }")
    header.flex.justify-center
      h1
        | {{ doc.title }}
      span.icons(v-if="doc.tags")
        img.icon(v-for="tagName in tagNames(doc.tags)" :src="`/images/icons/${tagName}.png`")
    ContentRenderer(:value="doc")
</template>

<script setup>
function tagNames(tagsString) {
  return tagsString.split(' ');
}
</script>

<style lang="scss" scoped>
.article {
  padding-left: 5vw;
  padding-right: 5vw;
}

.icons {
  @apply relative inline-flex content-center flex-wrap mb-8 pr-4;
  top: 2px;
}

.icon {
  @apply ml-4 mt-2;
  width: 32px;
  height: 32px;
}
</style>
