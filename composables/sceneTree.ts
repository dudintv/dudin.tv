import type { Scene, Container, EnrichedContainer } from '@/types';

function makeEnrichedContainersList(rootContainers: Container[]): EnrichedContainer[] {
  const handleContainers = (containers: Container[], parent?: Container, nesting: number = 0): EnrichedContainer[] => {
    return containers.flatMap((container, index): EnrichedContainer[] => {
      const enrichedContainer: EnrichedContainer = {
        ...container,
        container, // link to the original container
        order: index + 1,
        parent,
        nesting,
      };

      if (index > 0) {
        enrichedContainer.previous = containers[index - 1];
      }
      if (index < containers.length - 1) {
        enrichedContainer.next = containers[index + 1];
      }

      if (container.children) {
        return [enrichedContainer, ...handleContainers(container.children, container, nesting + 1)];
      } else {
        return [enrichedContainer];
      }
    });
  };

  return handleContainers(rootContainers);
}

function makeContainerMapping(enrichedContainers: EnrichedContainer[]): Map<Container, EnrichedContainer> {
  const mapping = new Map<Container, EnrichedContainer>();
  enrichedContainers.forEach((enrichedContainer) => mapping.set(enrichedContainer.container, enrichedContainer));
  return mapping;
}

function filterContainersByName(containers: Container[], name: string) {
  const regString = name.replace(/\*/g, '.*').replace(/\+/g, '');
  const nameRegex = new RegExp(regString, 'g');
  const filtering = name.match(/\*+/)
    ? (container: Container) => nameRegex.test(container.name)
    : (container: Container) => container.name === name;

  return containers.filter(filtering);
}

function getAllDeeplyNestedContainers(container: Container) {
  const containers: Container[] = [container];
  if (container.children) {
    container.children.forEach((container) => containers.push(...getAllDeeplyNestedContainers(container)));
  }
  return containers;
}

function getContainerByIndex(targetContainers: Container[], order: number) {
  const foundContainer = targetContainers?.at(order > 0 ? order - 1 : order);
  return foundContainer;
}

