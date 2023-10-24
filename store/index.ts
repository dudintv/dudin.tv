import { AnimationItem } from 'lottie-web';
import { defineStore } from 'pinia';
import { Script } from '@/types';

export const useStore = defineStore('store', {
  state: () => ({
    gradients: {
      all: ['#7940CC', '#234CA9'],
      animation: ['#F2858A', '#EFC0A0'],
      link: ['#79D6FF', '#61A3FF'],
      logic: ['#C45ADD', '#7F4EF4'],
      transformation: ['#2DCFE6', '#B6E78C'],
      texture: ['#C389F0', '#ED7485'],
      shader: ['#F285C6', '#EFAEA0'],
    } as Record<string, [string, string]>,
    copyCodeAnim: null as AnimationItem | null,
  }),
  actions: {
    async getCode(script: { file: string; path: string }): Promise<string | undefined> {
      if (!script.path || !script.file) {
        console.warn("There isn't a script path URL");
        return '';
      }

      try {
        const { data: code } = await useFetch(
          `https://raw.githubusercontent.com/dudintv/vizartist-scripts/master/${script.path}/${script.file}`
        );
        return code.value as string;
      } catch (error) {
        alert("ERROR: I couldn't get code from the GitHub repository.");
        console.warn('Something went wrong:', error);
      }
    },
    async copyCode(script: { file: string; path: string }): Promise<void> {
      const code = await this.getCode(script);
      if (!code) return;

      await navigator.clipboard.writeText(code);

      if (!this.copyCodeAnim) return;
      (this.copyCodeAnim as any).wrapper.style = 'display: block';
      this.copyCodeAnim.goToAndStop(0, true);
      this.copyCodeAnim.play();
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
