import { Routes } from '@angular/router';
import { DynamicComponent } from './dynamic-component/dynamic-component';
import { Home } from './home/home';
import { Product } from './product/product/product';
import { Setting } from './setting/setting';
import { Dashboard } from './dashboard/dashboard';
import { User } from './users/user/user';
import { DragDrop } from './drag-drop/drag-drop';
import { Login } from './auth/login/login';
import { Component } from '@angular/core';
import { Signup } from './auth/signup/signup';
import { PermissionComponent } from './Menu/permissioncomponent/permissioncomponent';

export const routes: Routes = [
   // Default redirect
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  // Auth module (NO home layout)
  {
    path: 'auth',
    children: [
      { path: 'login', component: Login },
      { path: 'signup', component: Signup },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },

  // HOME LAYOUT (PARENT OF ALL PAGES)
  {
    path: 'home',
    component: Home,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'users', component: User },
      { path: 'settings', component: Setting },

      // Inventory under Home
      { path: 'inventory/product', component: Product },

      // Other pages
      { path: 'dynamic', component: DragDrop },

      //setting page
      { path: 'permission', component: PermissionComponent },

      // Default home route
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
