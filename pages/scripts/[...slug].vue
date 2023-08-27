<template>
  <div class="script-content container mx-auto">
    <ContentDoc v-slot="{ doc }">
      <ScriptsScriptHero :script="doc" />
      <ContentRenderer :value="doc" />
      <ScriptsSourceCode v-if="doc.file" :script="doc" />
    </ContentDoc>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.script-content {
  padding-inline: 5vw;
}
</style>
