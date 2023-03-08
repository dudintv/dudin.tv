import { shallowMount } from '@vue/test-utils';
import PortfolioItem from './PortfolioItem.vue';
import MediaYoutube from '@/components/content/media/MediaYoutube.vue';

const content = 'slot content';
const videoId = 'nMxaNbqqbPQ';

vi.stubGlobal('useNuxtApp', () => ({
  $lottie: { loadAnimation: vi.fn(() => ({ setSpeed: vi.fn() })) },
}));

describe('PortfolioItem', () => {
  const wrapper = shallowMount(PortfolioItem, {
    props: {
      youtube: videoId,
    },
    slots: {
      default: content,
    },
    global: {
      components: {
        MediaYoutube,
      },
    },
  });

  it('is a Vue instance', () => {
    expect(PortfolioItem).toBeTruthy();
  });

  it('renders default slot', () => {
    expect(wrapper.html()).toContain(content);
  });
});
