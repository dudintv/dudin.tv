<template>
  <div class="content">
    <TheIntro></TheIntro>
    <div class="flex items-center justify-around flex-wrap">
      <ScriptsTheScriptsFilter class="mx-4" @filterChanged="updateFilter"></ScriptsTheScriptsFilter>
      <div class="flex items-start mx-4 mt-4">
        <img src="/images/common/copy.svg" /><span class="mx-2">—</span>
        <span class="leading-tight">
          <strong>Copy code in one-click.</strong><br /><i>This button pulls the latest version</i><br /><i>
            from my GitHub repo!
          </i>
        </span>
      </div>
    </div>
    <section class="flex items-center my-8">
      <div class="scripts-list">
        <ScriptsScriptItem v-for="script in filteredScripts" :script="script" :key="script.title"></ScriptsScriptItem>
      </div>
    </section>
  </div>
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
