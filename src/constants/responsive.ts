const MAX_WIDTH_DESKTOP: number = 1920;
const MAX_WIDTH_DESKTOP_SMALL: number = 1199;
const MAX_WIDTH_TABLET: number = 991;
const MAX_WIDTH_MOBILE: number = 767;
const MIN_WIDTH_MOBILE: number = 575;

export default {
  MAX_WIDTH_DESKTOP,
  MAX_WIDTH_TABLET,
  MAX_WIDTH_MOBILE,
  MAX_WIDTH_DESKTOP_SMALL,
  MIN_WIDTH_MOBILE,
  maxDesktopLarge: `@media screen and (max-width: ${MAX_WIDTH_DESKTOP_SMALL}px)`,
  minDesktopLarge: `@media screen and (min-width: ${
    MAX_WIDTH_DESKTOP_SMALL + 1
  }px)`,
  maxDesktopSmall: `@media screen and (max-width: ${MAX_WIDTH_DESKTOP_SMALL}px)`,
  minDesktopSmall: `@media screen and (min-width: ${MAX_WIDTH_TABLET + 1}px)`,
  maxTablet: `@media screen and (max-width: ${MAX_WIDTH_TABLET}px)`,
  minTablet: `@media screen and (min-width: ${MAX_WIDTH_MOBILE + 1}px)`,
  maxMobile: `@media (max-width: ${MAX_WIDTH_MOBILE}px)`,
  minMobile: `@media (max-width: ${MIN_WIDTH_MOBILE + 1}px)`,
};
