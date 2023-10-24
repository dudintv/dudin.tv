<script setup lang="ts">
import { type Shader } from '@/types';

const props = defineProps({
  shader: {
    type: Object as PropType<ParsedContent>,
    default: () => ({}),
  },
});

const store = useStore();
const code = ref('');
const shaderParams = ref<Shader>(null);

async function getCode() {
  if (!props.shader.file || !props.shader.path) return;

  code.value = (await store.getCode({ path: props.shader.path, file: props.shader.file })) || '';
}

async function buildShaderInterface() {
  await getCode();
  shaderParams.value = store.parseShader(code.value);
}

onMounted(async () => {
  await buildShaderInterface();
});
watch(props.shader, async () => {
  await buildShaderInterface();
});
</script>

<template>
  <h3>Shader interface parameters</h3>
  <ul v-if="shaderParams" class="mb-16">
    <li v-for="param in shaderParams" :key="param.name">{{ param.type }}: {{ param.label }}</li>
  </ul>
  <div v-else class="bg flex justify-center">Loading the shader code...</div>
</template>

<style lang="scss" scoped>
.bg {
  background: #1e2e49;
  padding: 2rem;
}
</style>
