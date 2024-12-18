<script setup lang="ts"></script>

<template>
  <span class="script-input"><slot /></span>
</template>

<style lang="scss" scoped>
.script-input {
  @apply bg-slate-900 border border-2 border-gray-600 rounded-sm;
  @apply text-white text-sm text-nowrap;
  @apply focus:ring-blue-500 focus:border-blue-500 inline-block px-2 py-1;
}
</style>
