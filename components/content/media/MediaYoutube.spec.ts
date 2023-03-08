import { mount } from '@vue/test-utils';
import MediaYoutube from './MediaYoutube.vue';
import ResizeObserver from 'resize-observer-polyfill';

global.ResizeObserver = ResizeObserver;

const videoId = 'nMxaNbqqbPQ';
const fullUrl = `https://www.youtube.com/watch?v=${videoId}`;

describe('MediaYoutube', () => {
  it('is a Vue instance', () => {
    expect(MediaYoutube).toBeTruthy();
  });

  describe('with full url', () => {
    const withFullUrlWrapper = mount(MediaYoutube, {
      props: {
        url: fullUrl,
      },
    });

    it('has correct youtube url', () => {
      const iframeSrc = withFullUrlWrapper.find('iframe').element.src;
      const expectIframeSrc = `https://www.youtube.com/embed/${videoId}`;
      expect(iframeSrc).toEqual(expectIframeSrc);
    });
  });

  describe('with only video id', () => {
    const withVideoIdWrapper = mount(MediaYoutube, {
      props: {
        url: videoId,
      },
    });

    it('has correct youtube url', () => {
      const iframeSrc = withVideoIdWrapper.find('iframe').element.src;
      const expectIframeSrc = `https://www.youtube.com/embed/${videoId}`;
      expect(iframeSrc).toEqual(expectIframeSrc);
    });
  });
});
