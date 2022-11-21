<template lang="pug">
.wide-width-wrapper
  .wide-width-container
    slot
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wide-width-wrapper {
  position: relative;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100vw;
  padding: 0 2rem;
}

.wide-width-container {
  max-width: 1500px;
  margin: 0 auto;
}
</style>
