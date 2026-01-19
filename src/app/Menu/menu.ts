import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';
import { MENU_DATA } from './menu.mock';

@Injectable({
  providedIn: 'root',
})
export class Menu {
    private STORAGE_KEY = 'app_menus';

  getMenus(): MenuItem[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  initMenus() {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(MENU_DATA));
    }
  }

  updateMenus(menus: MenuItem[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(menus));
  }
}
