<template>
  <div class="flex flex-wrap items-start cursor-pointer text-white font-bold py-4" id="scripts-filter">
    <div
      class="option px-3 py-1"
      v-for="option in options"
      :style="gradByName(option)"
      @click="select(option)"
      :class="{ selected: option === selectedOption }"
    >
      {{ option }}
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['filterChanged']);

const options = ['all', 'animation', 'link', 'logic', 'transformation', 'texture'];
const selectedOption = ref('all');

function gradByName(name: string): string {
  const gradient = useStore().gradients[name];
  return `background: linear-gradient(to bottom right, ${gradient[0]}, ${gradient[1]})`;
}

function select(name: string): void {
  selectedOption.value = name;
  emit('filterChanged', name);
}
</script>

<style lang="scss" scoped>
.option {
  position: relative;
  margin-top: 0.7rem;

  &::after {
    content: '';
    width: 100%;
    height: 4px;
    background-color: transparent;
    position: absolute;
    left: 0;
    bottom: -8px;
    transition: background-color 1s ease;
  }

  &:hover::after {
    background-color: white;
    transition: background-color 0.2s ease;
  }

  &.selected::after {
    background-color: white;
  }
}
</style>
