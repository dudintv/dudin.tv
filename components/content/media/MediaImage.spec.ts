import { expect } from 'vitest';
import { mount } from '@vue/test-utils';

import MediaFile from './MediaImage.vue';

const path = '/path';
const name = 'image.png';
const imagesPublicFolder = 'images';
const fullPath = 'http://example.com/image.png';

vi.mock('vue-router', () => ({
  useRoute: vi.fn().mockImplementation(() => ({
    path,
  })),
}));

describe('MediaFile', () => {
  const simpleWrapper = mount(MediaFile, {
    props: {
      name,
    },
  });

  it('is a Vue instance', () => {
    expect(simpleWrapper.vm).toBeTruthy();
  });
  it('has correct image url', () => {
    const imageSrc = simpleWrapper.find('img').element.src;
    const expectImageSrc = `http://${window.location.host}/${imagesPublicFolder}${path}/${name}`;
    expect(imageSrc).toEqual(expectImageSrc);
  });

  describe('with transparent bg', () => {
    const transparentImageWrapper = mount(MediaFile, {
      props: {
        name,
        transparent: true,
      },
    });

    it('has dedicated style for the transparent background', () => {
      expect(transparentImageWrapper.classes()).toContain('transparent-background');
    });
  });

  describe('with full path', () => {
    const fullImagePathWrapper = mount(MediaFile, {
      props: {
        name: fullPath,
        isFullPath: true,
      },
    });

    it('has the same path in the image src', () => {
      const imageSrc = fullImagePathWrapper.find('img').element.src;
      expect(imageSrc).toEqual(fullPath);
    });
  });
});
