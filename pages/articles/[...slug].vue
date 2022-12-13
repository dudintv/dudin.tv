<template lang="pug">
section.article.container.mx-auto
  ContentDoc(v-slot="{ doc }")
    header.flex.justify-center
      h1
        | {{ doc.title }}
      span.icons(v-if="doc.tags")
        img.icon(v-for="tagName in tagNames(doc.tags)" :src="`/images/icons/${tagName}.png`")
    ContentRenderer(:value="doc")
</template>

<script setup>
function tagNames(tagsString) {
  return tagsString.split(" ");
}

// export default {
//   data() {
//     return {
//       slug: "",
//       markdownContent: {},
//       attributes: {},
//       icons: [],
//       date: "",
//     };
//   },
//   created() {
//     this.markdownContent = () =>
//       import("~/content/articles/" + this.$route.params.slug + ".md")
//         .then((md) => {
//           this.attributes = md.attributes;
//           this.icons = md.attributes.tags.split(" ");
//           const date = new Date(md.attributes.date);
//           this.date = date.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
//           return {
//             extends: md.vue.component,
//             components: {
//               MediaImage,
//               MediaYoutube,
//             },
//           };
//         })
//         .catch((e) => {
//           console.log("ERROR in markdown parsing", e);
//         });
//   },
// };
</script>

<style lang="scss" scoped>
.article {
  padding-left: 5vw;
  padding-right: 5vw;
}

.icons {
  @apply relative inline-flex content-center flex-wrap mb-8 pr-4;
  top: 2px;
}

.icon {
  @apply ml-4 mt-2;
  width: 32px;
  height: 32px;
}
</style>
