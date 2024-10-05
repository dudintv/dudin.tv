import { type AnimationItem } from 'lottie-web';
import { defineStore } from 'pinia';
import { type Shader } from '@/types';

const interfaceMapping: Record<string, any> = {
  Int: {
    type: 'integer',
    parseParams: (params: string[]) => ({ default: params[2], min: params[3], max: params[4] }),
  },
  Float: {
    type: 'float',
    parseParams: (params: string[]) => ({ default: params[2], min: params[3], max: params[4] }),
  },
  Vec2: {
    type: 'vec2',
    parseParams: (params: string[]) => ({ defaultX: params[2], defaultY: params[3] }),
  },
  Vec3: {
    type: 'vec3',
    parseParams: (params: string[]) => ({ defaultX: params[2], defaultY: params[3], defaultZ: params[4] }),
  },
  Vec4: {
    type: 'vec4',
    parseParams: (params: string[]) => ({
      defaultX: params[2],
      defaultY: params[3],
      defaultZ: params[4],
      defaultW: params[5],
    }),
  },
  Color: {
    type: 'color',
    parseParams: (params: string[]) => ({
      defaultR: params[2],
      defaultG: params[3],
      defaultB: params[4],
      defaultA: params[5],
    }),
  },
  Sampler2D: { type: 'image', parseParams: (params: string[]) => ({}) },
};

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
    parseShader(vizShaderCode: string): null | any {
      if (!vizShaderCode) return null;
      const vizShaderLines = vizShaderCode.split('\n');
      const startInterfaceIndex = vizShaderLines.findIndex((line) => line.trim() === '@registerParametersBegin');
      const endInterfaceIndex = vizShaderLines.findIndex((line) => line.trim() === '@registerParametersEnd');
      if (startInterfaceIndex === -1 || endInterfaceIndex === -1) return null;

      const interfaceElements: Shader[] = [];
      for (let i = startInterfaceIndex + 1; i < endInterfaceIndex; i++) {
        const line = vizShaderLines[i].trim();
        const typeNameStartIndex = 18; // after '@registerParameter'
        const parametersStartIndex = line.indexOf('(');
        const parametersEndIndex = line.indexOf(')');
        const typeName = line.substring(typeNameStartIndex, parametersStartIndex).trim();
        const parametersSourceText = line.substring(parametersStartIndex + 1, parametersEndIndex);
        const parametersStrings = parametersSourceText.split(',').map((s) => s.trim());

        interfaceMapping[typeName] &&
          interfaceElements.push({
            type: interfaceMapping[typeName].type,
            label: parametersStrings[1].replaceAll('"', ''),
            parameters: interfaceMapping[typeName].parseParams(parametersStrings),
          });
      }
      console.log('interfaceElements =', interfaceElements);
      return interfaceElements;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
