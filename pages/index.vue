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
      <TransitionGroup name="scripts" tag="div" class="scripts-list">
        <div v-for="script in filteredScripts" :key="script.title">
          <ScriptsScriptItem :script="script" />
        </div>
      </TransitionGroup>
    </section>
  </div>
</template>

<script setup lang="ts">
const currentFilter = ref('');

const scripts = (await queryContent('/scripts').find()).sort((a1, a2) => {
  return a1.title!.toLowerCase() > a2.title!.toLowerCase() ? 1 : -1;
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
  /* position: relative; */
}

.scripts-move,
.scripts-enter-active,
.scripts-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.scripts-enter-from,
.scripts-leave-to {
  opacity: 0;
  transform: scaleY(0.01);
}

.scripts-leave-active {
  position: absolute;
}

@media screen and (prefers-reduced-motion: reduce) {
  .scripts-move,
  .scripts-enter-active,
  .scripts-leave-active {
    transition: none;
  }

  .scripts-enter-from,
  .scripts-leave-to {
    transform: none;
  }
}
</style>
