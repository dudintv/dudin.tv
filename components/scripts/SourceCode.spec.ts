import { shallowMount } from '@vue/test-utils';
import SourceCode from './SourceCode.vue';
import { type Script } from '@/types';

const script: Script = {
  path: 'path',
  file: 'file',
  category: 'category',
  title: 'title',
  description: 'description',
};

vi.stubGlobal('useStore', () => ({
  getCode: vi.fn(),
}));

(globalThis as any).useRuntimeConfig = () => {
  return {
    github: { scriptsUrl: 'http://xxx.com' },
  };
};

describe('SourceCode', () => {
  const wrapper = shallowMount(SourceCode, {
    props: {
      script,
    },
  });

  it('is a Vue instance', () => {
    expect(SourceCode).toBeTruthy();
  });

  it('has button with correct url to github', () => {
    const expectedHref = `${(useRuntimeConfig() as any).github.scriptsUrl}${script.path}`;
    const button = wrapper.find('a');
    expect(button.attributes().href).toEqual(expectedHref);
  });
});
