import { mount } from '@vue/test-utils';
import WideWidthContainer from './WideWidthContainer.vue';

const content = 'slot content';

describe('WideWidthContainer', () => {
  const wrapper = mount(WideWidthContainer, {
    slots: {
      default: content,
    },
  });

  it('is a Vue instance', () => {
    expect(WideWidthContainer).toBeTruthy();
  });

  it('has specific css classes', () => {
    expect(wrapper.classes()).toContain('wide-width-wrapper');
    expect(wrapper.find('.wide-width-container')).toBeTruthy();
  });

  it('renders default slot', () => {
    expect(wrapper.html()).toContain(content);
  });
});
