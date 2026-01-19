import { MenuItem } from './menu-item';

export const MENU_DATA: MenuItem[] = [

  {
    id: 1,
    name: 'Home',
    icon: 'home',
    children:[
        {
        id: 4,
        name: 'Dashboard',
        icon: 'dashboard',
        route: '/home/dashboard',
      },
    ]
  },

//   {
//     id: 2,
//     name: 'Finance',
//     icon: 'account_balance',
//     route: '/home/dashboard'
//   },

  {
    id: 3,
    name: 'Inventory',
    icon: 'inventory',
    children: [
      {
        id: 4,
        name: 'Item Master',
        icon: 'list',
        route: '/home/inventory/product',
      },
      {
        id: 5,
        name: 'Transaction',
        icon: 'sync',
        route: '/home/inventory/product',
      },
      {
        id: 6,
        name: 'Stock Report',
        icon: 'assessment',
        route: '/home/inventory/product',
      },
    ],
  },

  {
    id: 7,
    name: 'System',
    icon: 'settings',
    children: [
      {
        id: 8,
        name: 'User Role',
        icon: 'security',
        route: '/home/permission',
      },
      {
        id: 9,
        name: 'User',
        icon: 'person',
        route: '/home/users',
      },
    ],
  },
];
