<script setup lang="ts">
import type { Scene, Container } from '@/types';
import { useSceneTree } from '@/composables/sceneTree';

const vizScene: Scene = {
  name: 'SceneTree',
  rootContainers: [
    {
      name: 'object',
      children: [
        { name: 'background' },
        { name: 'title' },
        { name: 'element_one' },
        { name: 'element_two' },
        { name: 'logic', plugins: ['script'] },
        {
          name: 'items',
          children: [
            {
              name: 'item1',
              children: [{ name: 'back' }, { name: 'value' }],
            },
            {
              name: 'item2',
              children: [{ name: 'back' }, { name: 'value' }],
            },
            {
              name: 'item3',
              children: [{ name: 'back' }, { name: 'value' }],
            },
          ],
        },
        { name: 'element_three' },
        { name: 'footer', children: [{ name: 'back' }, { name: 'text' }] },
      ],
    },
  ],
};

const { containers, enrichedContainers, getContainersByQuery } = useSceneTree(vizScene);
const starterContainer: Container = containers.value.find((container) => container.name === 'logic')!;
const selectedContainers = ref<Set<Container>>(new Set());
const query = ref('this');

function findByQuery(queryString: string) {
  return getContainersByQuery(queryString, starterContainer);
}

watch(query, () => {
  selectedContainers.value = new Set(findByQuery(query.value));
});
</script>

<template>
  <h1>Doc for target containers path</h1>
  <div class="flex gap-4 md:gap-6 lg:gap-8">
    <div class="flex flex-col gap-1 items-start sticky top-12 h-fit">
      <div v-for="enrichedContainer in enrichedContainers" :key="enrichedContainer.name" class="flex">
        <div class="inline-block" :style="`width: ${(enrichedContainer)?.nesting! * 20}px`">&nbsp;</div>
        <ContainerElement
          :container="(enrichedContainer)!"
          :highlighted="selectedContainers.has(enrichedContainer.container)"
        />
      </div>
    </div>
    <div class="flex flex-col gap-3 text-xs">
      <!-- <div v-for="container in containersList" :key="container.name">
        {{ getContainerDebugInfo(container) }}
      </div> -->
      Type your query, or hover on the elements below:
      <StringInput v-model="query" />
      <!-- <div v-for="container in highlightedContainers" :key="container.name">
        {{ getContainerDebugInfo(container) }}
      </div> -->

      <h3>General selectors</h3>
      <ScriptInputVariant :query="['.', 'this']" :containers="findByQuery('.')" @mouseover="query = '.'">
        the current container (where the script is placed)
      </ScriptInputVariant>
      <ScriptInputVariant :query="['..', './..']" :containers="findByQuery('..')" @mouseover="query = '..'">
        get parent
      </ScriptInputVariant>
      <ScriptInputVariant query="/object" :containers="findByQuery('/object')" @mouseover="query = '/object'">
        “/” defines the root of the scene tree (it works only in the beginning of the query!)
      </ScriptInputVariant>
      <ScriptInputVariant query="*" :containers="findByQuery('*')" @mouseover="query = '*'">
        select all containers in the current sub-tree level
      </ScriptInputVariant>
      <ScriptInputVariant query="/**" :containers="findByQuery('/**')" @mouseover="query = '/**'">
        select all containers in the tree
      </ScriptInputVariant>
      <ScriptInputVariant query="items/*" :containers="findByQuery('items/*')" @mouseover="query = 'items/*'">
        select all direct sub-containers
      </ScriptInputVariant>

      <h3>By name</h3>
      <ScriptInputVariant :query="['title', './title']" :containers="findByQuery('title')" @mouseover="query = 'title'">
        select container by name in the current level of sub-tree
      </ScriptInputVariant>
      <ScriptInputVariant
        :query="['element_*', './element_*']"
        :containers="findByQuery('element_*')"
        @mouseover="query = 'element_*'"
      >
        select containers by name with the wildcard "*"
      </ScriptInputVariant>
      <ScriptInputVariant :query="['/**/back']" :containers="findByQuery('/**/back')" @mouseover="query = '/**/back'">
        find containers by name in whole tree
      </ScriptInputVariant>
      <ScriptInputVariant
        :query="['items/re:^item[1|2]']"
        :containers="findByQuery('items/re:^item[1|2]')"
        @mouseover="query = 'items/re:^item[1|2]'"
      >
        find containers by Regular Expression
      </ScriptInputVariant>

      <h3>By relative index</h3>
      <ScriptInputVariant
        :query="['--1', 'previous', 'prev', 'up']"
        :containers="findByQuery('--1')"
        @mouseover="query = '--1'"
      >
        previous container
      </ScriptInputVariant>
      <ScriptInputVariant :query="['++1', 'next', 'down']" :containers="findByQuery('++1')" @mouseover="query = '++1'">
        next container
      </ScriptInputVariant>
      <ScriptInputVariant query="--2" :containers="findByQuery('--2')" @mouseover="query = '--2'">
        previous of previous container
      </ScriptInputVariant>
      <ScriptInputVariant query="++3" :containers="findByQuery('++3')" @mouseover="query = '++3'">
        next of next of next container
      </ScriptInputVariant>
      <ScriptInputVariant :query="['--', '--all', '--*']" :containers="findByQuery('--')" @mouseover="query = '--'">
        all previous containers in the same level
      </ScriptInputVariant>
      <ScriptInputVariant :query="['++', '++all', '++*']" :containers="findByQuery('++')" @mouseover="query = '++'">
        all next containers in the same level
      </ScriptInputVariant>

      <h3>By order index</h3>
      <ScriptInputVariant query="1" :containers="findByQuery('1')" @mouseover="query = '1'">
        the first container in the current level of sub-tree
      </ScriptInputVariant>
      <ScriptInputVariant query="-1" :containers="findByQuery('-1')" @mouseover="query = '-1'">
        the last container in the current level of sub-tree
      </ScriptInputVariant>

      <h3>Ranges</h3>
      <ScriptInputVariant query="1..3" :containers="findByQuery('1..3')" @mouseover="query = '1..3'">
        get from 1 to 3 indexes containers in the current level of sub-tree
      </ScriptInputVariant>
      <ScriptInputVariant query="-2..-1" :containers="findByQuery('-2..-1')" @mouseover="query = '-2..-1'">
        get two last containers
      </ScriptInputVariant>
      <ScriptInputVariant query="3..-1" :containers="findByQuery('3..-1')" @mouseover="query = '3..-1'">
        get from the third to the last containers in the current level of sub-tree
      </ScriptInputVariant>
      <ScriptInputVariant query="2,4,6" :containers="findByQuery('2,4,6')" @mouseover="query = '2,4,6'">
        get the list of containers with indexes 2, 4, 6
      </ScriptInputVariant>
      <ScriptInputVariant query="3.." :containers="findByQuery('3..')" @mouseover="query = '3..'">
        get the list of containers with indexes 3 and more
      </ScriptInputVariant>
      <ScriptInputVariant query="..4" :containers="findByQuery('..4')" @mouseover="query = '..4'">
        get the list of containers with indexes 4 and less (first 4 containers)
      </ScriptInputVariant>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
