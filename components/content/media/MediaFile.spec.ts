import { mount } from '@vue/test-utils';

import MediaFile from './MediaFile.vue';

const path = '/path';
const name = 'filename.zip';
const filePublicFolder = 'images';

vi.mock('vue-router', () => ({
  useRoute: vi.fn().mockImplementation(() => ({
    path,
  })),
}));

describe('MediaFile', () => {
  const wrapper = mount(MediaFile, {
    props: {
      name,
    },
  });

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
  it('has correct href', () => {
    const href = wrapper.find('a').element.href;
    const expectedHref = `http://${window.location.host}/${filePublicFolder}${path}/${name}`;
    expect(href).toEqual(expectedHref);
  });
  it('has filename as the button text', () => {
    expect(wrapper.text()).toEqual(name);
  });
});
