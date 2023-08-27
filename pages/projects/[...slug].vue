<template>
  <section class="article container mx-auto">
    <ContentDoc v-slot="{ doc }">
      <header class="flex justify-center mb-8">
        <h1>{{ doc.title }}</h1>
      </header>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </section>
</template>
