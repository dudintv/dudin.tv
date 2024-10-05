<script setup lang="ts">
import type { FacadeContainer } from '@/types';

const { container } = defineProps<{ container: FacadeContainer }>();

const pluginsIcons: Record<string, string> = {
  script: 'script.png',
};
</script>

<template>
  <div class="scene-container" :class="container.highlighted ? 'highlighted-container' : 'regular-container'">
    <span>{{ container.name }}</span>
    <template v-if="container.plugins">
      <template v-for="(plugin, index) in container.plugins" :key="index">
        <img v-if="pluginsIcons[plugin]" :src="`/icons/${pluginsIcons[plugin]}`" alt="" class="w-4 h-4" />
        <span v-else class="px-1">{{ plugin }}</span>
      </template>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.scene-container {
  @apply flex items-center gap-1 border-2;
  @apply text-white text-xs px-2 py-0 rounded-md;
}

.regular-container {
  @apply border-transparent bg-slate-600;
}

.highlighted-container {
  @apply border-slate-400 bg-slate-800;
}
</style>