export function useSceneTree(initialScene: Scene) {
  const scene = ref<Scene>(initialScene);
  const rootContainers = computed(() => scene.value.rootContainers);

  const containersMap = ref<Map<Container, EnrichedContainer>>(new Map<Container, EnrichedContainer>());

  const enrichedContainers = ref<EnrichedContainer[]>(makeEnrichedContainersList(scene.value.rootContainers));
  const containers = ref<Container[]>(enrichedContainers.value.map((enrichedContainer) => enrichedContainer.container));
  containersMap.value = makeContainerMapping(enrichedContainers.value);

  function findSiblingsContainers(currentContainer: Container) {
    const parentContainer = containersMap.value.get(currentContainer)?.parent;
    const containers: Container[] = enrichedContainers.value
      .filter((enrichedContainer) => enrichedContainer.parent === parentContainer)
      .map((enrichedContainer) => enrichedContainer.container);
    return containers;
  }

  function findSiblingsContainersByName(currentContainer: Container, name: string): Container[] {
    return filterContainersByName(findSiblingsContainers(currentContainer), name);
  }

  function getContainersByQuery(
    query: string,
    starterContainers: Container | Container[] = scene.value.rootContainers
  ) {
    const normalizedQuery = query.trim().toLowerCase().replace('\\', '/');
    const querySteps: string[] = normalizedQuery.split('/');
    let currentContainers: Container[] = Array.isArray(starterContainers)
      ? [...starterContainers]
      : [starterContainers];

    if (['', 'root'].includes(querySteps[0])) {
      // if there is the reference to root containers
      if (rootContainers.value) {
        currentContainers.splice(0, currentContainers.length, ...(rootContainers.value || []));
        querySteps.splice(0, 1);
      } else {
        currentContainers.length = 0; // to empty array
        querySteps.length = 0; // to empty array
      }
    }

    let isSameLevel = true; // for the first step

    querySteps.forEach((queryStep, stepIndex) => {
      const currentStepContainers: (Container | undefined)[] = [];
      currentContainers.forEach((currentContainer: Container, index) => {
        const enrichedContainer = containersMap.value.get(currentContainer);
        if (!enrichedContainer) {
          return;
        }

        if (['this', '.', ''].includes(queryStep)) {
          // do nothing — stay where we are
          currentStepContainers.push(enrichedContainer.container);
        } else if (['parent', '..'].includes(queryStep)) {
          currentStepContainers.push(enrichedContainer.parent);
        } else if (queryStep === '*') {
          const foundContainers = isSameLevel ? findSiblingsContainers(currentContainer) : currentContainer.children;
          if (Array.isArray(foundContainers)) {
            currentStepContainers.push(...foundContainers);
          }
        } else if (['previous', 'prev', 'up'].includes(queryStep)) {
          currentStepContainers.push(enrichedContainer?.previous);
        } else if (['next', 'down'].includes(queryStep)) {
          currentStepContainers.push(enrichedContainer?.next);
        } else if (queryStep.match(/^--\d+$/)) {
          // get previous by "--1" or "--3"
          const offset = Math.round(Number(queryStep.slice(2)));
          const targetContainers = enrichedContainer.parent?.children || rootContainers.value;
          const foundContainer = targetContainers?.[enrichedContainer.order - offset - 1];
          currentStepContainers.push(foundContainer);
        } else if (queryStep.match(/^re:(.*)/)) {
          const regexText = queryStep.match(/^re:(.*)/)![1];
          const regex = new RegExp(regexText);
          const consideringContainers = isSameLevel
            ? findSiblingsContainers(currentContainer)
            : currentContainer.children;
          consideringContainers?.forEach((container) => {
            if (regex.test(container.name)) {
              currentStepContainers.push(container);
            }
          });
        } else if (queryStep.match(/^\+\+\d+$/)) {
          // get next by "++1" or "++3"
          const offset = Math.round(Number(queryStep.slice(2)));
          const targetContainers = enrichedContainer.parent?.children || rootContainers.value;
          const foundContainer = targetContainers?.[enrichedContainer.order + offset - 1];
          currentStepContainers.push(foundContainer);
        } else if (['--', '--all', '--*'].includes(queryStep)) {
          // get all previous containers by "--"
          const targetContainers =
            stepIndex > 0 ? currentContainer.children : enrichedContainer.parent?.children || rootContainers.value;
          const foundContainers = targetContainers?.slice(0, enrichedContainer.order - 1);
          if (Array.isArray(foundContainers)) {
            currentStepContainers.push(...foundContainers);
          }
        } else if (['++', '++all', '++*'].includes(queryStep)) {
          // get all next containers by "++"
          const targetContainers =
            stepIndex > 0 ? currentContainer.children : enrichedContainer.parent?.children || rootContainers.value;
          const foundContainers = targetContainers?.slice(enrichedContainer.order);
          if (Array.isArray(foundContainers)) {
            currentStepContainers.push(...foundContainers);
          }
        } else if (queryStep.match(/^-?\d+$/)) {
          // find by index (including negative numbers)
          const order: number = Math.round(Number(queryStep));

          const targetContainers =
            stepIndex > 0 ? currentContainer.children : enrichedContainer.parent?.children || rootContainers.value;
          const foundContainer = getContainerByIndex(targetContainers || [], order);

          currentStepContainers.push(foundContainer);
        } else if (queryStep.match(/^-?\d*\.\.-?\d*$/)) {
          // find by range of indexes
          let [from, to] = queryStep.split('..').map((s) => (s === '' ? undefined : Math.round(Number(s)))) as [
            number | undefined,
            number | undefined
          ];

          from = from === undefined ? 0 : from > 0 ? from - 1 : from;
          if (to !== undefined) {
            to = to! > 0 ? to : to === -1 ? undefined : to! + 1;
          }

          const targetContainers =
            stepIndex > 0 ? currentContainer.children : enrichedContainer.parent?.children || rootContainers.value;
          const foundContainers = targetContainers?.slice(from, to);
          if (Array.isArray(foundContainers)) {
            currentStepContainers.push(...foundContainers);
          }
        } else if (queryStep.match(/^(\d+,)+\d*$/)) {
          // find by list of indexes
          const orders = queryStep.split(',').filter(Boolean).map(Number);

          const targetContainers =
            stepIndex > 0 ? currentContainer.children : enrichedContainer.parent?.children || rootContainers.value;

          const foundContainers = orders
            .map((order) => getContainerByIndex(targetContainers || [], order))
            .filter(Boolean);

          currentStepContainers.push(...foundContainers);
        } else if (queryStep === '**') {
          // get all deeply nested containers
          const targetContainers =
            stepIndex > 0 ? currentContainer.children : enrichedContainer.parent?.children || rootContainers.value;
          const foundContainers = targetContainers?.flatMap((container) => getAllDeeplyNestedContainers(container));
          if (Array.isArray(foundContainers)) {
            currentStepContainers.push(...foundContainers);
          }
          isSameLevel = true;
        } else {
          // find by name
          const targetContainers =
            stepIndex > 0 ? currentContainer.children : enrichedContainer.parent?.children || rootContainers.value;

          const filteredContainers = filterContainersByName(targetContainers || [], queryStep);
          currentStepContainers.push(...filteredContainers);
        }
      });
      currentContainers = currentStepContainers.filter((container) => container !== undefined);

      isSameLevel = false; // by default after first step

      const uniqueContainers = [...new Set(currentContainers)];
      currentContainers.splice(0, currentContainers.length, ...uniqueContainers);
    });

    return currentContainers;
  }

  return {
    scene,
    containers,
    rootContainers,
    enrichedContainers,
    containersMap,

    makeEnrichedContainersList,
    makeContainerMapping,

    findSiblingsContainersByName,
    getContainersByQuery,
  };
}
