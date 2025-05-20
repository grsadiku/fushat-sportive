import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Ballina',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  // {
  //   navCap: 'Përdoruesit',
  // },
  {
    displayName: 'Përdoruesit',
    iconName: 'users',
    route: '/users',
  },
  {
    displayName: 'Fushat',
    iconName: 'soccer-field',
    route: '/facilities/facilities',
  },
  {
    displayName: 'Rezervimet',
    iconName: 'calendar-stats',
    route: '/reservations/reservations',
  },
  {
    displayName: 'Raportet',
    iconName: 'report',
    route: '/ui-components/menu',
  },
  // {
  //   displayName: 'Tooltips',
  //   iconName: 'tooltip',
  //   route: '/ui-components/tooltips',
  // },
  // {
  //   navCap: 'Auth',
  // },
  // {
  //   displayName: 'Login',
  //   iconName: 'lock',
  //   route: '/authentication/login',
  // },
  // {
  //   displayName: 'Register',
  //   iconName: 'user-plus',
  //   route: '/authentication/register',
  // },
  // {
  //   navCap: 'Extra',
  // },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  // {
  //   displayName: 'Sample Page',
  //   iconName: 'aperture',
  //   route: '/extra/sample-page',
  // },
];
