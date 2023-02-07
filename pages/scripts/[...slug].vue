<template lang="pug">
.script-content.container.mx-auto
  ContentDoc(v-slot="{ doc }")
    ScriptsScriptHero(:script="doc")
    ContentRenderer(:value="doc")
    ScriptsSourceCode(v-if="doc.file" :script="doc")
</template>

<script setup lang="ts"></script>

<style scoped>
.script-content {
  padding-left: 5vw;
  padding-right: 5vw;
}
</style>
