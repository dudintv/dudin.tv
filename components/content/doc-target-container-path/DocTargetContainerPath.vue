<script setup lang="ts">
import type { Scene, Container, FacadeContainer } from '@/types';

const vizScene: Scene = {
  name: 'SceneTree',
  children: [
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

const containersList: Container[] = [];
const containersFacades = ref<Map<Container, FacadeContainer>>(new Map());
const containersBySiblings = new Map<Container | undefined, Container[]>();

function makeExtendedContainers() {
  const pushChildContainers = (
    container: Container,
    { parent, order, nesting = 0 }: { order: number; parent?: Container; nesting?: number }
  ) => {
    containersList.push(container);
    containersFacades.value.set(container, { ...container, container, parent, order: order + 1, nesting });
    containersBySiblings.has(parent)
      ? containersBySiblings.get(parent)?.push(container)
      : containersBySiblings.set(parent, [container]);
    if (container.children) {
      container.children.forEach((child, order) =>
        pushChildContainers(child, { parent: container, order, nesting: nesting + 1 })
      );
    }
  };
  vizScene.children?.forEach((container, order) => pushChildContainers(container, { order }));

  // Assign "next" and "previous" properties
  containersBySiblings.forEach((containers) => {
    for (let i = 0; i < containers.length; i++) {
      const currentContainer = containers[i];
      const facade = containersFacades.value.get(currentContainer);

      if (facade) {
        facade.previous = containers[i - 1] || null;
        facade.next = containers[i + 1] || null;
      }
    }
  });
}
makeExtendedContainers();

// function getContainerDebugInfo(container: Container) {
//   const containerFacade = containersFacades.value.get(container);
//   if (!containerFacade) {
//     return null;
//   }
//   const childrenNames = containerFacade.children?.map((container: Container) => container.name);
//   return {
//     ...containerFacade,
//     children: childrenNames,
//     parent: containerFacade.parent?.name,
//     previous: containerFacade.previous?.name,
//     next: containerFacade.next?.name,
//   };
// }

const starterContainer: Container = containersList.find((container) => container.name === 'logic')!;
const query = ref('this');

function filterContainersByName(containers: Container[], name: string) {
  if (name.match(/\*+/)) {
    const nameRegex = new RegExp(name.replace(/\*/g, '.*'));
    return containers.filter((container: Container) => nameRegex.test(container.name));
  }
  return containers.filter((container: Container) => container.name === name);
}

function findContainersByNameUnderParent(name: string, parent?: Container): Container[] {
  const containers = containersBySiblings.get(parent);
  return containers ? filterContainersByName(containers, name) : [];
}

function getContainersByQuery(queryPath: string) {
  const normalizedQuery = queryPath.trim().toLowerCase().replace('\\', '/');
  const querySteps: string[] = normalizedQuery.split('/');
  const currentContainers: Container[] = [starterContainer];

  if (!querySteps[0]) {
    // if there is the "root" reference
    const firstLevelContainers = findContainersByNameUnderParent(querySteps[1]);
    if (firstLevelContainers) {
      currentContainers.splice(0, 1, ...(firstLevelContainers || []));
      querySteps.splice(0, 2);
    } else {
      currentContainers.length = 0; // empty array
      querySteps.length = 0; // empty array
    }
  }

  querySteps.forEach((step, stepIndex) => {
    currentContainers.forEach((currentContainer: Container, index) => {
      const containerFacade = containersFacades.value.get(currentContainer);
      const parentContainers = stepIndex > 0 ? containerFacade?.parent?.children || [] : [containerFacade?.parent];

      if (['this', '.'].includes(step)) {
        // do nothing — stay where we are
      } else if (['parent', '..'].includes(step)) {
        currentContainers.splice(index, 1, ...(containerFacade?.parent ? [containerFacade?.parent] : []));
      } else if (step === '*') {
        const siblings: Container[] =
          parentContainers?.length > 0
            ? parentContainers.flatMap((container) => (container?.children as Container[]) || [])
            : findContainersByNameUnderParent('*');
        currentContainers.splice(index, 1, ...(siblings || []));
      } else if (['previous', 'prev', 'up'].includes(step)) {
        currentContainers.splice(index, 1, ...(containerFacade?.previous ? [containerFacade?.previous] : []));
      } else if (['next', 'down'].includes(step)) {
        currentContainers.splice(index, 1, ...(containerFacade?.next ? [containerFacade.next] : []));
      } else if (step.match(/^-?\d+$/)) {
        // find by index
        const order: number = Math.round(Number(step));
        const foundContainer = currentContainer.children?.at(order > 0 ? order - 1 : order);
        currentContainers.splice(index, 1, ...(foundContainer ? [foundContainer] : []));
      } else if (step.match(/^-?\d+\.\.-?\d+$/)) {
        // find by index
        let [from, to] = step.split('..').map((i) => Math.round(Number(i)));
        from -= 1;
        const foundContainers = currentContainer.children?.slice(from, to);
        currentContainers.splice(index, 1, ...(foundContainers?.length ? foundContainers : []));
      } else {
        // find by name
        parentContainers?.length > 0
          ? parentContainers.flatMap((parentContainer) => (parentContainer?.children as Container[]) || [])
          : parentContainers.flatMap((parentContainer) => findContainersByNameUnderParent(step, parentContainer));
        // const foundContainer = containerFacade?.children?.find((child) => child.name === step);
        // currentContainers.splice(index, 1, ...(foundContainer ? [foundContainer] : []));
      }
    });
  });

  return currentContainers;
}

function getFacadeContainersByQuery(queryPath: string) {
  const containers = getContainersByQuery(queryPath);
  return containers.map((container) => containersFacades.value.get(container)!);
}

const highlightedContainers = computed<Container[]>(() => {
  return getContainersByQuery(query.value);
});

function highlightContainers() {
  // reset highlighted containers
  containersFacades.value.forEach((containerFacade, container) => {
    containerFacade.highlighted = false;
  });

  highlightedContainers.value.forEach((highlightedContainer: Container) => {
    const containerFacade = containersFacades.value.get(highlightedContainer);
    if (!containerFacade) {
      return;
    }
    containerFacade.highlighted = true;
  });
}

watch(query, highlightContainers, { immediate: true, deep: true });
</script>

<template>
  <h1>Doc for target containers path</h1>
  <div class="flex gap-4 md:gap-6 lg:gap-8">
    <div class="flex flex-col gap-1 items-start sticky top-12 h-fit">
      <div v-for="[container, containerFacade] in containersFacades" :key="container.name" class="flex">
        <div class="inline-block" :style="`width: ${(containerFacade)?.nesting! * 20}px`">&nbsp;</div>
        <ContainerElement :container="(containerFacade)!" />
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
      <ScriptInputVariant :query="['.', 'this']" :containers="getFacadeContainersByQuery('.')" @mouseover="query = '.'">
        the current container (where the script is placed)
      </ScriptInputVariant>
      <ScriptInputVariant
        :query="['..', './..']"
        :containers="getFacadeContainersByQuery('..')"
        @mouseover="query = '..'"
      >
        get parent
      </ScriptInputVariant>
      <ScriptInputVariant
        query="/object"
        :containers="getFacadeContainersByQuery('/object')"
        @mouseover="query = '/object'"
      >
        “/” defines the root of the scene tree (it works only in the beginning of the query!)
      </ScriptInputVariant>
      <ScriptInputVariant query="*" :containers="getFacadeContainersByQuery('*')" @mouseover="query = '*'">
        select all containers in the current sub-tree level
      </ScriptInputVariant>
      <ScriptInputVariant
        query="items/*"
        :containers="getFacadeContainersByQuery('items/*')"
        @mouseover="query = 'items/*'"
      >
        select all direct sub-containers
      </ScriptInputVariant>

      <h3>By name</h3>
      <ScriptInputVariant
        :query="['title', './title']"
        :containers="getFacadeContainersByQuery('title')"
        @mouseover="query = 'title'"
      >
        select container by name in the current level of sub-tree
      </ScriptInputVariant>
      <ScriptInputVariant
        :query="['element_*', './element_*']"
        :containers="getFacadeContainersByQuery('element_*')"
        @mouseover="query = 'element_*'"
      >
        select containers by name with wildcard
      </ScriptInputVariant>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
