<template>
  <div class="content -mt-16">
    <div class="flex items-center justify-end flex-wrap">
      <div class="flex items-start mx-8">
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
        <ScriptsScriptItem v-for="shader in shaders" :script="shader" :key="shader.title"></ScriptsScriptItem>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const shaders = (await queryContent('/shaders').find()).sort((a1, a2) => {
  const data1 = new Date(a1.date);
  const data2 = new Date(a2.date);
  return data1 < data2 ? 1 : -1;
});
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
