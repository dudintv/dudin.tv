<template>
  <div class="interface-description">
    <div class="interface-description-container">
      <div class="head-image">
        <svg
          class="head-svg"
          width="831"
          height="75"
          viewBox="0 0 831 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="head-path"
            d="M354.712 49.7283C246.838 3.55007 204.965 51.6352 89.7549 4.63478C46.1863 -13.1392 16.2228 22.3165 0 75H831C815.614 36.7859 777.103 16.2286 699.547 8.27721C586.448 -3.31826 462.586 95.9065 354.712 49.7283Z"
            fill="url(#head_linear)"
          />
          <defs>
            <linearGradient id="head_linear" x1="415.5" y1="0" x2="415.5" y2="75" gradientUnits="userSpaceOnUse">
              <stop stop-color="#5B219B" />
              <stop offset="1" stop-color="#183058" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="content">
        <div class="interface"><img :src="src" /></div>
        <div class="description">
          <div class="slot">
            <slot></slot>
          </div>
        </div>
      </div>
      <div class="tail-image">
        <svg
          class="tail-svg"
          width="747"
          height="54"
          viewBox="0 0 747 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="tail-path"
            d="M211.5 46C313 60.9999 396 51.9999 518 36.4998C640 20.9998 702.5 66.7229 746.5 7.24792e-05L-4.6933e-06 0.00013774C18.5 36.4998 110 31 211.5 46Z"
            fill="url(#tail_linear)"
          />
          <defs>
            <linearGradient
              id="tail_linear"
              x1="379.5"
              y1="54"
              x2="379.5"
              y2="3.39309e-05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5B219B" />
              <stop offset="1" stop-color="#183058" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    default: '',
  },
});

const src = computed(() => `/images${useRoute().path}/${props.image}`);
</script>

<style lang="scss" scoped>
.interface-description {
  position: relative;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100vw;
  padding: 0 2rem;
}

.interface-description-container {
  max-width: 1500px;
  margin: 0 auto;
}

.head-image,
.tail-image {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 4rem;
}

.head-svg,
.tail-svg {
  height: 100%;
}

.content {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'interface description';
  justify-content: center;
  position: relative;
  z-index: 20;
}

.interface {
  grid-area: interface;
  background: linear-gradient(to right, #7c7c7c 0%, #5a5a5a 100%);
  padding: 2rem 0 2rem 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.description {
  grid-area: description;
  background: linear-gradient(130deg, #375a95 0%, #244273 100%);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  flex-shrink: 1;
  min-width: 20rem;
}

@media (max-width: 1200px) {
  .interface-description {
    padding: 0 0rem;
  }
}

@media (max-width: 1024px) {
  .content {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'interface'
      'description';
  }

  .interface {
    padding: 2rem 2rem 0 2rem;
    justify-content: center;
    align-items: center;
  }
}
</style>
