import { mount } from '@vue/test-utils';
import MediaFile from './MediaFile.vue';

const path = '/path';
const fileName = 'filename.zip';
const filePublicFolder = 'images';

vi.mock('vue-router', () => ({
  useRoute: vi.fn().mockImplementation(() => ({
    path,
  })),
}));

describe('MediaFile', () => {
  const wrapper = mount(MediaFile, {
    props: {
      name: fileName,
    },
  });

  it('is a Vue instance', () => {
    expect(MediaFile).toBeTruthy();
  });
  it('has correct href', () => {
    const href = wrapper.find('a').element.href;
    const expectedHref = `http://${window.location.host}/${filePublicFolder}${path}/${fileName}`;
    expect(href).toEqual(expectedHref);
  });
  it('has filename as the button text', () => {
    expect(wrapper.text()).toEqual(fileName);
  });
});
