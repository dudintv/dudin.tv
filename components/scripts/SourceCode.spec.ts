import { shallowMount } from '@vue/test-utils';
import SourceCode from './SourceCode.vue';
import { Script } from '@/types';

const script: Script = {
  path: 'path',
  _path: '_path',
  file: 'file',
  category: 'category',
};

vi.stubGlobal('useStore', () => ({
  getCode: vi.fn(),
}));

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
    const expectedHref = `https://github.com/dudintv/vizartist-scripts/tree/master/${script.path}`;
    const button = wrapper.find('a');
    expect(button.attributes().href).toEqual(expectedHref);
  });
});
