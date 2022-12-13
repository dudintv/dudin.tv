<template lang="pug">
section.article.container.mx-auto
  ContentDoc(v-slot="{ doc }")
    header.flex.justify-center.mb-8
      h1
        | {{ doc.title }}
    ContentRenderer(:value="doc")
</template>
