<template lang="pug">
.content
  TheIntro
  //- .under-construction.border.border-4.border-yellow-500.text-center.mx-4
  //-   h2.uppercase.text-yellow-300.mt-6.mb-2 Under construction
  //-   p <code>Copy</code> button doesn't work. Please use <code>Script home page</code> button.
  .flex.items-center.justify-around.flex-wrap
    ScriptsTheScriptsFilter.mx-4(@filterChanged="updateFilter")
    .flex.items-start.mx-4.mt-4
      img(src="/images/common/copy.svg")
      span.mx-2 —
      span.leading-tight
        strong Copy code in one-click.
        br
        i This button gets the latest version
        br
        i from my GitHub repo!
  section.flex.items-center.my-8
    .scripts-list
      ScriptsScriptItem(
        v-for="script in filteredScripts"
        :script="script"
        :key="script.title"
        )
</template>

<script setup lang="ts">
const currentFilter = ref('');

const scripts = (await queryContent('/scripts').find()).sort((a1, a2) => {
  const data1 = new Date(a1.date);
  const data2 = new Date(a2.date);
  return data1 < data2 ? 1 : -1;
});

const filteredScripts = computed(() => {
  if (!currentFilter.value || currentFilter.value === 'all') return scripts;
  return scripts.filter((script) => script.category === currentFilter.value);
});

function updateFilter(filterName: string): void {
  currentFilter.value = filterName;
}
</script>

<style>
.scripts-list {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 355px);
  grid-gap: 0.5rem;
  justify-content: center;
  width: 100%;
  max-width: 1500px;
}
</style>
