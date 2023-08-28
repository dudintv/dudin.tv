import { mount } from '@vue/test-utils';
import ArticlesItem from './ArticlesItem.vue';
import { Article } from '@/types';

const tags = ['vizartist', 'vizpilot'];
const article: Article = {
  _path: 'path',
  title: 'Article Title',
  description: 'Article Description',
  tags: tags.join(' '),
};

describe('ArticlesItem', () => {
  const wrapper = mount(ArticlesItem, {
    props: {
      article,
    },
  });

  it('is a Vue instance', () => {
    expect(ArticlesItem).toBeTruthy();
  });

  it('shows article title', () => {
    expect(wrapper.find('h2.title').text()).toContain(article.title);
  });

  it('shows article description', () => {
    expect(wrapper.find('p.description').text()).toContain(article.description);
  });

  it('shows article tags', () => {
    const images = wrapper.findAll('img');
    images.forEach((imageWrapper, index) => {
      const imageSrc = imageWrapper.attributes().src;
      const expectedImgSrc = `/icons/${tags[index]}.png`;
      expect(imageSrc).toBe(expectedImgSrc);
    });
  });
});
