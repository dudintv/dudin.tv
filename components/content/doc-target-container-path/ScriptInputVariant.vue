<script setup lang="ts">
defineProps({
  query: {
    type: [String, Array] as PropType<string | string[]>,
    default: '',
  },
  containers: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="flex flex-col gap-2 hover:bg-slate-600/20 p-2 rounded">
    <div class="flex gap-2 items-center">
      <template v-if="typeof query === 'string'">
        <ScriptInterfaceInput>{{ query }}</ScriptInterfaceInput>
      </template>
      <template v-else-if="Array.isArray(query)">
        <template v-for="(q, index) in query" :key="q">
          <ScriptInterfaceInput>
            {{ q }}
          </ScriptInterfaceInput>
          {{ index === query.length - 1 ? '' : ' or ' }}
        </template>
      </template>
      <span> — </span>
      <div class="text-base"><slot /></div>
    </div>
    <div class="flex gap-2 flex-wrap items-center">
      <SelectedArrow class="ml-2 opacity-50" />
      <ContainerElement :container="container" v-for="(container, index) in containers" :key="index" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
