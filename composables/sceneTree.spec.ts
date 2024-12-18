import { useSceneTree } from './sceneTree';
import { type Scene, type EnrichedContainer } from '@/types';

describe('sceneTree', () => {
  const mockScene: Scene = {
    name: 'test',
    rootContainers: [
      {
        name: 'root-container',
        children: [
          {
            name: 'first-nested-container',
            children: [
              {
                name: 'deeply-nested-container',
                children: [],
              },
              {
                name: 'second-deeply-nested-container',
                children: [],
              },
            ],
          },
          {
            name: 'second-nested-container',
            children: [],
          },
        ],
      },
      {
        name: 'second-root-container',
        children: [],
      },
    ],
  };
  function getChildrenCount(container: any) {
    return (
      container.children?.length +
      (container.children?.length
        ? container.children.reduce((sum: number, child: any) => sum + getChildrenCount(child), 0)
        : 0)
    );
  }
  const amountOfContainers = mockScene.rootContainers.reduce(
    (sum, container) => sum + 1 + getChildrenCount(container),
    0
  );

  const expectedEnrichedContainersList: EnrichedContainer[] = [
    {
      parent: undefined,
      container: mockScene.rootContainers[0],
      children: mockScene.rootContainers[0].children,
      name: 'root-container',
      order: 1,
      nesting: 0,
      next: mockScene.rootContainers[1],
    },
    {
      parent: mockScene.rootContainers[0],
      container: mockScene.rootContainers[0].children?.[0]!,
      children: mockScene.rootContainers[0].children?.[0].children, // ["deeply nested container", "second deeply nested container"]
      name: 'first-nested-container',
      order: 1,
      nesting: 1,
      next: mockScene.rootContainers[0].children?.[1]!,
    },
    {
      parent: mockScene.rootContainers[0].children?.[0],
      container: mockScene.rootContainers[0].children?.[0].children?.[0]!,
      children: mockScene.rootContainers[0].children?.[0].children?.[0].children, // []
      name: 'deeply-nested-container',
      order: 1,
      nesting: 2,
      next: mockScene.rootContainers[0].children?.[0].children?.[1]!,
    },
    {
      parent: mockScene.rootContainers[0].children?.[0],
      container: mockScene.rootContainers[0].children?.[0].children?.[1]!,
      children: mockScene.rootContainers[0].children?.[0].children?.[1].children, // []
      name: 'second-deeply-nested-container',
      order: 2,
      nesting: 2,
      previous: mockScene.rootContainers[0].children?.[0].children?.[0]!,
    },
    {
      parent: mockScene.rootContainers[0],
      container: mockScene.rootContainers[0].children?.[1]!,
      children: mockScene.rootContainers[0].children?.[1].children, // []
      name: 'second-nested-container',
      order: 2,
      nesting: 1,
      previous: mockScene.rootContainers[0].children?.[0]!,
    },
    {
      parent: undefined,
      container: mockScene.rootContainers[1],
      children: mockScene.rootContainers[1].children,
      name: 'second-root-container',
      order: 2,
      nesting: 0,
      previous: mockScene.rootContainers[0],
    },
  ];

  describe('makeEnrichedContainersList', () => {
    const { makeEnrichedContainersList } = useSceneTree(mockScene);
    it('makes enriched containers list', () => {
      const result = makeEnrichedContainersList(mockScene.rootContainers);
      expect(result).toEqual(expectedEnrichedContainersList);
    });
  });

  describe('containers', () => {
    const { scene, containers, enrichedContainers } = useSceneTree(mockScene);

    it('has ' + amountOfContainers + ' containers', () => {
      expect(containers.value.length).toEqual(amountOfContainers);
    });
    it('has linked references', () => {
      const expectedContainers = [
        scene.value.rootContainers[0],
        scene.value.rootContainers[0].children?.[0]!,
        scene.value.rootContainers[0].children?.[0].children?.[0]!,
        scene.value.rootContainers[0].children?.[0].children?.[1]!,
        scene.value.rootContainers[0].children?.[1]!,
        scene.value.rootContainers[1],
      ];
      containers.value.forEach((container, index) => {
        expect(container).toBe(expectedContainers[index]);
      });
    });
  });

  describe('getContainersByQuery', () => {
    const { scene, getContainersByQuery } = useSceneTree(mockScene);

    describe('with default starter containers', () => {
      it('gets root containers by query "/"', () => {
        const result = getContainersByQuery('/');
        expect(result).toEqual(mockScene.rootContainers);
      });

      it('gets root containers by name "/root-container"', () => {
        const result = getContainersByQuery('/root-container');
        expect(result).toEqual([mockScene.rootContainers[0]]);
      });
    });

    describe('with custom starter container', () => {
      const starterContainer = scene.value.rootContainers[0].children![0]; // first-nested-container

      describe('from root level', () => {
        it('gets root containers by query "/"', () => {
          const result = getContainersByQuery('/', starterContainer);
          expect(result).toEqual(mockScene.rootContainers);
        });

        it('gets root containers by name "/root-container"', () => {
          const result = getContainersByQuery('/root-container', starterContainer);
          expect(result).toEqual([mockScene.rootContainers[0]]);
        });
      });

      describe('from nested level', () => {
        it('gets a current container by query "."', () => {
          const result = getContainersByQuery('.', starterContainer);
          expect(result).toEqual([starterContainer]);
        });
        it('gets a parent container by query ".."', () => {
          const result = getContainersByQuery('..', starterContainer);
          expect(result).toEqual([mockScene.rootContainers[0]]);
        });
        it('gets all siblings containers by query "*"', () => {
          const result = getContainersByQuery('*', starterContainer);
          expect(result).toEqual(mockScene.rootContainers[0].children);
        });
        // ----------------------------------------------------------------------------------------------
        it('gets all direct child containers by query "./*"', () => {
          const result = getContainersByQuery('./*', starterContainer);
          expect(result).toEqual(starterContainer.children);
        });
        it('gets a next container by query "next", "down"', () => {
          ['next', 'down'].forEach((query) => {
            const result = getContainersByQuery(query, starterContainer);
            expect(result).toEqual([mockScene.rootContainers[0].children![1]]);
          });
        });
        it('gets a previous container by query "prev", "previous", "up"', () => {
          ['prev', 'previous', 'up'].forEach((query) => {
            const result = getContainersByQuery('next', starterContainer);
            expect(result).toEqual([mockScene.rootContainers[0].children![1]]);
          });
        });

        describe('by order', () => {
          it('gets the first sibling container by query "1"', () => {
            const result = getContainersByQuery('1', starterContainer);
            expect(result).toEqual([mockScene.rootContainers[0].children![0]]);
          });
          it('gets the first sibling container by query "2"', () => {
            const result = getContainersByQuery('2', starterContainer);
            expect(result).toEqual([mockScene.rootContainers[0].children![1]]);
          });
          it('gets the last sibling container by query "-1"', () => {
            const result = getContainersByQuery('-1', starterContainer);
            expect(result).toEqual([mockScene.rootContainers[0].children!.at(-1)]);
          });
          it('gets the subset sibling containers by query "1..2"', () => {
            const result = getContainersByQuery('1..2', starterContainer);
            expect(result).toEqual([
              mockScene.rootContainers[0].children![0],
              mockScene.rootContainers[0].children![1],
            ]);
          });

          describe('in nesting', () => {
            it('gets the first nested container by query "./1"', () => {
              const result = getContainersByQuery('./1', starterContainer);
              expect(result).toEqual([mockScene.rootContainers[0].children![0].children![0]]);
            });
            it('gets the last nested container by query "./-1"', () => {
              const result = getContainersByQuery('./-1', starterContainer);
              expect(result).toEqual([mockScene.rootContainers[0].children![0].children!.at(-1)]);
            });
            it('gets the subset sibling containers by query "./1..2"', () => {
              const result = getContainersByQuery('./1..2', starterContainer);
              expect(result).toEqual([
                mockScene.rootContainers[0].children![0].children![0],
                mockScene.rootContainers[0].children![0].children![1],
              ]);
            });
          });
        });

        describe('by relative offset', () => {
          it('gets the previous sibling container by query "--1"', () => {
            const result = getContainersByQuery('--1', scene.value.rootContainers[0].children![1]);
            expect(result).toEqual([mockScene.rootContainers[0].children![0]]);
          });
          it('can not find the previous sibling container by query "--1" from the first container', () => {
            const result = getContainersByQuery('--1', starterContainer);
            expect(result).toEqual([]);
          });
          it('gets the next sibling container by query "++1"', () => {
            const result = getContainersByQuery('++1', starterContainer);
            expect(result).toEqual([mockScene.rootContainers[0].children![1]]);
          });
          it('can not find the next sibling container by query "++100" in a short list of containers', () => {
            const result = getContainersByQuery('++100', starterContainer);
            expect(result).toEqual([]);
          });
          it('gets the previous sibling container by query "--"', () => {
            const result = getContainersByQuery('--', scene.value.rootContainers[0].children![1]);
            expect(result).toEqual([mockScene.rootContainers[0].children![0]]);
          });
          it('gets all next sibling containers by query "++"', () => {
            const result = getContainersByQuery('++', starterContainer);
            expect(result).toEqual([mockScene.rootContainers[0].children![1]]);
          });
          it('can not find all next sibling container by query "++" from the last container', () => {
            const result = getContainersByQuery('++', scene.value.rootContainers[0]!.children!.at(-1));
            expect(result).toEqual([]);
          });
          it('can not find all previous sibling container by query "--" from the last container', () => {
            const result = getContainersByQuery('--', scene.value.rootContainers[0]!.children![0]);
            expect(result).toEqual([]);
          });
        });

        describe('by name', () => {
          it('gets a sibling container by query "second-nested-container"', () => {
            const result = getContainersByQuery('second-nested-container', starterContainer);
            expect(result).toEqual([mockScene.rootContainers[0].children![1]]);
          });
          it('gets a nested container by query "./deeply-nested-container"', () => {
            const result = getContainersByQuery('./deeply-nested-container', starterContainer);
            expect(result).toEqual([mockScene.rootContainers[0].children![0].children![0]]);
          });
        });

        describe('by deep nesting', () => {
          it('gets all deeply nested container by query "**"', () => {
            const result = getContainersByQuery('**', starterContainer);
            expect(result).toEqual([
              mockScene.rootContainers[0].children![0],
              ...mockScene.rootContainers[0].children![0].children!,
              mockScene.rootContainers[0].children![1],
            ]);
          });
          it('gets all deeply nested sub-container by query "./**"', () => {
            const result = getContainersByQuery('./**', starterContainer);
            expect(result).toEqual(mockScene.rootContainers[0].children![0].children!);
          });
          it('gets completely all containers in the scene by query "/**"', () => {
            const result = getContainersByQuery('/**', starterContainer);
            expect(result).toEqual([
              mockScene.rootContainers[0],
              mockScene.rootContainers[0].children![0],
              ...mockScene.rootContainers[0].children![0].children!,
              mockScene.rootContainers[0].children![1],
              ...mockScene.rootContainers[0].children![1].children!,
              mockScene.rootContainers[1],
            ]);
          });
          it('searches by name in completely all containers along the whole scene by query "/**/deeply-nested-container"', () => {
            const result = getContainersByQuery('/**/deeply-nested-container');
            expect(result).toEqual([mockScene.rootContainers[0].children![0].children![0]]);
          });
        });
      });
    });
  });
});
