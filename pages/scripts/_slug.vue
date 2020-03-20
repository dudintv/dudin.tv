<template lang="pug">
  div
    component(:is="singleScriptComponent")
</template>

<script>
export default {
  async asyncData({ params }) {
    try {
      console.info(params.slug)
      let script = await import(`~/content/scripts/${params.slug}.md`)
      return {
        title: script.attributes.title,
        category: script.attributes.category,
        singleScriptComponent: script.vue.component
      }
    } catch (err) {
      console.debug(err)
      return false
    }
  }
};
</script>
