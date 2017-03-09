import { MenuItem } from './modules/core/models/MenuItem';

export const MENU: MenuItem[] = [
  { label: 'Header', icon: '', url: '', visivility: 'private', isHeader: true, childs: [] },
  { label: 'Home', icon: 'fa fa-home', url: '/front/landing', visivility: 'private', isHeader: false, childs: [] },
  { label: 'Landing', icon: 'fa fa-home', url: '/front/landing', visivility: 'public', isHeader: false, childs: [] },
  { label: 'Empresas', icon: 'fa fa-building', url: '/company', visivility: 'private', isHeader: false, childs: [] },
];