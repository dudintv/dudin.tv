import { shallowMount } from '@vue/test-utils';
import PortfolioProject from './PortfolioProject.vue';
import MediaImage from '@/components/content/media/MediaImage.vue';
import MediaYoutube from '@/components/content/media/MediaYoutube.vue';

const content = 'slot content';
const videoId = 'nMxaNbqqbPQ';

vi.stubGlobal('useNuxtApp', () => ({
  $lottie: { loadAnimation: vi.fn(() => ({ setSpeed: vi.fn() })) },
}));

describe('PortfolioProject', () => {
  const wrapper = shallowMount(PortfolioProject, {
    props: {
      id: 'id',
      youtube: videoId,
    },
    slots: {
      default: content,
    },
    global: {
      components: {
        MediaImage,
        MediaYoutube,
      },
    },
  });

  it('is a Vue instance', () => {
    expect(PortfolioProject).toBeTruthy();
  });

  it('renders default slot', () => {
    expect(wrapper.html()).toContain(content);
  });
});
