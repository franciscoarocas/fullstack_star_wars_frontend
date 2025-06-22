
import logo from '../assets/star_wars_logo.png';
import logo_home from '../assets/star_wars_logo_home.png';

export type logoName = 'home' | 'default';

export type LogoPaths = {
  home   : string;
  default: string;
}

export const LOGOS : LogoPaths = {
  home    : logo_home,
  default : logo
}

export type LogoType = {
  type?: logoName;
}