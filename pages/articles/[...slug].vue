<template>
  <section class="article container mx-auto">
    <ContentDoc v-slot="{ doc }">
      <header class="flex justify-center">
        <h1>{{ doc.title }}</h1>
        <span class="icons" v-if="doc.tags">
          <img class="icon" v-for="tagName in tagNames(doc.tags)" :src="`/images/icons/${tagName}.png`" />
        </span>
      </header>
      <ContentRenderer :value="doc"></ContentRenderer>
    </ContentDoc>
  </section>
</template>

<script setup lang="ts">
function tagNames(tagsString: string) {
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
