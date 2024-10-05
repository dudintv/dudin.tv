<script setup lang="ts">
const model = defineModel();
</script>

<template>
  <div class="w-full max-w-sm min-w-[400px]">
    <input v-model="model" type="text" class="string-input" placeholder="Type containers path..." required />
  </div>
</template>

<style lang="scss" scoped>
.string-input {
  @apply bg-slate-900 border border-gray-300 rounded-lg;
  @apply text-blue-100 text-sm;
  @apply focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5;
}
</style>
