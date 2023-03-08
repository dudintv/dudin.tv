import { mount } from '@vue/test-utils';
import InterfaceDescription from './InterfaceDescription.vue';

const path = '/path';
const image = 'image-src';
const description = 'interface description';
const imagesPublicFolder = 'images';

vi.mock('vue-router', () => ({
  useRoute: vi.fn().mockImplementation(() => ({
    path,
  })),
}));

describe('InterfaceDescription', () => {
  const wrapper = mount(InterfaceDescription, {
    props: {
      image,
    },
    slots: {
      default: description,
    },
  });

  it('is a Vue instance', () => {
    expect(InterfaceDescription).toBeTruthy();
  });

  it('has correct image url', () => {
    const imageSrc = wrapper.find('img').element.src;
    const expectImageSrc = `http://${window.location.host}/${imagesPublicFolder}${path}/${image}`;
    expect(imageSrc).toEqual(expectImageSrc);
  });

  it('has description in the default slot', () => {
    expect(wrapper.html()).toContain(description);
  });
});
