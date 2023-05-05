import { Ref } from 'vue';

const settings = {
  small: {
    maxWidth: 900,
    youtubeWidth: (clientWidth: number) => 0.8 * clientWidth,
    mediaQueryClasses: 'upto-900',
    flagStyle: (clientWidth: number) => `width: ${(1 / clientWidth) ** 0.2 * 4000.0} px`,
  },
  medium: {
    maxWidth: 1240,
    youtubeWidth: () => 500,
    mediaQueryClasses: 'upto-1240',
    flagStyle: () => '',
  },
  large: {
    maxWidth: null,
    youtubeWidth: () => 650,
    mediaQueryClasses: '',
    flagStyle: () => '',
  },
} as const;

export function useWindowSize({
  youtubeWidth,
  mediaQueryClasses,
  flagStyle,
}: {
  youtubeWidth: Ref<number>;
  mediaQueryClasses: Ref<string>;
  flagStyle?: Ref<string>;
}) {
  function windowSizeChanged() {
    const sizeName =
      document.body.clientWidth < settings.small.maxWidth
        ? 'small'
        : document.body.clientWidth < settings.medium.maxWidth
        ? 'medium'
        : 'large';

    youtubeWidth.value = settings[sizeName].youtubeWidth(document.body.clientWidth);
    mediaQueryClasses.value = settings[sizeName].mediaQueryClasses;
    flagStyle && (flagStyle.value = settings[sizeName].flagStyle(document.body.clientWidth));
  }

  return {
    windowSizeChanged,
  };
}
