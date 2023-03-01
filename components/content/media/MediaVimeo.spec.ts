import { mount } from '@vue/test-utils';
import MediaVimeo from './MediaVimeo.vue';

const videoId = '530075847';
const fullUrl = `https://vimeo.com/${videoId}`;

describe('MediaVimeo', () => {
  it('is a Vue instance', () => {
    expect(MediaVimeo).toBeTruthy();
  });

  describe('with full url', () => {
    const withFullUrlWrapper = mount(MediaVimeo, {
      props: {
        url: fullUrl,
      },
    });

    it('has correct vimeo url', () => {
      const iframeSrc = withFullUrlWrapper.find('iframe').element.src;
      const expectIframeSrc = `https://player.vimeo.com/video/${videoId}`;
      expect(iframeSrc).toMatch(new RegExp(`^${expectIframeSrc}`));
    });
  });

  describe('with only video id', () => {
    const withVideoIdWrapper = mount(MediaVimeo, {
      props: {
        url: videoId,
      },
    });

    it('has correct vimeo url', () => {
      const iframeSrc = withVideoIdWrapper.find('iframe').element.src;
      const expectIframeSrc = `https://player.vimeo.com/video/${videoId}`;
      expect(iframeSrc).toMatch(new RegExp(`^${expectIframeSrc}`));
    });
  });
});
