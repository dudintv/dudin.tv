<template lang="pug">
img.my-4(:src="imageSrc" :class="{'transparent-background': transparent}" :style="imageStyle" :width="imageWidth")
</template>

<script setup>
const route = useRoute();

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  isFullPath: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 0,
  },
});

const imageSrc = computed(() => (props.isFullPath ? props.name : `/images${route.path}/${props.name}`));
const imageWidth = computed(() => (props.width > 0 ? props.width : false));
const imageStyle = computed(() => (props.center ? "margin-left: auto; margin-right: auto;" : ""));
</script>

<style scoped>
.transparent-background {
  background-image: url(/images/common/transparent-background.jpg);
  background-size: 25px 25px;
  margin: 0.5em 0;
}
</style>
