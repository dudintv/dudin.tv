import lottie from 'lottie-web'

// export default ({ app }, inject) => {
//   inject('lottie', lottie)
// }

// export default defineNuxtPlugin((nuxtApp) => nuxtApp.provide('lottie', lottie))

export default defineNuxtPlugin((nuxtApp) =>
  nuxtApp.provide('lottie', () => lottie)
)
