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
};

export function getSizesByWindowWidth() {
  const sizeName =
    document.body.clientWidth < settings.small.maxWidth
      ? 'small'
      : document.body.clientWidth < settings.medium.maxWidth
      ? 'medium'
      : 'large';

  return {
    youtubeWidth: settings[sizeName].youtubeWidth(document.body.clientWidth),
    mediaQueryClasses: settings[sizeName].mediaQueryClasses,
    flagStyle: settings[sizeName].flagStyle(document.body.clientWidth),
  };
}
