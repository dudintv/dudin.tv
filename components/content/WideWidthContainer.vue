<template>
  <div class="wide-width-wrapper">
    <div class="wide-width-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
  display: flex;
  gap: 0.5rem;
}
</style>
